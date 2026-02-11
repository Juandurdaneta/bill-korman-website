import { NextRequest, NextResponse } from 'next/server';

interface PlaybookFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

const GHL_BASE_URL = 'https://services.leadconnectorhq.com';

function validatePlaybookForm(data: PlaybookFormData): {
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

async function createOrUpdateGHLContact(data: PlaybookFormData): Promise<string> {
  const locationId = process.env.GHL_LOCATION_ID;
  const tags = ['playbook-request', 'lead-magnet'];

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
      source: 'Playbook Form',
    }),
  });

  if (createRes.ok) {
    const result = await createRes.json();
    return result.contact.id;
  }

  const errorResult = await createRes.json().catch(() => null);

  if (errorResult?.meta?.contactId) {
    const contactId = errorResult.meta.contactId;
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

export async function POST(request: NextRequest) {
  try {
    const body: PlaybookFormData = await request.json();

    const { isValid, errors } = validatePlaybookForm(body);
    if (!isValid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    if (!process.env.GHL_API_KEY || !process.env.GHL_LOCATION_ID) {
      console.error('GHL integration not configured — missing GHL_API_KEY or GHL_LOCATION_ID');
      return NextResponse.json(
        {
          success: false,
          message: 'Something went wrong. Please try again later.',
        },
        { status: 500 }
      );
    }

    await createOrUpdateGHLContact(body);

    return NextResponse.json(
      {
        success: true,
        message: 'Your playbook is ready for download!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Playbook form error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again later.',
      },
      { status: 500 }
    );
  }
}
