const express = require('express');
const router = express.Router();
const { requestQuote } = require('./quote.controller');

router.post('/request-quote', requestQuote);

module.exports = router;
