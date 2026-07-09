import { sendError } from '../utils/response.util.js';

export const validateRequest = (schema) => {
  return (req, res, next) => {
    try {
      const parsedData = schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      
      // Update body if Zod modified it (e.g. defaults, coercion)
      if (parsedData.body) req.body = parsedData.body;
      
      next();
    } catch (error) {
      if (error.name === 'ZodError') {
        const errors = error.issues.map(err => ({
          path: err.path.join('.'),
          message: err.message
        }));
        return sendError(res, 400, 'Validation Error', errors);
      }
      next(error);
    }
  };
};
