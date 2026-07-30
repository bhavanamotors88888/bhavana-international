const { Resend } = require('resend');
const config = require('../config/env.config');

const resend = new Resend(config.resendApiKey);

const sendEmailViaAPI = async ({ from, to, replyTo, subject, html }) => {
  try {
    console.log(`Sending email via Resend to: ${to}`);

    const { data, error } = await resend.emails.send({
      from: from || `Bhavana International <${config.smtpUser}>`,
      to: [to],
      replyTo: replyTo,
      subject: subject,
      html: html,
    });

    if (error) {
      console.error('Resend API error:', error);
      throw new Error(error.message);
    }

    console.log('Email sent successfully via Resend. ID:', data.id);
    return data;
  } catch (error) {
    console.error('Error in sendEmailViaAPI:', error.message);
    throw error;
  }
};

module.exports = { sendEmailViaAPI };
