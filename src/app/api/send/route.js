import { EmailTemplate } from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend("re_WPdBBYuu_FeYrroRyi34TSUbcMJ388QDr");

export async function POST(request) {
  try {
    const body= await request.json();
    console.log(body)
    const{ name,email,subject, message}=body;
    const data = await resend.emails.send({
      from: `${name}"  " ${email}`,
      to: ['salahfatimi16@gmail.com'],
      subject: subject,
      react: EmailTemplate({ firstName: name , msg:message , email:email }),
    });

    if(data.status==='success'){
      return NextResponse.json({message:"email sent"})
    }
    return NextResponse.json(data)
  } catch (error) {
    return console.log('error',error)
  }
}
