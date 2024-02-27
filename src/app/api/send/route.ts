import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend("re_jjBnizeG_LQyCgqYBX9Lpnkje2Nzq2q4B");

export async function POST() {
  try {
    // const data = await resend.emails.send({
    //   from: "shayanamaralie@gmail.com",
    //   to: "shayanamaralie@gmail.com",
    //   subject: "Hello World",
    //   html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    //   //   from: 'Acme <onboarding@resend.dev>',
    //   //   to: ['delivered@resend.dev'],
    //   text: "Demo email",
    //   //   subject: 'Hello world',
    //   react: EmailTemplate({ firstName: "John" }),
    // });

    const data = resend.emails.send({
      from: "onboarding@resend.dev",
      to: "sk9629022@gmail.com",
      subject: "Hello World",
    //   text: "Email has been sent",
    //   react: EmailTemplate({ firstName: "John" }),
      html: "<p>Congrats on sending your <strong>First email through CyberNut Health</strong>!</p>",
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
