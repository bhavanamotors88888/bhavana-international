const transporter = require('../../providers/mail.provider');
const config = require('../../config/env.config');

const sendQuoteEmail = async (quoteData) => {
  const { name, companyName, email, phone, destinationCountry, requirements } = quoteData;

  const mailOptions = {
    from: `"${name}" <${email}>`, 
    to: config.gmailUser, // Send to yourself
    subject: `New Quote Request from ${name}`,
    html: `
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
              <td style="padding: 14px 16px; border-bottom: 1px solid #E5E7EB; color: #1F2937; font-weight: 500;">${companyName || '<span style="color: #9CA3AF;">Not provided</span>'}</td>
            </tr>
            <tr>
              <td style="padding: 14px 16px; font-weight: 600; color: #5B7CA3; font-size: 14px;">Destination Country</td>
              <td style="padding: 14px 16px; color: #1F2937; font-weight: 500;">${destinationCountry || '<span style="color: #9CA3AF;">Not provided</span>'}</td>
            </tr>
          </table>

          <!-- Message Box -->
          <div style="background-color: #FFFFFF; padding: 24px; border-radius: 8px; border: 1px solid #E5E7EB;">
            <h3 style="margin-top: 0; color: #5B7CA3; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px;">Requirements Message:</h3>
            <p style="color: #4B5563; line-height: 1.6; margin: 0; white-space: pre-wrap; font-size: 15px;">${requirements}</p>
          </div>
          
        </div>
        
        <!-- Footer -->
        <div style="background-color: #FFFFFF; padding: 20px; text-align: center; border-top: 1px solid #E5E7EB; color: #6B7280; font-size: 13px;">
          This is an automated notification from the <strong>Bhavana International</strong> website.
        </div>
      </div>
    `,
    replyTo: email
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error('Error sending quote email:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
};

module.exports = {
  sendQuoteEmail
};
