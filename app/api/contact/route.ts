import { NextRequest, NextResponse } from "next/server";
import { ContactMessageCreateSchema } from "@/lib/validations/api";
import { identity } from "@/lib/site";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = ContactMessageCreateSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ detail: result.error.issues }, { status: 400 });
    }

    const name = result.data.name.trim();
    const email = result.data.email.trim();
    const message = result.data.message.trim();
    const createdAt = new Date().toISOString();

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("[Contact API] Error: RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { detail: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    const toEmail = process.env.CONTACT_EMAIL || identity.email || "akhtarrazamirza111@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New Contact Form Message from ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #111;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f4f4f5; padding: 15px; border-left: 4px solid #18181b; margin: 0;">
              ${message.replace(/\n/g, "<br/>")}
            </blockquote>
            <hr style="margin-top: 20px; border: none; border-top: 1px solid #e4e4e7;" />
            <p style="font-size: 12px; color: #71717a;">Submitted at ${createdAt}</p>
          </div>
        `,
      }),
    });

    if (!resendRes.ok) {
      const errorText = await resendRes.text();
      console.error("[Contact API] Resend email delivery failed:", errorText);
      return NextResponse.json(
        { detail: "Failed to send email notification." },
        { status: 502 }
      );
    }

    const resendData = await resendRes.json();
    return NextResponse.json({ ok: true, id: resendData.id ?? crypto.randomUUID() }, { status: 200 });
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json({ detail: "Internal Server Error" }, { status: 500 });
  }
}


