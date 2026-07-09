import { sendContactEmail } from './contact.service.js';
import { sendSuccess } from '../../utils/response.util.js';

export const handleContactSubmit = async (req, res, next) => {
  try {
    const contactData = req.body;

    // Try to send email but don't fail the request if it errors
    sendContactEmail(contactData).catch((err) => {
      console.error('[Contact] Email send failed (non-blocking):', err.message);
    });

    return sendSuccess(res, 200, 'Your message has been sent successfully. We will contact you soon.');
  } catch (error) {
    next(error);
  }
};
