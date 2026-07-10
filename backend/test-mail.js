const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.resend.com',
  port: 465,
  secure: true,
  auth: {
    user: 'resend',
    pass: 're_ScVujnZ8_8AZDe2nwHSBPkyrsEyapmPh4',
  },
});

async function test() {
  try {
    const info = await transporter.sendMail({
      from: '"Test" <onboarding@resend.dev>',
      to: 'random@example.com',
      subject: 'Test',
      html: '<h1>Test</h1>'
    });
    console.log("Success", info);
  } catch (e) {
    console.error("Error:", e);
  }
}

test();
