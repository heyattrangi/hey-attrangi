import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+\-\s()]{7,20}$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // New simplified institution form fields with fallback to legacy fields
    const instituteName = (body.instituteName ?? body.organization ?? body.company ?? "").trim();
    const instituteType = (body.instituteType ?? body.type ?? "").trim();
    const otherInstituteType = (body.otherInstituteType ?? "").trim();
    const mobileNumber = (body.mobileNumber ?? body.phoneNumber ?? body.phone ?? "").trim();
    const email = (body.email ?? "").trim().toLowerCase();

    // Legacy fields for backward compatibility
    const firstName = (body.firstName ?? body.name?.split(" ")[0] ?? "").trim();
    const lastName = (body.lastName ?? body.name?.split(" ").slice(1).join(" ") ?? "").trim();
    const role = (body.role ?? "").trim();
    const message = (body.message ?? "").trim();
    const hearAboutUs = (body.hearAboutUs ?? body.hearAbout ?? "").trim();
    const termsAccepted = body.termsAccepted !== undefined ? Boolean(body.termsAccepted) : true;

    // Validation
    if (!instituteName) {
      return NextResponse.json(
        { success: false, message: "Institute name is required." },
        { status: 400 }
      );
    }

    if (!instituteType) {
      return NextResponse.json(
        { success: false, message: "Please select the type of institute." },
        { status: 400 }
      );
    }

    if (instituteType === "Other" && !otherInstituteType) {
      return NextResponse.json(
        { success: false, message: "Please specify your institute type." },
        { status: 400 }
      );
    }

    if (!mobileNumber) {
      return NextResponse.json(
        { success: false, message: "Mobile number is required." },
        { status: 400 }
      );
    }

    if (!PHONE_REGEX.test(mobileNumber)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid mobile number." },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email address is required." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Save submission into MongoDB
    const submission = await prisma.contactSubmission.create({
      data: {
        instituteName,
        instituteType,
        otherInstituteType: instituteType === "Other" ? otherInstituteType : null,
        mobileNumber,
        email,
        // Legacy fields
        firstName: firstName || null,
        lastName: lastName || null,
        phoneNumber: mobileNumber || null,
        organization: instituteName,
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
        const displayType = instituteType === "Other" ? `Other (${otherInstituteType})` : instituteType;

        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"Hey Attrangi Contact" <${user}>`,
          to: receiverEmail,
          replyTo: email,
          subject: `New Institution Inquiry: ${instituteName} (${displayType})`,
          text: `Institute Name: ${instituteName}\nInstitute Type: ${displayType}\nMobile Number: ${mobileNumber}\nEmail: ${email}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
              <h2 style="color: #ea580c; margin-top: 0; padding-bottom: 12px; border-bottom: 2px solid #ea580c; font-size: 20px;">New Institution Contact Inquiry</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 16px;">
                <tr><td style="padding: 8px 0; color: #64748b; width: 160px;"><strong>Institute Name:</strong></td><td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${instituteName}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Type of Institute:</strong></td><td style="padding: 8px 0; color: #0f172a;">${displayType}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Mobile Number:</strong></td><td style="padding: 8px 0; color: #0f172a;">${mobileNumber}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Email Address:</strong></td><td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #ea580c;">${email}</a></td></tr>
              </table>
            </div>
          `,
        });
      }
    } catch (emailError) {
      console.warn("Notification email sending skipped or failed:", emailError);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your information has been submitted successfully.",
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
