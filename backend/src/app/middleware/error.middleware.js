import { sendError } from '../utils/response.util.js';

export const globalErrorHandler = (err, req, res, next) => {
  console.error('Unhandled Error:', err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return sendError(res, statusCode, message, err.errors || []);
};

export const notFoundHandler = (req, res, next) => {
  return sendError(res, 404, `Route ${req.originalUrl} not found`);
};
