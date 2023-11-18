let nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, otpText) {
    let transporter = nodemailer.createTransport({
        method: 'POST',
        service: "smtp.gmail.com",
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PW,
        },
    });

    let mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: toEmail,
        subject: subject,
        text: otpText,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("Email Do not sent", info);
            throw new Error(error);    
        } else {
            console.log("Email Sent", info);
            return true;
        }
    });
}