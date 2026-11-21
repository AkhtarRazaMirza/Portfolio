import { describe, it, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import createJiti from "jiti";

const jiti = createJiti(import.meta.url);
const { Resend } = jiti("resend") as typeof import("resend");
const { NextRequest } = jiti("next/server") as typeof import("next/server");
const { POST } = jiti("./route.ts") as typeof import("./route");

const EmailsProto = Object.getPrototypeOf((new Resend("test_key")).emails);
const originalSend = EmailsProto.send;

function createRequest(body: unknown, headers?: Record<string, string>) {
  return new NextRequest("http://localhost:3000/api/contact", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...headers,
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

describe("Contact API Route (/api/contact)", () => {
  const originalApiKey = process.env.RESEND_API_KEY;

  beforeEach(() => {
    process.env.RESEND_API_KEY = "re_test_mock_api_key";
  });

  afterEach(() => {
    EmailsProto.send = originalSend;
    if (originalApiKey !== undefined) {
      process.env.RESEND_API_KEY = originalApiKey;
    } else {
      delete process.env.RESEND_API_KEY;
    }
  });

  describe("Resend response handling", () => {
    it("returns HTTP 502 with safe error message when Resend returns { data: null, error: null }", async () => {
      EmailsProto.send = async () => ({ data: null, error: null });

      const req = createRequest({
        name: "Akhtar Raza",
        email: "akhtar@example.com",
        message: "This is a legitimate test message with sufficient length.",
      });

      const res = await POST(req);
      assert.strictEqual(res.status, 502);

      const json = await res.json();
      assert.deepStrictEqual(json, {
        error:
          "Failed to deliver message via email provider. Please contact directly at akhtarrazamirza111@gmail.com.",
      });
    });

    it("returns HTTP 502 with safe error message when Resend returns an error", async () => {
      EmailsProto.send = async () => ({
        data: null,
        error: { name: "application_error", message: "Provider rate limit reached" },
      });

      const req = createRequest({
        name: "Akhtar Raza",
        email: "akhtar@example.com",
        message: "This is a legitimate test message with sufficient length.",
      });

      const res = await POST(req);
      assert.strictEqual(res.status, 502);

      const json = await res.json();
      assert.deepStrictEqual(json, {
        error:
          "Failed to deliver message via email provider. Please contact directly at akhtarrazamirza111@gmail.com.",
      });
    });

    it("returns HTTP 200 on successful email dispatch with valid data", async () => {
      const mockId = "msg_resend_mock_success_789";
      EmailsProto.send = async () => ({
        data: { id: mockId },
        error: null,
      });

      const req = createRequest({
        name: "Akhtar Raza",
        email: "akhtar@example.com",
        message: "This is a legitimate test message with sufficient length.",
      });

      const res = await POST(req);
      assert.strictEqual(res.status, 200);

      const json = await res.json();
      assert.deepStrictEqual(json, {
        success: true,
        message: "Message submitted successfully.",
        id: mockId,
      });
    });
  });

  describe("Honeypot protection", () => {
    it("silently discards spam submissions with _gotcha and returns HTTP 200 without calling Resend", async () => {
      let sendCalled = false;
      EmailsProto.send = async () => {
        sendCalled = true;
        return { data: { id: "should_not_be_called" }, error: null };
      };

      const req = createRequest({
        name: "Spam Bot",
        email: "spambot@example.com",
        message: "Buy cheap products now at spamsite.com!",
        _gotcha: "spam trap filled",
      });

      const res = await POST(req);
      assert.strictEqual(res.status, 200);
      assert.strictEqual(sendCalled, false);

      const json = await res.json();
      assert.deepStrictEqual(json, {
        success: true,
        message: "Message submitted successfully.",
      });
    });
  });

  describe("Input validation", () => {
    it("returns HTTP 400 when name is under 2 characters", async () => {
      const req = createRequest({
        name: "A",
        email: "akhtar@example.com",
        message: "Valid length message for testing.",
      });

      const res = await POST(req);
      assert.strictEqual(res.status, 400);
      const json = await res.json();
      assert.strictEqual(json.error, "Name must be between 2 and 100 characters.");
    });

    it("returns HTTP 400 when email format is invalid", async () => {
      const req = createRequest({
        name: "Akhtar Raza",
        email: "not-an-email",
        message: "Valid length message for testing.",
      });

      const res = await POST(req);
      assert.strictEqual(res.status, 400);
      const json = await res.json();
      assert.strictEqual(
        json.error,
        "A valid email address between 5 and 100 characters is required."
      );
    });

    it("returns HTTP 400 when message is under 10 characters", async () => {
      const req = createRequest({
        name: "Akhtar Raza",
        email: "akhtar@example.com",
        message: "Short",
      });

      const res = await POST(req);
      assert.strictEqual(res.status, 400);
      const json = await res.json();
      assert.strictEqual(
        json.error,
        "Message must be between 10 and 3,000 characters."
      );
    });

    it("returns HTTP 400 for empty request body", async () => {
      const req = createRequest("   ");
      const res = await POST(req);
      assert.strictEqual(res.status, 400);
      const json = await res.json();
      assert.strictEqual(json.error, "Request body cannot be empty.");
    });

    it("returns HTTP 400 for malformed JSON payload", async () => {
      const req = createRequest("{ invalid-json-payload ");
      const res = await POST(req);
      assert.strictEqual(res.status, 400);
      const json = await res.json();
      assert.strictEqual(
        json.error,
        "Malformed request payload. Please submit valid JSON."
      );
    });

    it("returns HTTP 413 when Content-Length exceeds 50 KB limit", async () => {
      const req = createRequest(
        {
          name: "Akhtar",
          email: "akhtar@example.com",
          message: "Valid message text here.",
        },
        { "content-length": "60000" }
      );

      const res = await POST(req);
      assert.strictEqual(res.status, 413);
      const json = await res.json();
      assert.strictEqual(
        json.error,
        "Request payload too large. Maximum size is 50 KB."
      );
    });

    it("returns HTTP 413 when oversized request body (> 50 KB) has no Content-Length header", async () => {
      // Body exceeds 50 KB limit (50 * 1024 = 51200 bytes)
      const oversizedPayload = JSON.stringify({
        name: "Akhtar Raza",
        email: "akhtar@example.com",
        message: "A".repeat(55 * 1024),
      });

      const req = new NextRequest("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: oversizedPayload,
      });

      assert.strictEqual(req.headers.get("content-length"), null);

      const res = await POST(req);
      assert.strictEqual(res.status, 413);
      const json = await res.json();
      assert.strictEqual(
        json.error,
        "Request payload too large. Maximum size is 50 KB."
      );
    });

    it("returns HTTP 413 when oversized request body has an inaccurate Content-Length header", async () => {
      // Body exceeds 50 KB limit, but Content-Length inaccurately claims only 100 bytes
      const oversizedPayload = JSON.stringify({
        name: "Akhtar Raza",
        email: "akhtar@example.com",
        message: "B".repeat(55 * 1024),
      });

      const req = new NextRequest("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "content-length": "100",
        },
        body: oversizedPayload,
      });

      assert.strictEqual(req.headers.get("content-length"), "100");

      const res = await POST(req);
      assert.strictEqual(res.status, 413);
      const json = await res.json();
      assert.strictEqual(
        json.error,
        "Request payload too large. Maximum size is 50 KB."
      );
    });
  });

  describe("Service configuration", () => {
    it("returns HTTP 503 when RESEND_API_KEY is not configured", async () => {
      delete process.env.RESEND_API_KEY;

      const req = createRequest({
        name: "Akhtar Raza",
        email: "akhtar@example.com",
        message: "Valid message text for unconfigured test.",
      });

      const res = await POST(req);
      assert.strictEqual(res.status, 503);
      const json = await res.json();
      assert.deepStrictEqual(json, {
        error:
          "Email service is currently unavailable. Please reach out directly at akhtarrazamirza111@gmail.com.",
      });
    });
  });
});
