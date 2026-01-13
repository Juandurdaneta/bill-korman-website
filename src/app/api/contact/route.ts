import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// Subject mapping for email formatting
const subjectLabels: Record<string, string> = {
  'coaching-intensive': '1:1 Coaching Intensive',
  'coaching-basic': '1:1 Basic Coaching',
  'group-training': 'Group Training for Teams',
  'course': 'On-Demand Course',
  'speaking': 'Speaking Engagement',
  'media': 'Media/Press Inquiry',
  'other': 'General Question',
};

function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!data.firstName || data.firstName.trim().length < 2) {
    errors.firstName = 'First name must be at least 2 characters';
  }
  if (!data.lastName || data.lastName.trim().length < 2) {
    errors.lastName = 'Last name must be at least 2 characters';
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please provide a valid email address';
  }
  if (!data.subject) {
    errors.subject = 'Please select a topic';
  }
  if (!data.message || data.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate input
    const { isValid, errors } = validateContactForm(body);
    if (!isValid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // Format email content
    const emailContent = {
      to: 'hello@the168game.com',
      from: body.email,
      subject: `[Contact Form] ${subjectLabels[body.subject] || body.subject} - ${body.firstName} ${body.lastName}`,
      text: `
New Contact Form Submission
============================

Name: ${body.firstName} ${body.lastName}
Email: ${body.email}
Phone: ${body.phone || 'Not provided'}
Topic: ${subjectLabels[body.subject] || body.subject}

Message:
${body.message}

---
Sent from The 168 Game website contact form
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Plus Jakarta Sans', Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #3498db, #1a6fa3); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f5f5f5; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .value { color: #333; }
    .message-box { background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #3498db; }
    .footer { margin-top: 20px; font-size: 12px; color: #888; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">New Contact Form Submission</h1>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">The 168 Game Website</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${body.firstName} ${body.lastName}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${body.email}">${body.email}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone</div>
        <div class="value">${body.phone || 'Not provided'}</div>
      </div>
      <div class="field">
        <div class="label">Topic</div>
        <div class="value">${subjectLabels[body.subject] || body.subject}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${body.message.replace(/\n/g, '<br>')}</div>
      </div>
      <div class="footer">
        Sent from The 168 Game website contact form
      </div>
    </div>
  </div>
</body>
</html>
      `.trim(),
    };

    // TODO: Integrate with email service
    // Option 1: Resend (recommended)
    // npm install resend
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'The 168 Game <noreply@the168game.com>',
    //   to: emailContent.to,
    //   replyTo: body.email,
    //   subject: emailContent.subject,
    //   text: emailContent.text,
    //   html: emailContent.html,
    // });

    // Option 2: SendGrid
    // npm install @sendgrid/mail
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send(emailContent);

    // For now, log the submission (replace with actual email service)
    console.log('Contact form submission:', {
      name: `${body.firstName} ${body.lastName}`,
      email: body.email,
      phone: body.phone || 'Not provided',
      subject: subjectLabels[body.subject] || body.subject,
      message: body.message,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          'Thank you for your message. We will get back to you within 24-48 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again or email us directly.',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint. Use POST to submit a form.' },
    { status: 405 }
  );
}
