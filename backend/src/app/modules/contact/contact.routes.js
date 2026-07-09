import { Router } from 'express';
import { handleContactSubmit, handleSMTPTest } from './contact.controller.js';
import { validateRequest } from '../../middleware/validate.middleware.js';
import { contactSchema } from './contact.validator.js';

const router = Router();

router.post('/', validateRequest(contactSchema), handleContactSubmit);
router.get('/test-smtp', handleSMTPTest);

export default router;
