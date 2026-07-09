import { sendContactEmail, testSMTPConnection } from './contact.service.js';
import { sendSuccess } from '../../utils/response.util.js';

export const handleContactSubmit = async (req, res, next) => {
  try {
    const contactData = req.body;

   
    sendContactEmail(contactData).catch((err) => {
      console.error('[Contact] Email send failed (non-blocking):', err.message);
    });

    return sendSuccess(res, 200, 'Your message has been sent successfully. We will contact you soon.', contactData);
  } catch (error) {
    next(error);
  }
};

export const handleSMTPTest = async (req, res, next) => {
  try {
    const result = await testSMTPConnection();
    return res.status(result.success ? 200 : 500).json(result);
  } catch (error) {
    next(error);
  }
};
