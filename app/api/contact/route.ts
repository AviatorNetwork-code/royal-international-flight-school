import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // honeypot
    if (body?.honey) return NextResponse.json({ ok: true });

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    const program = String(body?.program || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill out name, email, and message." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.MAIL_FROM;

    if (!process.env.RESEND_API_KEY || !to || !from) {
      console.error("Missing env:", {
        RESEND_API_KEY: !!process.env.RESEND_API_KEY,
        CONTACT_TO_EMAIL: !!to,
        MAIL_FROM: !!from,
      });
      return NextResponse.json(
        { error: "Server email is not configured." },
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

    await resend.emails.send({
      from,
      to: [to, "info@royalinternationalflightschool.com"],
      reply_to: email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("CONTACT API ERROR:", err?.message || err);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
