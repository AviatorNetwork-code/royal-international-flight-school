import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

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

    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Email service not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

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

    // 🔴 THIS IS WHERE YOUR SNIPPET GOES
    await resend.emails.send({
      from: "info@royalinternationalflightschool.com",
      to: ["info@royalinternationalflightschool.com"],
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT API ERROR:", err);
    return NextResponse.json(
      { ok: false, error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
