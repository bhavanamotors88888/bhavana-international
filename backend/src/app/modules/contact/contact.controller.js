import { processContactInquiry } from './contact.service.js';
import { sendSuccess } from '../../utils/response.util.js';

export const handleContactSubmit = async (req, res, next) => {
  try {
    const contactData = req.body;

    // Wait for the data to save in the database (email is sent in background)
    const result = await processContactInquiry(contactData);

    return sendSuccess(res, 200, 'Your message has been sent successfully. We will contact you soon.', result);
  } catch (error) {
    next(error);
  }
};
