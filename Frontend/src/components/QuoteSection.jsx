import { useState } from 'react';

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    interestedIn: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });
  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone / WhatsApp number is required';
    } else if (formData.phone.trim().length < 8) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!formData.requirements.trim()) {
      errors.requirements = 'Requirements description is required';
    } else if (formData.requirements.trim().length < 5) {
      errors.requirements = 'Requirements must be at least 5 characters';
    }

    if (!formData.interestedIn) {
      errors.interestedIn = 'Please select a product of interest';
    }

    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: '' });

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const rawBaseUrl = import.meta.env.VITE_API_URL || 'https://bhavana-backend.onrender.com';
      const baseUrl = rawBaseUrl.replace(/\/$/, '');
      const apiUrl = baseUrl.endsWith('/api/v1') ? baseUrl : `${baseUrl}/api/v1`;
      const response = await fetch(`${apiUrl}/quote/request-quote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.errors?.[0] || 'Something went wrong. Please try again.');
      }

      setSubmitStatus({
        type: 'success',
        message: data.message || 'Your inquiry has been submitted successfully!'
      });

      // Reset form on success
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        country: '',
        interestedIn: '',
        requirements: ''
      });
    } catch (err) {
      setSubmitStatus({
        type: 'error',
        message: err.message || 'Failed to connect to the server. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-bg-alternate border-t border-border-main">
      <div className="container-custom">
        <div className="bg-bg-card rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-border-main mb-16">
          <div className="lg:w-2/5 bg-bg-alternate p-10 lg:p-12 text-primary-main flex flex-col justify-between border-r border-border-main">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-primary-main">Let's Discuss Your Requirements</h3>
              <p className="text-text-body mb-8">Connect with Bhavana International, a trusted Automotive Exporter India, to discuss your sourcing requirements, product enquiries, and international export needs.</p>
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shrink-0 shadow-sm border border-border-main">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-secondary-main" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-primary-main">Head Office</h4>
                    <p className="text-text-body leading-relaxed">Nadiad, Gujarat, india 38700</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shrink-0 shadow-sm border border-border-main">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-secondary-main" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-primary-main">Phone</h4>
                    <p className="text-text-body">+91 96249 88888<br />+91 98245 00234</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shrink-0 shadow-sm border border-border-main">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-secondary-main" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-primary-main">Email</h4>
                    <p className="text-text-body">info@bhavanainternational.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shrink-0 shadow-sm border border-border-main">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock text-secondary-main" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-primary-main">Business Hours</h4>
                    <p className="text-text-body">Monday to Saturday<br />9:00 AM – 6:00 PM (IST)</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-border-main shadow-sm mt-8">
                <h4 className="font-bold text-lg mb-2 text-primary-main">Need a Quick Response?</h4>
                <p className="text-sm text-text-body mb-4">Connect with our team on WhatsApp for product enquiries, export assistance, and quick support.</p>
                <a href="https://wa.me/919624988888?text=Hello%2C%0A%0AI%20would%20like%20to%20enquire%20about%20your%20export%20products%20and%20services.%20Please%20share%20more%20information.%0A%0AThank%20you." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold py-3 px-6 rounded-lg transition-colors w-full shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle" aria-hidden="true"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 p-10 lg:p-12">
            <h3 className="text-2xl font-bold mb-8 text-primary-main">Send an Inquiry</h3>

            {submitStatus.type && (
              <div
                className={`p-4 rounded-xl mb-6 border transition-all duration-300 ${submitStatus.type === 'success'
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                    : 'bg-red-50 border-red-200 text-red-800'
                  }`}
              >
                <p className="text-sm font-semibold">
                  {submitStatus.type === 'success' ? '✓ Success' : '⚠️ Error'}
                </p>
                <p className="text-xs mt-1 leading-relaxed">{submitStatus.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-text-body flex justify-between">
                    <span>Full Name<span className='text-red-700 '>*</span></span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all ${validationErrors.name
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                        : 'border-border-input focus:border-primary-main focus:ring-primary-main/20'
                      }`}
                    placeholder="Your Name"
                  />
                  {validationErrors.name && (
                    <p className="text-xs text-red-600 mt-1">{validationErrors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-text-body">Company Name</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border-input focus:border-primary-main focus:ring-2 focus:ring-primary-main/20 outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-text-body">Email Address<span className='text-red-700 '>*</span></label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all ${validationErrors.email
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                        : 'border-border-input focus:border-primary-main focus:ring-primary-main/20'
                      }`}
                    placeholder="your@email.com"
                  />
                  {validationErrors.email && (
                    <p className="text-xs text-red-600 mt-1">{validationErrors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-text-body">Phone / WhatsApp<span className='text-red-700 '>*</span></label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all ${validationErrors.phone
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                        : 'border-border-input focus:border-primary-main focus:ring-primary-main/20'
                      }`}
                    placeholder="+91 XXXX XXXXXX"
                  />
                  {validationErrors.phone && (
                    <p className="text-xs text-red-600 mt-1">{validationErrors.phone}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="country" className="text-sm font-medium text-text-body">Destination Country</label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border-input focus:border-primary-main focus:ring-2 focus:ring-primary-main/20 outline-none transition-all"
                  placeholder="Your Country"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="interestedIn" className="text-sm font-medium text-text-body">Interested In<span className='text-red-700 '>*</span></label>
                <select
                  id="interestedIn"
                  name="interestedIn"
                  value={formData.interestedIn}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all ${validationErrors.interestedIn
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-border-input focus:border-primary-main focus:ring-primary-main/20'
                    }`}
                >
                  <option value="" disabled>Select an option</option>
                  <option value="Two Wheelers">Two Wheelers</option>
                  <option value="Ev Two Wheelers">Ev Two Wheelers</option>
                  <option value="Three Wheelers">Three Wheelers</option>
                  <option value="Four Wheelers">Four Wheelers</option>
                  <option value="OEM Spare Parts">OEM Spare Parts</option>
                  <option value="Tyres & Wheels">Tyres & Wheels</option>
                  <option value="Automotive Accessories">Automotive Accessories</option>
                  <option value="Other">Other</option>
                </select>
                {validationErrors.interestedIn && (
                  <p className="text-xs text-red-600 mt-1">{validationErrors.interestedIn}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="requirements" className="text-sm font-medium text-text-body">Product Requirements<span className='text-red-700 '>*</span></label>
                <textarea
                  id="requirements"
                  name="requirements"
                  rows="5"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all resize-none ${validationErrors.requirements
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-border-input focus:border-primary-main focus:ring-primary-main/20'
                    }`}
                  placeholder="Tell us the products you're looking for, required quantity, destination country, or any specific requirements."
                />
                {validationErrors.requirements && (
                  <p className="text-xs text-red-600 mt-1">{validationErrors.requirements}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-primary-main text-white hover:bg-primary-dark focus-visible:ring-primary-main shadow-md hover:shadow-lg hover:-translate-y-0.5 px-8 py-4 text-lg cursor-pointer active:scale-[0.98] w-full disabled:opacity-70 disabled:cursor-not-allowed disabled:-translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send mr-2" aria-hidden="true"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                    Send Inquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
