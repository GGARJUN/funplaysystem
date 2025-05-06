
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { firstname, lastname, email, service, message, phone, location } = await request.json();

    // Validate required fields
    if (!firstname || !email || !service) {
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

    // Configure SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER || "techarjung@gmail.com",
        pass: process.env.EMAIL_PASS || "ifsi zovt nsjm xusd",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Define email content
    const mailOptions = {
      from: `"Fun Play Systems" <${process.env.EMAIL_USER || "techarjung@gmail.com"}>`,
      to: process.env.EMAIL_RECEIVER || "arjunganesh963@gmail.com",
      replyTo: email,
      subject: "New Quote Request",
      html: `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #007BFF; padding: 20px; text-align: center; color: #fff;">
          <h1 style="margin: 0; font-size: 24px;">New Quote Request</h1>
        </div>
        
        <div style="padding: 20px;">
          <div style="margin-bottom: 15px;">
            <strong>Name:</strong> ${firstname} ${lastname || ''}
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Email:</strong> ${email}
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Phone:</strong> ${phone || 'Not provided'}
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Location:</strong> ${location || 'Not provided'}
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Service:</strong> ${service}
          </div>
          <div style="margin-bottom: 15px;">
            <strong>Message:</strong> ${message || 'No additional message'}
          </div>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 14px; color: #666;">
          <p style="margin: 0;">This email was sent from the quote request form</p>
        </div>
      </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}