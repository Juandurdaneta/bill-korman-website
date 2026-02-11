import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const GHL_BASE_URL = 'https://services.leadconnectorhq.com';

// Subject mapping for display labels and GHL tags
const subjectLabels: Record<string, string> = {
  'coaching-intensive': '1:1 Coaching Intensive',
  'coaching-basic': '1:1 Basic Coaching',
  'group-training': 'Group Training for Teams',
  'course': 'On-Demand Course',
  'speaking': 'Speaking Engagement',
  'media': 'Media/Press Inquiry',
  'other': 'General Question',
};

const subjectTags: Record<string, string[]> = {
  'coaching-intensive': ['contact-form', 'coaching-intensive', 'high-intent'],
  'coaching-basic': ['contact-form', 'coaching-basic'],
  'group-training': ['contact-form', 'group-training', 'corporate'],
  'course': ['contact-form', 'course-interest'],
  'speaking': ['contact-form', 'speaking-inquiry'],
  'media': ['contact-form', 'media-inquiry'],
  'other': ['contact-form', 'general-inquiry'],
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

function getGHLHeaders() {
  return {
    Authorization: `Bearer ${process.env.GHL_API_KEY}`,
    'Content-Type': 'application/json',
    Version: '2021-07-28',
  };
}

async function createOrUpdateGHLContact(data: ContactFormData): Promise<string> {
  const locationId = process.env.GHL_LOCATION_ID;
  const tags = subjectTags[data.subject] || ['contact-form'];

  // Try to create the contact
  const createRes = await fetch(`${GHL_BASE_URL}/contacts/`, {
    method: 'POST',
    headers: getGHLHeaders(),
    body: JSON.stringify({
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone?.trim() || undefined,
      locationId,
      tags,
      source: 'Website Contact Form',
    }),
  });

  if (createRes.ok) {
    const result = await createRes.json();
    return result.contact.id;
  }

  // GHL returns 400/422/409 for duplicate contacts
  // The error response includes the existing contactId in meta
  const errorResult = await createRes.json().catch(() => null);

  if (errorResult?.meta?.contactId) {
    const contactId = errorResult.meta.contactId;
    // Update existing contact with new tags and info
    await fetch(`${GHL_BASE_URL}/contacts/${contactId}`, {
      method: 'PUT',
      headers: getGHLHeaders(),
      body: JSON.stringify({
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        phone: data.phone?.trim() || undefined,
        tags,
      }),
    });
    return contactId;
  }

  throw new Error(`Failed to create GHL contact: ${createRes.status} ${JSON.stringify(errorResult)}`);
}

async function createGHLOpportunity(contactId: string, data: ContactFormData) {
  const pipelineId = process.env.GHL_PIPELINE_ID;
  const pipelineStageId = process.env.GHL_PIPELINE_STAGE_ID;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!pipelineId || !pipelineStageId) {
    console.warn('GHL pipeline not configured — skipping opportunity creation');
    return null;
  }

  const topicLabel = subjectLabels[data.subject] || data.subject;

  const res = await fetch(`${GHL_BASE_URL}/opportunities/`, {
    method: 'POST',
    headers: getGHLHeaders(),
    body: JSON.stringify({
      pipelineId,
      pipelineStageId,
      locationId,
      contactId,
      name: `${topicLabel} — ${data.firstName} ${data.lastName}`,
      status: 'open',
    }),
  });

  if (!res.ok) {
    const errorBody = await res.text();
    console.error('Failed to create GHL opportunity:', res.status, errorBody);
    return null;
  }

  const result = await res.json();
  return result.opportunity;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate input
    const { isValid, errors } = validateContactForm(body);
    if (!isValid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // Check GHL configuration
    if (!process.env.GHL_API_KEY || !process.env.GHL_LOCATION_ID) {
      console.error('GHL integration not configured — missing GHL_API_KEY or GHL_LOCATION_ID');
      return NextResponse.json(
        {
          success: false,
          message: 'Something went wrong. Please try again or email us directly.',
        },
        { status: 500 }
      );
    }

    // 1. Create or update contact in GHL
    const contactId = await createOrUpdateGHLContact(body);

    // 2. Create pipeline opportunity
    await createGHLOpportunity(contactId, body);

    // 3. Add a note with the full message to the contact
    await fetch(`${GHL_BASE_URL}/contacts/${contactId}/notes`, {
      method: 'POST',
      headers: getGHLHeaders(),
      body: JSON.stringify({
        body: `**Website Contact Form Submission**\n\nTopic: ${subjectLabels[body.subject] || body.subject}\n\nMessage:\n${body.message}`,
      }),
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
