import { processContactInquiry } from './contact.service.js';
import { sendSuccess } from '../../utils/response.util.js';

export const handleContactSubmit = async (req, res, next) => {
  try {
    const contactData = req.body;
    console.log('\n====================================');
    console.log('[Contact API] Received new contact submission');
    console.log('[Contact API] Payload:', JSON.stringify(contactData));

    // Wait for the data to save in the database (email is sent in background)
    console.log('[Contact API] Calling processContactInquiry...');
    const result = await processContactInquiry(contactData);
    console.log('[Contact API] processContactInquiry completed successfully.');

    return sendSuccess(res, 200, 'Your message has been sent successfully. We will contact you soon.', result);
  } catch (error) {
    console.error('\n[Contact API] ERROR in handleContactSubmit:');
    console.error(error.stack || error);
    console.log('====================================\n');
    next(error);
  }
};
