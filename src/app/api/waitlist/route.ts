import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ message: 'Invalid email' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('waitlist')
    .insert([{ email }]);

  if (error) {
    if (error.code === '23505') { // unique violation
      return NextResponse.json({ message: 'You’re already on the waitlist!' }, { status: 409 });
    }
    console.error(error);
    return NextResponse.json({ message: 'Something went wrong.' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Successfully joined the waitlist' }, { status: 200 });
}
