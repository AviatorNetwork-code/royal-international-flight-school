import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot
    if (body?.honey) return NextResponse.json({ ok: true });

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    const program = String(body?.program || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Please fill out name, email, and message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.MAIL_FROM;
    const to = process.env.CONTACT_TO_EMAIL;

    // ✅ Safe debug: tells us what's missing (no secrets)
    if (!apiKey || !from || !to) {
      return NextResponse.json(
        {
          ok: false,
          error: "Email service not configured.",
          debug: {
            RESEND_API_KEY: !!apiKey,
            MAIL_FROM: !!from,
            CONTACT_TO_EMAIL: !!to,
          },
        },
        { status: 500 }
      );
    }

    const subject = `New Contact Form Submission — ${name}`;

    const text = [
      `New contact form submission`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "N/A"}`,
      `Program: ${program || "N/A"}`,
      ``,
      `Message:`,
      message,
      ``,
      `---`,
      `Sent from Royal International Flight School website`,
    ].join("\n");

    const result = await resend.emails.send({
      from,
      to: [to, "info@royalinternationalflightschool.com"],
      replyTo: email,
      subject,
      text,
    });

    // Resend returns { data, error }
    if (result.error) {
      console.error("RESEND ERROR:", result.error);
      return NextResponse.json(
        {
          ok: false,
          error: "Email provider rejected the request.",
          debug: {
            name: result.error.name,
            message: result.error.message,
          },
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("CONTACT API ERROR:", err?.message || err);

    return NextResponse.json(
      {
        ok: false,
        error: "Server error. Please try again later.",
        debug: { message: err?.message || "unknown" },
      },
      { status: 500 }
    );
  }
}
