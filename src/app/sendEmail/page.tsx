'use client'
import { Resend } from 'resend';
import Email from '@/components/Email';

const resend = new Resend('re_123456789');
async function sendEmail (){
  try {
    await resend.emails.send({
      from: 'shayanamaralie@gmail.com',
      to: 'shayanamaralie@gmail.com',
      subject: 'hello world',
      react: <Email url="https://example.com" />,
    });
  } catch (error) {
    console.log(error)
  }
  
}

const Page = () => {
  return (
    <div>
      <button onClick={sendEmail}>send email</button>
    </div>
  )
}

export default Page

