import { NextResponse } from 'next/server';
import { writeClient } from '../../../../sanity/lib/client';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { message: 'Name and Email are required' },
        { status: 400 }
      );
    }

    // Create a new contactQuery document in Sanity
    const result = await writeClient.create({
      _type: 'contactQuery',
      name,
      email,
      phone,
      company,
      service,
      message,
      status: 'new',
    });

    return NextResponse.json(
      { message: 'Contact query submitted successfully', id: result._id },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error submitting contact query:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
}
