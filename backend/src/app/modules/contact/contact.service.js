import nodemailer from 'nodemailer';
import { config } from '../../config/env.config.js';

export const sendContactEmail = async (contactData) => {
  const { name, email, company, phone, country, message } = contactData;

  const mailHtml = `
    <div style="font-family: 'Inter', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E5E7EB; border-radius: 12px; overflow: hidden; background-color: #FFFFFF; box-shadow: 0 4px 30px rgba(16, 42, 91, 0.05);">
      
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #132C5E 0%, #0B1F4D 100%); padding: 28px; text-align: center;">
        <h1 style="color: #FFFFFF; margin: 0; font-size: 26px; font-weight: 700; letter-spacing: 0.5px;">Bhavana International</h1>
        <p style="color: #7D9BBD; margin: 8px 0 0 0; font-size: 14px;">Website Quote Request</p>
      </div>

      <!-- Body -->
      <div style="padding: 32px; background-color: #F7F8FA;">
        <h2 style="color: #1F2937; margin-top: 0; margin-bottom: 24px; font-size: 20px;">New Inquiry from <span style="color: #132C5E;">${name}</span></h2>
        
        <!-- Details Table -->
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; background-color: #FFFFFF; border-radius: 8px; overflow: hidden; border: 1px solid #E5E7EB;">
          <tr>
            <td style="padding: 14px 16px; border-bottom: 1px solid #E5E7EB; width: 35%; font-weight: 600; color: #5B7CA3; font-size: 14px;">Full Name</td>
            <td style="padding: 14px 16px; border-bottom: 1px solid #E5E7EB; color: #1F2937; font-weight: 500;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 14px 16px; border-bottom: 1px solid #E5E7EB; font-weight: 600; color: #5B7CA3; font-size: 14px;">Email Address</td>
            <td style="padding: 14px 16px; border-bottom: 1px solid #E5E7EB; color: #1F2937; font-weight: 500;"><a href="mailto:${email}" style="color: #132C5E; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 14px 16px; border-bottom: 1px solid #E5E7EB; font-weight: 600; color: #5B7CA3; font-size: 14px;">Phone / WhatsApp</td>
            <td style="padding: 14px 16px; border-bottom: 1px solid #E5E7EB; color: #1F2937; font-weight: 500;">${phone || '<span style="color: #9CA3AF;">Not provided</span>'}</td>
          </tr>
          <tr>
            <td style="padding: 14px 16px; border-bottom: 1px solid #E5E7EB; font-weight: 600; color: #5B7CA3; font-size: 14px;">Company Name</td>
            <td style="padding: 14px 16px; border-bottom: 1px solid #E5E7EB; color: #1F2937; font-weight: 500;">${company || '<span style="color: #9CA3AF;">Not provided</span>'}</td>
          </tr>
          <tr>
            <td style="padding: 14px 16px; font-weight: 600; color: #5B7CA3; font-size: 14px;">Destination Country</td>
            <td style="padding: 14px 16px; color: #1F2937; font-weight: 500;">${country || '<span style="color: #9CA3AF;">Not provided</span>'}</td>
          </tr>
        </table>

        <!-- Message Box -->
        <div style="background-color: #FFFFFF; padding: 24px; border-radius: 8px; border: 1px solid #E5E7EB;">
          <h3 style="margin-top: 0; color: #5B7CA3; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px;">Requirements Message:</h3>
          <p style="color: #4B5563; line-height: 1.6; margin: 0; white-space: pre-wrap; font-size: 15px;">${message}</p>
        </div>
        
      </div>
      
      <!-- Footer -->
      <div style="background-color: #FFFFFF; padding: 20px; text-align: center; border-top: 1px solid #E5E7EB; color: #6B7280; font-size: 13px;">
        This is an automated notification from the <strong>Bhavana International</strong> website.
      </div>
    </div>
  `;

  // 1. Resend API Flow (If RESEND_API_KEY is configured)
  if (config.RESEND_API_KEY) {
    console.log('[Email] Sending via Resend API...');
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Bhavana Web <onboarding@resend.dev>',
          to: config.SMTP_USER || 'bhavanamotors.88888@gmail.com',
          reply_to: `"${name}" <${email}>`,
          subject: `New Inquiry: ${name} ${company ? '- ' + company : ''} | Bhavana International`,
          html: mailHtml
        })
      });

      const resJson = await response.json();
      if (!response.ok) {
        throw new Error(resJson.message || 'Resend API returned error');
      }
      console.log('[Email] Sent successfully via Resend! Id:', resJson.id);
      return resJson;
    } catch (error) {
      console.error('[Email] Resend API FAILED:', error.message);
      throw error;
    }
  }

  // 2. Traditional SMTP Flow
  // Debug: log what SMTP config we have
  console.log('[Email] SMTP Config:', {
    host: config.SMTP_HOST ,
    port: config.SMTP_PORT ,
    user: config.SMTP_USER,
    passLength: config.SMTP_PASS ? config.SMTP_PASS.length : 0,
  });

  // If no SMTP config, mock the email
  if (!config.SMTP_HOST) {
    console.log('[Email] No SMTP_HOST set — running in MOCK mode. Email not sent.');
    return { success: true, message: 'Mock email sent successfully' };
  }

  const port = parseInt(config.SMTP_PORT || '587', 10);
  const secure = port === 465;

  // Create transporter fresh each time so env vars are always current
  const transporter = nodemailer.createTransport({
    host: config.SMTP_HOST,
    port: port,
    secure: secure,
    auth: {
      user: config.SMTP_USER,
      pass: config.SMTP_PASS,
    },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 15000,
  });

  // Verify SMTP connection before sending
  try {
    await transporter.verify();
    console.log('[Email] SMTP connection verified successfully.');
  } catch (verifyErr) {
    console.error('[Email] SMTP verify FAILED:', verifyErr.message);
    throw verifyErr;
  }

  const mailOptions = {
    from: `"Bhavana International Web" <${config.SMTP_USER}>`,
    replyTo: `"${name}" <${email}>`,
    to: config.SMTP_USER,
    subject: `New Inquiry: ${name} ${company ? '- ' + company : ''} | Bhavana International`,
    html: mailHtml,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('[Email] Sent successfully! MessageId:', info.messageId);
    return info;
  } catch (error) {
    console.error('[Email] sendMail FAILED:', error.message);
    throw new Error('Failed to send email: ' + error.message);
  }
};

