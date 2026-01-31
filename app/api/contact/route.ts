import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Basic honeypot anti-spam
    if (body?.honey) {
      return Response.json({ ok: true }, { status: 200 });
    }

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    const program = String(body?.program || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Please fill out name, email, and message." },
        { status: 400 }
      );
    }

    // IMPORTANT: Use SMTP credentials (recommended: Gmail App Password)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toList = [
      "business.afst@gmail.com",
      "info@royalinternationalflightschool.com",
    ];

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

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.5">
        <h2 style="margin:0 0 10px">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "N/A")}</p>
        <p><strong>Program:</strong> ${escapeHtml(program || "N/A")}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
        <hr />
        <p style="color:#555">Sent from Royal International Flight School website</p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER || "no-reply@royal",
      to: toList.join(", "),
      replyTo: email,
      subject,
      text,
      html,
    });

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    return Response.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}

// Minimal HTML escaping to prevent injection in emails
function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
