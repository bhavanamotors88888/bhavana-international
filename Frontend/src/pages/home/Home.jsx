import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { ArrowRight, ShieldCheck, Search, HeadphonesIcon, FileCheck, Truck, TrendingUp, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import heroLogo from '../../assets/SVG/hero-motocorp-logo.svg';
import suzukiLogo from '../../assets/SVG/suzuki-12.svg';
import tvsLogo from '../../assets/SVG/tvs-motor-logo.svg';
import vespaLogo from '../../assets/SVG/vespa-7.svg';
import yamahaLogo from '../../assets/SVG/yamaha.svg';
import exportPartnerImg from '../../assets/export partner.png';
import automobilesImg from '../../assets/automobiles.png';
import ceramicsImg from '../../assets/ceramics .png';

const Home = () => {
  const [openFaq, setOpenFaq] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });
  const [validationErrors, setValidationErrors] = useState({});

  const scrollToContact = (e) => {
    if (e) e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

    if (!formData.message.trim()) {
      errors.message = 'Requirements description is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Requirements must be at least 10 characters';
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
      // Scroll to the first validation error if needed
      return;
    }

    setIsSubmitting(true);

    try {
      const rawBaseUrl = import.meta.env.VITE_API_URL;
      const baseUrl = rawBaseUrl.replace(/\/$/, '');
      const apiUrl = `${baseUrl}/api/v1`;
      const response = await fetch(`${apiUrl}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.errors?.[0]?.message || 'Something went wrong. Please try again.');
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
        message: ''
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

  const faqs = [
    {
      q: '1. What products do you export?',
      a: 'We supply products across the automobile and ceramic industries, including motorcycles, scooters, electric vehicles, authorised OEM spare parts, accessories, and ceramic and wooden flooring products.'
    },
    {
      q: '2. What types of automobile products do you supply?',
      a: 'We help businesses source motorcycles, scooters, electric vehicles, and authorised OEM spare parts based on their requirements and market needs.'
    },
    {
      q: '3. Do you assist with export requirements?',
      a: 'Yes. After receiving your enquiry, we\'ll explain the next steps and guide you through the information needed to move your order ahead.'
    },
    {
      q: '4. Can I include different products in one order?',
      a: 'Yes. If your order includes multiple products, we\'ll try to arrange them in a single shipment whenever possible.'
    },
    {
      q: '5. How do you maintain product quality?',
      a: 'Each order is checked before dispatch to help ensure it meets the expected quality standards.'
    },
    {
      q: '6. How long does delivery take?',
      a: 'Delivery time depends on the destination and shipping schedule. Once we review your enquiry, we\'ll share an estimated delivery timeline.'
    },
    {
      q: '7. Do you work with bulk orders?',
      a: 'Yes. We work with businesses that require products in larger quantities and can support bulk orders based on your requirements.'
    },
    {
      q: '8. Why choose Bhavana International?',
      a: 'We value honest communication, consistent support, and lasting business relationships. By understanding your requirements first, we help make sourcing products from India a smooth and straightforward experience.'
    },
    {
      q: '9. How can I request a quotation?',
      a: 'Tell us what you\'re looking for, your destination country, and the required quantity. We\'ll review your enquiry and get back to you with a quotation as soon as possible.'
    }
  ];

  useEffect(() => {
    document.title = "Trusted Two Wheeler Exporter India | Bhavana International";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Looking for trusted Two Wheeler Exporter India? Bhavana International supplies motorcycles, authorised OEM spare parts, accessories, & ceramic products globally");
    }
  }, []);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? '' : idx);
  };
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-gradient-hero pt-20">
        <div className="container-custom relative z-10 text-center text-primary-main">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-primary-main/20 text-primary-main text-sm font-semibold mb-6 animate-fade-in-up shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary-main animate-ping"></span>
            Trusted Export Partner from India
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
            India's Trusted Two Wheeler Exporter <br />
            <span className="text-secondary-main">for Global Markets</span>
          </h1>
          <p className="text-lg md:text-xl text-text-body mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Bhavana International is a trusted Two Wheeler Exporter in India, connecting India to the world by supplying motorcycles, scooters, authorised OEM spare parts, and accessories to businesses across international markets. We understand that every business has different sourcing needs, which is why we work closely with our customers to provide reliable products and dependable support from enquiry to delivery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up animation-delay-500">
            <Button size="lg" variant="primary" className="w-full sm:w-auto" onClick={scrollToContact}>
              Contact Us <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Trust Highlights */}
      <section className="py-12 bg-bg-main border-b border-border-main">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <Globe className="w-10 h-10 mx-auto text-secondary-main mb-4" />
              <h3 className="text-xl font-bold text-primary-main mb-2">Global Export Network</h3>
              <p className="text-sm font-semibold text-text-light">Serving international importers</p>
            </div>
            <div className="p-4">
              <ShieldCheck className="w-10 h-10 mx-auto text-secondary-main mb-4" />
              <h3 className="text-xl font-bold text-primary-main mb-2">Authorised OEM Parts & Accessories</h3>
              <p className="text-sm font-semibold text-text-light">Quality you can rely on</p>
            </div>
            <div className="p-4">
              <Truck className="w-10 h-10 mx-auto text-secondary-main mb-4" />
              <h3 className="text-xl font-bold text-primary-main mb-2">End-to-End Export Support</h3>
              <p className="text-sm font-semibold text-text-light">From enquiry to delivery</p>
            </div>
            <div className="p-4">
              <HeadphonesIcon className="w-10 h-10 mx-auto text-secondary-main mb-4" />
              <h3 className="text-xl font-bold text-primary-main mb-2">Responsive Team</h3>
              <p className="text-sm font-semibold text-text-light">Quick assistance whenever you need it</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Preview */}
      <section className="py-20 bg-bg-section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full bg-bg-alternate rounded-3xl overflow-hidden shadow-xl border border-border-main flex items-center justify-center">
                <img src={exportPartnerImg} alt="Export Partner" className="w-full h-auto object-contain" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-main">Your Trusted Export Partner</h2>
              <p className="text-text-body text-lg leading-relaxed mb-6">
                At Bhavana International, we know that buying two-wheelers, ceramic & wooden flooring products and spare parts from across the globe can feel complicated. We’re here to take that weight off your shoulders.              </p>
              <p className="text-text-body text-lg leading-relaxed mb-8">
                We don’t just ship products; we act as your eyes and ears here in India. As we believe every successful partnership starts with understanding your business. That's why we take the time to learn your requirements before recommending the right products. From your first enquiry to final delivery, you'll always know what's happening, with clear communication and dedicated support at every stage.
              </p>
              <Link to="/about">
                <Button variant="secondary" className="border-primary-main text-primary-main hover:bg-primary-main hover:text-white transition-colors">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products Preview */}
      <section id="export" className="py-20 bg-bg-main">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div className="">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-main">What We Export</h2>
              <p className="text-text-body text-lg">Our product range covers the automobile and ceramic industries, helping businesses source quality products from India through one reliable export partner.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="group relative rounded-3xl overflow-hidden shadow-xl h-[400px] border border-border-main">
              <img src={automobilesImg} alt="Automobiles" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

              {/* Graduated Blur Background */}
              <div className="absolute inset-0 flex flex-col justify-end pointer-events-none">
                <div className="h-[60%] w-full backdrop-blur-md [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_40%)] [mask-image:linear-gradient(to_bottom,transparent,black_40%)]"></div>
              </div>

              {/* Dark Gradient for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>

              {/* Content */}
              <div className="absolute bottom-0 inset-x-0 p-8">
                <h3 className="text-3xl font-bold mb-3 text-white">Automobiles</h3>
                <p className="text-white/90 text-lg">Products sourced to match different business and market requirements.</p>
              </div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden shadow-xl h-[400px] border border-border-main">
              <img src={ceramicsImg} alt="Ceramics & Wooden Flooring" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

              {/* Graduated Blur Background */}
              <div className="absolute inset-0 flex flex-col justify-end pointer-events-none">
                <div className="h-[60%] w-full backdrop-blur-md [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_40%)] [mask-image:linear-gradient(to_bottom,transparent,black_40%)]"></div>
              </div>

              {/* Dark Gradient for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>

              {/* Content */}
              <div className="absolute bottom-0 inset-x-0 p-8">
                <h3 className="text-3xl font-bold mb-3 text-white">Ceramics & Wooden Flooring</h3>
                <p className="text-white/90 text-lg">Ceramic and wooden flooring products supplied for residential, commercial, and retail markets.</p>
              </div>
            </div>
          </div>
          <div className="text-center p-4 bg-bg-alternate rounded-lg border border-border-main inline-block">
            <p className="text-sm font-semibold text-primary-main">Additional Products: Authorised OEM Spare Parts & Accessories</p>
          </div>
        </div>
      </section>

      {/* 5. Services & 6. Why Choose Us (Combined/Grid) */}
      <section className="py-20 bg-primary-main text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Businesses Choose Bhavana International</h2>
            <p className="text-secondary-light text-lg max-w-2xl mx-auto">Businesses choose Bhavana International for reliable communication, quality-focused sourcing, and dedicated support throughout the buying journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <ShieldCheck size={40} className="text-secondary-main mb-6" />
              <h3 className="text-xl font-bold mb-3 text-white">Quality Inspection</h3>
              <p className="text-secondary-light text-sm">Every motorcycle, scooter, and spare part is thoroughly inspected before shipment.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <Search size={40} className="text-secondary-main mb-6" />
              <h3 className="text-xl font-bold mb-3 text-white">Product Sourcing</h3>
              <p className="text-secondary-light text-sm">Products selected based on your business requirements and market demand.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <HeadphonesIcon size={40} className="text-secondary-main mb-6" />
              <h3 className="text-xl font-bold mb-3 text-white">Reliable Support</h3>
              <p className="text-secondary-light text-sm">We're here to answer your questions and support you throughout your order.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <FileCheck size={40} className="text-secondary-main mb-6" />
              <h3 className="text-xl font-bold mb-3 text-white">Dedicated Assistance</h3>
              <p className="text-secondary-light text-sm">Our team handles customs procedures efficiently to minimize delays.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <Truck size={40} className="text-secondary-main mb-6" />
              <h3 className="text-xl font-bold mb-3 text-white">Global Shipping</h3>
              <p className="text-secondary-light text-sm">Your order is shipped through trusted logistics partners with a focus on safe and timely delivery.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <TrendingUp size={40} className="text-secondary-main mb-6" />
              <h3 className="text-xl font-bold mb-3 text-white">Competitive Pricing</h3>
              <p className="text-secondary-light text-sm">We work to provide competitive pricing that supports your business without compromising on quality.</p>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary-main hover:bg-gray-100 font-bold border-none"
              onClick={scrollToContact}
            >
              Talk to Our Team <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>



      {/* 8.5. Exporting Top Indian Brands */}
      <section className="py-16 bg-white border-b border-border-main">
        <div className="container-custom">
          <h4 className="text-3xl font-bold text-primary-main text-center  uppercase tracking-widest mb-20">Exporting Top Indian Brands</h4>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <img src={heroLogo} alt="Hero MotoCorp" className="w-auto object-contain h-[clamp(2rem,6vw,4rem)]" />
            <img src={suzukiLogo} alt="Suzuki" className="w-auto object-contain h-[clamp(2rem,6vw,4rem)]" />
            <img src={tvsLogo} alt="TVS Motor" className="w-auto object-contain h-[clamp(2rem,6vw,4rem)]" />
            <img src={vespaLogo} alt="Vespa" className="w-auto object-contain h-[clamp(2rem,6vw,4rem)] brightness-0" />
            <img src={yamahaLogo} alt="Yamaha" className="w-auto object-contain h-[clamp(2rem,6vw,4rem)]" />
          </div>
        </div>
      </section>

      {/* 9. Global Markets Preview */}
      <section id="industries" className="py-20 bg-bg-section">
        <div className="container-custom text-center">
          <Globe size={64} className="mx-auto text-secondary-main mb-6" />
          <h2 className="text-3xl font-bold mb-6 text-primary-main">Connecting Businesses Across International Markets</h2>
          <p className="text-text-body text-lg max-w-3xl mx-auto mb-6">
            We work with businesses in different countries that love India for quality products. As our network continues to grow, we remain to focus on building long-term partnerships through consistency, transparency, and reliable support.
          </p>
        </div>
      </section>

      {/* 11. FAQs */}
      <section id="faqs" className="py-20 bg-bg-main border-t border-border-main">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary-main">Frequently Asked Questions</h2>
            <p className="text-text-body text-lg">Find answers to common questions about our products, orders, and international supply.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-border-main rounded-xl overflow-hidden bg-bg-card shadow-sm">
                <button
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                  onClick={() => toggleFaq(idx)}
                >
                  <span className="text-lg font-bold text-primary-main pr-4">{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={24} className="text-secondary-main shrink-0" /> : <ChevronDown size={24} className="text-text-light shrink-0" />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-text-body leading-relaxed border-t border-border-main pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Contact Form CTA */}
      <section id="contact" className="py-24 bg-bg-alternate border-t border-border-main">
        <div className="container-custom">
          <div className="bg-bg-card rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-border-main mb-16">
            <div className="lg:w-2/5 bg-bg-alternate p-10 lg:p-12 text-primary-main flex flex-col justify-between border-r border-border-main">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-primary-main">Request Your Export Quote</h3>
                <p className="text-text-body mb-8">Share your requirements with us, and we'll prepare a quotation that matches your business needs. Simply let us know the products, destination country, and required quantity to get started.</p>
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full shrink-0 shadow-sm border border-border-main">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-secondary-main" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-primary-main">Head Office</h4>
                      <p className="text-text-body leading-relaxed">New Delhi, India</p>
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
                  <p className="text-sm text-text-body mb-4">Connect with our team on WhatsApp for product inquiries and export assistance.</p>
                  <a href="https://wa.me/919624988888?text=Hello%2C%0A%0AI%20would%20like%20to%20enquire%20about%20your%20export%20products%20and%20services.%20Please%20share%20more%20information.%0A%0AThank%20you." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold py-3 px-6 rounded-lg transition-colors w-full shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle" aria-hidden="true"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 p-10 lg:p-12">
              <h3 className="text-2xl font-bold mb-8 text-primary-main">Request a Quote</h3>

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
                    <label htmlFor="phone" className="text-sm font-medium text-text-body">Phone / WhatsApp</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border-input focus:border-primary-main focus:ring-2 focus:ring-primary-main/20 outline-none transition-all"
                      placeholder="+91 XXXX XXXXXX"
                    />
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
                  <label htmlFor="message" className="text-sm font-medium text-text-body">Your Requirements<span className='text-red-700 '>*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all resize-none ${validationErrors.message
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                        : 'border-border-input focus:border-primary-main focus:ring-primary-main/20'
                      }`}
                    placeholder="Tell us the products you're looking for, quantity, destination country, or any specific requirements."
                  />
                  {validationErrors.message && (
                    <p className="text-xs text-red-600 mt-1">{validationErrors.message}</p>
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
                      Request a Quote
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