export const testSMTPConnection = async () => {
  if (config.RESEND_API_KEY) {
    console.log('[Email Test] Testing Resend API connection...');
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Bhavana Web <onboarding@resend.dev>',
          to: config.SMTP_USER || 'bhavanamotors.88888@gmail.com',
          subject: 'Resend API Connection Test',
          html: '<p>If you receive this email, your Resend API integration is working successfully!</p>'
        })
      });

      const resJson = await response.json();
      if (!response.ok) {
        throw new Error(resJson.message || 'Resend API returned error');
      }
      return {
        success: true,
        message: 'Resend API connection verified and test email sent successfully',
        id: resJson.id
      };
    } catch (error) {
      return {
        success: false,
        message: 'Resend API test FAILED: ' + error.message
      };
    }
  }

  if (!config.SMTP_HOST) {
    return {
      success: false,
      message: 'SMTP_HOST is not configured (Mock Mode)'
    };
  }

  const port = parseInt(config.SMTP_PORT || '587', 10);
  const secure = port === 465;

  const transporter = nodemailer.createTransport({
    host: config.SMTP_HOST,
    port: port,
    secure: secure,
    auth: {
      user: config.SMTP_USER,
      pass: config.SMTP_PASS,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });

  try {
    await transporter.verify();
    return {
      success: true,
      message: 'SMTP connection verified successfully',
      config: {
        host: config.SMTP_HOST,
        port: port,
        secure: secure,
        user: config.SMTP_USER ? config.SMTP_USER.substring(0, 5) + '***' : '(empty)'
      }
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      code: error.code,
      command: error.command
    };
  }
};
