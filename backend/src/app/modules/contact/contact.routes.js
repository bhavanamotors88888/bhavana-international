import { Router } from 'express';
import { handleContactSubmit } from './contact.controller.js';
import { validateRequest } from '../../middleware/validate.middleware.js';
import { contactSchema } from './contact.validator.js';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Contact API is running properly.' });
});

router.post('/', validateRequest(contactSchema), handleContactSubmit);

export default router;
