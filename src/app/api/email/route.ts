import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
    const { email, name, message } = await request.json();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "veprsag@gmail.com",
            pass: process.env.NODEMAILER_PW,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.NODEMAILER_EMAIL,
        to: 'sag@toursdekiev.com.ua',
        // cc: email, (uncomment this line if you want to send a copy to the sender)
        subject: `MIW | Message from ${name} (${email})`,
        text: message,
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve('Email sent');
                } else {
                    reject(err.message);
                }
            });
        });

    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email sent' });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}