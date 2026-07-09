import { sendContactEmail } from './contact.service.js';
import { sendSuccess } from '../../utils/response.util.js';

export const handleContactSubmit = async (req, res, next) => {
  try {
    const contactData = req.body;
    await sendContactEmail(contactData);
    
    return sendSuccess(res, 200, 'Your message has been sent successfully. We will contact you soon.');
  } catch (error) {
    next(error);
  }
};
