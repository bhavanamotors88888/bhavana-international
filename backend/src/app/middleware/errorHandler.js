const { sendError } = require('../utils/apiResponse');

const globalErrorHandler = (err, req, res, next) => {
  console.error('[Error]:', err.message || err);
  
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  sendError(res, statusCode, message);
};

module.exports = {
  globalErrorHandler
};
