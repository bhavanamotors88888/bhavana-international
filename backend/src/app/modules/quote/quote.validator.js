const validateQuoteRequest = (data) => {
  const errors = [];

  if (!data.name || typeof data.name !== 'string' || data.name.trim() === '') {
    errors.push('Name is required.');
  }

  if (!data.email || typeof data.email !== 'string' || !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.push('A valid email is required.');
  }

  if (!data.phone || typeof data.phone !== 'string' || data.phone.trim() === '') {
    errors.push('Phone is required.');
  }

  if (!data.interestedIn || typeof data.interestedIn !== 'string' || data.interestedIn.trim() === '') {
    errors.push('Please select what you are interested in.');
  }

  if (!data.requirements || typeof data.requirements !== 'string' || data.requirements.trim() === '') {
    errors.push('Requirements field is required.');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

module.exports = {
  validateQuoteRequest
};
