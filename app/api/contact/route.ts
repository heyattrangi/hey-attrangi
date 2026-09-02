import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const firstName = (body.firstName ?? body.name?.split(" ")[0] ?? "").trim();
    const lastName = (body.lastName ?? body.name?.split(" ").slice(1).join(" ") ?? "").trim();
    const email = (body.email ?? "").trim().toLowerCase();
    const phoneNumber = (body.phoneNumber ?? body.phone ?? "").trim();
    const organization = (body.organization ?? body.company ?? "").trim();
    const role = (body.role ?? "").trim();
    const message = (body.message ?? "").trim();
    const hearAboutUs = (body.hearAboutUs ?? body.hearAbout ?? "").trim();
    const termsAccepted = Boolean(body.termsAccepted ?? body.acceptTerms);

    // Validation
    if (!firstName) {
      return NextResponse.json(
        { success: false, message: "First name is required." },
        { status: 400 }
      );
    }

    if (!lastName) {
      return NextResponse.json(
        { success: false, message: "Last name is required." },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!organization) {
      return NextResponse.json(
        { success: false, message: "Organization name is required." },
        { status: 400 }
      );
    }

    if (!termsAccepted) {
      return NextResponse.json(
        { success: false, message: "You must accept the Terms to submit." },
        { status: 400 }
      );
    }

    // Save submission into MongoDB
    const submission = await prisma.contactSubmission.create({
      data: {
        firstName,
        lastName,
        email,
        phoneNumber: phoneNumber || null,
        organization,
        role: role || null,
        message: message || null,
        hearAboutUs: hearAboutUs || null,
        termsAccepted,
      },
    });

    // Optional: Send email notification if SMTP is configured
    try {
      const host = process.env.SMTP_HOST || "smtp.gmail.com";
      const port = parseInt(process.env.SMTP_PORT || "465", 10);
      const secure = port === 465;
      const user = process.env.SMTP_USER;
      const pass = process.env.SMTP_PASSWORD;

      if (user && pass) {
        const transporter = nodemailer.createTransport({
          host,
          port,
          secure,
          auth: { user, pass },
        });

        const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "heyattrangi@gmail.com";
        const fullName = `${firstName} ${lastName}`.trim();

        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"${fullName}" <${user}>`,
          to: receiverEmail,
          replyTo: email,
          subject: `New Contact Submission from ${fullName} (${organization})`,
          text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phoneNumber || "N/A"}\nOrganization: ${organization}\nRole: ${role || "N/A"}\nHeard About Us: ${hearAboutUs || "N/A"}\n\nMessage:\n${message || "No message provided"}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
              <h2 style="color: #ea580c; margin-top: 0; padding-bottom: 12px; border-bottom: 2px solid #ea580c; font-size: 20px;">New Contact Form Submission</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 16px;">
                <tr><td style="padding: 6px 0; color: #64748b; width: 140px;"><strong>Name:</strong></td><td style="padding: 6px 0; color: #0f172a;">${fullName}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;"><strong>Email:</strong></td><td style="padding: 6px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #ea580c;">${email}</a></td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;"><strong>Phone:</strong></td><td style="padding: 6px 0; color: #0f172a;">${phoneNumber || "N/A"}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;"><strong>Organization:</strong></td><td style="padding: 6px 0; color: #0f172a;">${organization}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;"><strong>Role:</strong></td><td style="padding: 6px 0; color: #0f172a;">${role || "N/A"}</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;"><strong>Heard About Us:</strong></td><td style="padding: 6px 0; color: #0f172a;">${hearAboutUs || "N/A"}</td></tr>
              </table>
              <div style="background-color: #f8fafc; padding: 16px; border-left: 4px solid #ea580c; border-radius: 6px;">
                <p style="margin: 0 0 6px 0; font-size: 13px; font-weight: 600; color: #475569;">Message:</p>
                <div style="white-space: pre-wrap; font-size: 14px; color: #0f172a; line-height: 1.5;">${message || "No message provided"}</div>
              </div>
            </div>
          `,
        });
      }
    } catch (emailError) {
      console.warn("Notification email sending skipped or failed:", emailError);
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been submitted successfully.",
      id: submission.id,
    });
  } catch (error: any) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Something went wrong while submitting your message. Please try again.",
      },
      { status: 500 }
    );
  }
}
