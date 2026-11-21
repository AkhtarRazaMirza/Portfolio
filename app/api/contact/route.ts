import { Resend } from "resend";
import { NextResponse, NextRequest } from "next/server";

// Maximum allowable request payload size in bytes (50 KB)
const MAX_PAYLOAD_BYTES = 50 * 1024;

export async function POST(request: NextRequest) {
  try {
    // 1. Guard against oversized payloads via Content-Length header if present
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        { error: "Request payload too large. Maximum size is 50 KB." },
        { status: 413 }
      );
    }

    // 2. Stream body and enforce size limit even when Content-Length is missing or inaccurate
    // Aborts early before consuming excessive memory
    let bodyText = "";
    if (request.body) {
      const reader = request.body.getReader();
      let bytesRead = 0;
      const decoder = new TextDecoder("utf-8");

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        bytesRead += value.byteLength;
        if (bytesRead > MAX_PAYLOAD_BYTES) {
          await reader.cancel("Payload exceeded maximum allowed size");
          return NextResponse.json(
            { error: "Request payload too large. Maximum size is 50 KB." },
            { status: 413 }
          );
        }
        bodyText += decoder.decode(value, { stream: true });
      }
      bodyText += decoder.decode();
    }

    if (!bodyText.trim()) {
      return NextResponse.json(
        { error: "Request body cannot be empty." },
        { status: 400 }
      );
    }

    // 3. Parse JSON payload with malformed JSON protection
    let body: unknown;
    try {
      body = JSON.parse(bodyText);
    } catch {
      return NextResponse.json(
        { error: "Malformed request payload. Please submit valid JSON." },
        { status: 400 }
      );
    }

    // 4. Verify body shape (must be non-null object, not an array or primitive)
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: "Invalid request format. Expected a JSON object payload." },
        { status: 400 }
      );
    }

    const payload = body as Record<string, unknown>;
    const { name, email, message, _gotcha } = payload;

    // 5. Honeypot check: silently discard bot submissions without sending email
    // Note: Honeypot alone is a basic bot deterrent and not a substitute for full rate limiting or edge firewalls
    if (_gotcha && typeof _gotcha === "string" && _gotcha.trim().length > 0) {
      console.warn("[Contact API] Bot submission caught by honeypot field. Discarding silently.");
      return NextResponse.json(
        { success: true, message: "Message submitted successfully." },
        { status: 200 }
      );
    }

    // 6. Server-side validation: Name (2–100 characters)
    if (typeof name !== "string") {
      return NextResponse.json(
        { error: "Name must be provided as text." },
        { status: 400 }
      );
    }
    const trimmedName = name.trim();
    if (trimmedName.length < 2 || trimmedName.length > 100) {
      return NextResponse.json(
        { error: "Name must be between 2 and 100 characters." },
        { status: 400 }
      );
    }

    // 7. Server-side validation: Email (5–100 characters, valid email format)
    if (typeof email !== "string") {
      return NextResponse.json(
        { error: "Email must be provided as text." },
        { status: 400 }
      );
    }
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      trimmedEmail.length < 5 ||
      trimmedEmail.length > 100 ||
      !emailRegex.test(trimmedEmail)
    ) {
      return NextResponse.json(
        { error: "A valid email address between 5 and 100 characters is required." },
        { status: 400 }
      );
    }

    // 8. Server-side validation: Message (10–3,000 characters)
    if (typeof message !== "string") {
      return NextResponse.json(
        { error: "Message must be provided as text." },
        { status: 400 }
      );
    }
    const trimmedMessage = message.trim();
    if (trimmedMessage.length < 10 || trimmedMessage.length > 3000) {
      return NextResponse.json(
        { error: "Message must be between 10 and 3,000 characters." },
        { status: 400 }
      );
    }

    // 9. Sanitize name to prevent CR/LF email header injection
    const sanitizedName = trimmedName.replace(/[\r\n]+/g, " ");

    // 10. Check API key without leaking internal environment variable names to clients
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[Contact API Error] Email service is unconfigured (RESEND_API_KEY missing).");
      return NextResponse.json(
        {
          error:
            "Email service is currently unavailable. Please reach out directly at akhtarrazamirza111@gmail.com.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_EMAIL || "akhtarrazamirza111@gmail.com";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "Akhtar Raza <hello@akhtarraza.in>";

    // 11. Dispatch email via Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: trimmedEmail,
      subject: `New Portfolio Contact from ${sanitizedName}`,
      text: `Name:\n${sanitizedName}\n\nEmail:\n${trimmedEmail}\n\nMessage:\n${trimmedMessage}`,
    });

    if (error || !data) {
      console.error(
        "[Contact API Error] Resend dispatch failure:",
        error ? `${error.name}: ${error.message}` : "No response data returned from email provider."
      );
      return NextResponse.json(
        {
          error:
            "Failed to deliver message via email provider. Please contact directly at akhtarrazamirza111@gmail.com.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message submitted successfully.", id: data.id },
      { status: 200 }
    );
  } catch (err) {
    console.error(
      "[Contact API Error] Unexpected handler failure:",
      err instanceof Error ? err.message : err
    );
    return NextResponse.json(
      {
        error:
          "An unexpected error occurred while processing your message. Please reach out directly at akhtarrazamirza111@gmail.com.",
      },
      { status: 500 }
    );
  }
}
