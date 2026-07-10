const sendSuccess = (res, message, data = {}, meta = {}) => {
  return res.status(200).json({
    success: true,
    message,
    data,
    meta
  });
};

const sendError = (res, statusCode, message, errors = []) => {
  return res.status(statusCode).json({
    success: false,
    message,
    errors
  });
};

module.exports = {
  sendSuccess,
  sendError
};
