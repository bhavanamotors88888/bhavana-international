import { sendContactEmail, testSMTPConnection } from './contact.service.js';
import { sendSuccess } from '../../utils/response.util.js';

export const handleContactSubmit = async (req, res, next) => {
  try {
    const contactData = req.body;

    // Wait for the email to actually send before returning success
    await sendContactEmail(contactData);

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
