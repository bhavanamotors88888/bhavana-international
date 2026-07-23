import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { ArrowRight, ShieldCheck, Search, HeadphonesIcon, FileCheck, Truck, TrendingUp, Globe, ChevronDown, ChevronUp, Bike, Settings, CircleDashed, Package, Car } from 'lucide-react';
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
    interestedIn: '',
    requirements: ''
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

    if (!formData.phone.trim()) {
      errors.phone = 'Phone / WhatsApp number is required';
    } else if (formData.phone.trim().length < 8) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!formData.requirements.trim()) {
      errors.requirements = 'Requirements description is required';
    } else if (formData.requirements.trim().length < 10) {
      errors.requirements = 'Requirements must be at least 10 characters';
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
      // Scroll to the first validation error if needed
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

  const faqs = [
    {
      q: 'What products do you export?',
      a: 'We export a wide range of vehicles, OEM spare parts, tyres, wheels, automotive accessories, and selected ceramic and wooden products for businesses across international markets.'
    },
    {
      q: 'Do you export two wheelers, three wheelers, and four wheelers?',
      a: 'Yes. We export a wide range of two wheelers, three wheelers, and four wheelers to businesses across international markets. As a trusted Automotive Export Company India, we help users to source quality vehicles that match their market requirements.'
    },
    {
      q: 'Do you assist with export documentation and shipping?',
      a: 'Yes. We assist with export documentation, shipping coordination, and the information required to help your order move smoothly from enquiry to delivery.'
    },
    {
      q: 'How do you ensure product quality?',
      a: 'Every product is carefully checked before shipping to make sure it meets our quality standards.'
    },
    {
      q: 'How long does delivery take?',
      a: 'Delivery time depends on your destination country, order quantity, and shipping schedule. Once we receive your enquiry, we\'ll share an estimated delivery timeline.'
    },
    {
      q: 'How can I request a quotation?',
      a: 'Just send us the products you\'re looking for, the required quantity, and your destination country. We\'ll review your enquiry and get back to you with a quotation as soon as possible.'
    }
  ];

  useEffect(() => {
    document.title = "Automobile Exporter in India | Bhavana International";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Looking for a trusted Automobile Exporter in India? Bhavana International supplies quality vehicles, OEM spare parts, and automotive products worldwide.");
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
            Trusted Vehicle Export Partner from India
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
            India's Trusted Automobile Exporter <br />
            <span className="text-secondary-main">for Global Markets</span>
          </h1>
          <p className="text-lg md:text-xl text-text-body mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Bhavana International is a trusted Automobile Exporter in India, supplying quality vehicles, OEM spare parts, tyres, wheels, and automotive accessories to businesses worldwide. From your first enquiry to final delivery, we provide reliable support and clear communication to make sourcing from India simple and hassle-free.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up animation-delay-500">
            <Button size="lg" variant="primary" className="w-full sm:w-auto" onClick={scrollToContact}>
              Request a Quote
            </Button>
            <Link to="/products">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-main text-primary-main hover:bg-primary-main hover:text-white">
                Explore Products <ArrowRight size={20} className="ml-2 inline" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Trust Highlights */}
      <section className="py-12 bg-bg-main border-b border-border-main">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <Globe className="w-10 h-10 mx-auto text-secondary-main mb-4" />
              <h3 className="text-xl font-bold text-primary-main mb-2">Trusted Export Partner</h3>
              <p className="text-sm font-semibold text-text-light">Built on quality, reliability & transparency</p>
            </div>
            <div className="p-4">
              <ShieldCheck className="w-10 h-10 mx-auto text-secondary-main mb-4" />
              <h3 className="text-xl font-bold text-primary-main mb-2">Automotive Product Range</h3>
              <p className="text-sm font-semibold text-text-light">Vehicles, spare parts & accessories</p>
            </div>
            <div className="p-4">
              <Truck className="w-10 h-10 mx-auto text-secondary-main mb-4" />
              <h3 className="text-xl font-bold text-primary-main mb-2">Worldwide Distribution</h3>
              <p className="text-sm font-semibold text-text-light">Supporting importers across global markets</p>
            </div>
            <div className="p-4">
              <HeadphonesIcon className="w-10 h-10 mx-auto text-secondary-main mb-4" />
              <h3 className="text-xl font-bold text-primary-main mb-2">Reliable Customer Support</h3>
              <p className="text-sm font-semibold text-text-light">Dedicated assistance at every stage</p>
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
                Choosing the right export partner is about more than just products. It's about working with a team you can trust. At Bhavana International, we help businesses source quality vehicles and automotive products from India with reliable support and clear communication.
              </p>
              <p className="text-text-body text-lg leading-relaxed mb-8">
                As a trusted Automobile Exporter in India, we work with importers, distributors, and dealers to make the export process simple and reliable. From enquiry to delivery, every order is handled with care and attention.
              </p>
              <Link to="/products">
                <Button variant="secondary" className="border-primary-main text-primary-main hover:bg-primary-main hover:text-white transition-colors">
                  Explore Our Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products Preview */}
      <section id="export" className="py-20 bg-bg-main">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-main">What We Export</h2>
              <p className="text-text-body text-lg">As a trusted Wholesale Vehicle Exporter India, we provide quality vehicles and automotive products with straightforward service and punctual shipments you can count on.</p>
            </div>
            <Link to="/products" className="shrink-0">
              <Button variant="outline" className="border-primary-main text-primary-main hover:bg-primary-main hover:text-white">
                View All Products <ArrowRight size={18} className="ml-2 inline" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-bg-card border border-border-main p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-secondary-main mb-4"><Car size={36} /></div>
              <h3 className="text-xl font-bold text-primary-main mb-3">Vehicles</h3>
              <p className="text-text-body">Two wheelers, three wheelers, and four wheelers for global markets.</p>
            </div>
            <div className="bg-bg-card border border-border-main p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-secondary-main mb-4"><Settings size={36} /></div>
              <h3 className="text-xl font-bold text-primary-main mb-3">OEM Spare Parts</h3>
              <p className="text-text-body">Genuine OEM parts built for quality and long-lasting performance.</p>
            </div>
            <div className="bg-bg-card border border-border-main p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-secondary-main mb-4"><CircleDashed size={36} /></div>
              <h3 className="text-xl font-bold text-primary-main mb-3">Tyres & Wheels</h3>
              <p className="text-text-body">Reliable tyres and wheels for every vehicle category.</p>
            </div>
            <div className="bg-bg-card border border-border-main p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-secondary-main mb-4"><Package size={36} /></div>
              <h3 className="text-xl font-bold text-primary-main mb-3">Automotive Accessories</h3>
              <p className="text-text-body">Quality accessories designed for functionality and style.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="py-20 bg-primary-main text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose Bhavana International</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <ShieldCheck size={40} className="text-secondary-main mb-6" />
              <h3 className="text-xl font-bold mb-3 text-white">Quality Assured Products</h3>
              <p className="text-secondary-light text-sm">Before your order is shipped, we carefully inspect every vehicle and automotive part to make sure everything is in place.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <Search size={40} className="text-secondary-main mb-6" />
              <h3 className="text-xl font-bold mb-3 text-white">Reliable Product Sourcing</h3>
              <p className="text-secondary-light text-sm">Products sourced to match your business needs and market demand.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <Globe size={40} className="text-secondary-main mb-6" />
              <h3 className="text-xl font-bold mb-3 text-white">Seamless Export Process</h3>
              <p className="text-secondary-light text-sm">From documentation to delivery, we ensure a smooth export experience.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <HeadphonesIcon size={40} className="text-secondary-main mb-6" />
              <h3 className="text-xl font-bold mb-3 text-white">Dedicated Customer Support</h3>
              <p className="text-secondary-light text-sm">Responsive support and clear communication at every stage.</p>
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
      <section id="industries" className="py-24 bg-bg-main relative overflow-hidden">
        {/* Subtle Decorative Background */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[40rem] h-[40rem] bg-primary-main/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[30rem] h-[30rem] bg-secondary-main/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-main/5 border border-primary-main/10 text-secondary-main font-bold text-sm mb-8 shadow-sm">
              <Globe size={18} strokeWidth={2.5} /> Global Reach
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-primary-main leading-tight tracking-tight">
              Connecting Businesses Across <span className="text-secondary-main">International Markets</span>
            </h2>
            <p className="text-text-body text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              As a trusted Wholesale Vehicle Exporter India, we supply vehicles and automotive products to businesses across global markets. From your enquiry to delivery, we're here to support you at every step.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Stat Card 1 */}
            <div className="bg-bg-card p-8 rounded-3xl border border-border-main text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-secondary-main/30 group">
              <div className="w-16 h-16 mx-auto bg-primary-main/5 text-primary-main rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe size={32} />
              </div>
              <h4 className="text-4xl font-extrabold text-primary-main mb-3">50+</h4>
              <p className="text-text-body font-semibold uppercase tracking-wider text-sm">Global Partners</p>
            </div>
            
            {/* Stat Card 2 */}
            <div className="bg-bg-card p-8 rounded-3xl border border-border-main text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-secondary-main/30 group">
              <div className="w-16 h-16 mx-auto bg-primary-main/5 text-primary-main rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-4xl font-extrabold text-primary-main mb-3">100%</h4>
              <p className="text-text-body font-semibold uppercase tracking-wider text-sm">Quality Assured</p>
            </div>
            
            {/* Stat Card 3 */}
            {/* 
            <div className="bg-bg-card p-8 rounded-3xl border border-border-main text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-secondary-main/30 group">
              <div className="w-16 h-16 mx-auto bg-primary-main/5 text-primary-main rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck size={32} />
              </div>
              <h4 className="text-4xl font-extrabold text-primary-main mb-3">24/7</h4>
              <p className="text-text-body font-semibold uppercase tracking-wider text-sm">Reliable Support</p>
            </div>
            */}
          </div>
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
    </div>
  );
};

export default Home;

