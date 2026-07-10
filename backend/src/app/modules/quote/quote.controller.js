const { validateQuoteRequest } = require('./quote.validator');
const { sendQuoteEmail } = require('./quote.service');
const { sendSuccess, sendError } = require('../../utils/apiResponse');

const requestQuote = async (req, res, next) => {
  try {
    const quoteData = req.body;

    // Validate request
    const validation = validateQuoteRequest(quoteData);
    if (!validation.isValid) {
      return sendError(res, 400, 'Validation failed', validation.errors);
    }

    // Send Email
    await sendQuoteEmail(quoteData);

    return sendSuccess(res, 'Quote request sent successfully!');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  requestQuote
};
