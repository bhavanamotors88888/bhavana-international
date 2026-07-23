import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-bg-main text-text-body pt-16 pb-8 border-t border-border-main mt-auto">
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center h-[50px] max-w-[240px]">
            <Logo />
          </Link>
          <p className="text-text-body text-sm leading-relaxed">
            Bhavana International is a trusted Two Wheeler Exporter in India, connecting India to the world through dependable export services for the automobile and ceramic industries. We work with businesses across international markets by providing reliable sourcing and dedicated customer support.
          </p>
     
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-primary-main mb-2">Quick Links</h3>
          <Link to="/" className="text-text-body hover:text-secondary-main hover:underline transition-all text-sm">Home</Link>
          <Link to="/about" className="text-text-body hover:text-secondary-main hover:underline transition-all text-sm">About Us</Link>
          <Link to="/#export" className="text-text-body hover:text-secondary-main hover:underline transition-all text-sm">What We Export</Link>
          <Link to="/#industries" className="text-text-body hover:text-secondary-main hover:underline transition-all text-sm">Industries We Serve</Link>
          <Link to="/#faqs" className="text-text-body hover:text-secondary-main hover:underline transition-all text-sm">FAQs</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 overflow-x-hidden flex-wrap">
          <h3 className="text-lg font-semibold text-primary-main mb-2">Contact</h3>
          <div className="flex items-start gap-3 text-text-body text-sm">
            <MapPin size={18} className="shrink-0 mt-0.5 text-secondary-main" />
            <span>Nadiad, Gujarat, india 38700</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 text-text-body text-sm">
              <Phone size={18} className="shrink-0 text-secondary-main" />
              <span>+91 96249 88888</span>
            </div>
            <div className="flex items-center gap-3 text-text-body text-sm">
              <Phone size={18} className="shrink-0 text-secondary-main opacity-0" />
              <span>+91 98245 00234</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-text-body text-sm">
            <Mail size={18} className="shrink-0 text-secondary-main" />
            <span>info@bhavanainternational.com</span>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="border-t border-border-main pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-body text-sm text-center md:text-left">
            &copy; 2026 Bhavana International. All Rights Reserved.
          </p>
          <p className="text-text-body text-sm">
            Connecting India to the World
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
