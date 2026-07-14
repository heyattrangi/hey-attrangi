import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Retrieve SMTP configurations from env, with a standard fallback to Gmail SMTP host
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = parseInt(process.env.SMTP_PORT || "465");
    const secure = port === 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;

    if (!user || !pass) {
      console.warn("SMTP credentials (SMTP_USER, SMTP_PASSWORD) are not set. Contact form message received:", { name, email, message });
      // In development/fallback mode, simulate success to the user so the form works, but warn in console
      return NextResponse.json({
        success: true,
        warning: "SMTP credentials not configured. Message logged to server console."
      });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "heyattrangi@gmail.com";

    const mailOptions = {
      from: process.env.SMTP_FROM || `"${name}" <${user}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 10px;">New Contact Form Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #ea580c; white-space: pre-wrap; font-style: italic;">
            ${message}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
