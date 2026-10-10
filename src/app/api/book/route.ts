import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, company, date, time } = data;

    // Log the booking for local testing
    console.log('\n=============================================');
    console.log('🗓️ NEW CALL BOOKED!');
    console.log('=============================================');
    console.log(`Name:    ${name}`);
    console.log(`Email:   ${email}`);
    console.log(`Company: ${company || 'N/A'}`);
    console.log(`Date:    ${date}`);
    console.log(`Time:    ${time}`);
    console.log('=============================================\n');

    /**
     * TO SEND AN ACTUAL EMAIL:
     * 1. You can use a service like Resend (https://resend.com) or SendGrid.
     * 2. Install it: `npm install resend`
     * 3. Uncomment and configure the code below:
     */
    
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'bookings@yourdomain.com',
      to: ['hello@auraplus.com'],
      subject: `New Booking: ${name} on ${date}`,
      html: `
        <h2>New Call Scheduled</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
      `
    });
    */

    // Simulate network delay for UI smoothness
    await new Promise((resolve) => setTimeout(resolve, 1200));

    return NextResponse.json({ success: true, message: 'Booking confirmed!' });
  } catch (error) {
    console.error('Booking Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to book the call.' },
      { status: 500 }
    );
  }
}
