import React, { useEffect } from 'react';
import { Target, Eye, ShieldCheck, Award, Users, Zap, Briefcase, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import storyImg from '../../assets/story.jpeg';

const About = () => {
  useEffect(() => {
    document.title = "About Bhavana International | Indian Vehicle Export Company";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about Bhavana International, a trusted Indian Vehicle Export Company supplying vehicles, OEM spare parts, and automotive products to businesses worldwide.");
    }
  }, []);

  return (
    <div className="w-full pt-20 pb-16">
      {/* 1. Header / Company Overview */}
      <section className="bg-bg-alternate py-16 text-center border-b border-border-main">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-main">About Us</h1>
          <p className="text-xl text-text-body leading-relaxed">
            Learn more about Bhavana International, an Indian Vehicle Export Company helping businesses source vehicles and automotive products from India. We work with businesses across global markets and support you from enquiry to delivery.
          </p>
        </div>
      </section>

      {/* 2. Story */}
      <section className="py-20 bg-bg-main border-b border-border-main">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-primary-main">The Story Behind Bhavana International</h2>
              <p className="text-text-body text-lg mb-4 leading-relaxed">
                Bhavana International was started to help businesses source quality vehicles and automotive products from India. Today, we work with businesses across global markets, helping them source quality vehicles and automotive products from India.
              </p>
              <p className="text-text-body text-lg mb-4 leading-relaxed">
                We take the time to understand your requirements before recommending the right products. From sourcing to delivery, we keep the process simple and keep you updated along the way.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-full h-96 bg-bg-alternate rounded-3xl overflow-hidden shadow-xl border border-border-main">
                <img src={storyImg} alt="Our Story" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. Mission & Vision */}
      <section className="py-20 bg-bg-section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-10 rounded-2xl border-t-4 border-accent-main bg-bg-card shadow-sm hover:shadow-lg transition-all">
              <Target size={48} className="text-secondary-main mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-primary-main">Our Mission</h3>
              <p className="text-text-body text-lg leading-relaxed">
                To help businesses around the world source quality vehicles and automotive products from India with reliable support, clear communication, and timely delivery.
              </p>
            </div>
            <div className="glass-panel p-10 rounded-2xl border-t-4 border-secondary-main bg-bg-card shadow-sm hover:shadow-lg transition-all">
              <Eye size={48} className="text-secondary-main mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-primary-main">Our Vision</h3>
              <p className="text-text-body text-lg leading-relaxed">
                To become a trusted Global Automotive Supplier, connecting businesses across international markets with quality products and dependable export services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How We Work Together */}
      <section className="py-20 bg-primary-main text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">How We Work Together</h2>
            <p className="text-secondary-light text-lg">Every order starts with understanding your requirements. From there, we help with sourcing, documentation, and delivery while keeping you updated throughout the process.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
              <div className="w-10 h-10 rounded-full bg-secondary-main text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">1</div>
              <h4 className="text-lg font-bold mb-2 text-white">Share Your Requirements</h4>
              <p className="text-secondary-light text-sm">Tell us the products, quantity, and destination you need.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
              <div className="w-10 h-10 rounded-full bg-secondary-main text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">2</div>
              <h4 className="text-lg font-bold mb-2 text-white">Receive a Tailored Proposal</h4>
              <p className="text-secondary-light text-sm">We recommend suitable products and provide a detailed quotation.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
              <div className="w-10 h-10 rounded-full bg-secondary-main text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">3</div>
              <h4 className="text-lg font-bold mb-2 text-white">Confirm Your Order</h4>
              <p className="text-secondary-light text-sm">Once approved, we finalize the order and begin export preparation.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
              <div className="w-10 h-10 rounded-full bg-secondary-main text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">4</div>
              <h4 className="text-lg font-bold mb-2 text-white">Shipping & Coordination</h4>
              <p className="text-secondary-light text-sm">We manage documentation and coordinate shipping for a smooth export process.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
              <div className="w-10 h-10 rounded-full bg-secondary-main text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">5</div>
              <h4 className="text-lg font-bold mb-2 text-white">Ongoing Support</h4>
              <p className="text-secondary-light text-sm">Our team remains available to assist you before, during, and after delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="py-20 bg-bg-main">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary-main">Why Choose Bhavana International?</h2>
            <p className="text-text-body text-lg">We combine quality products, reliable export solutions, and dedicated support to help your business grow.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex gap-4 ">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 bg-bg-alternate rounded-lg flex items-center justify-center text-secondary-main">
                  <Briefcase size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-primary-main">Wide Product Portfolio</h4>
                <p className="text-text-body leading-relaxed">Source vehicles, OEM spare parts, tyres, wheels, automotive accessories, and selected products through one trusted export partner.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 bg-bg-alternate rounded-lg flex items-center justify-center text-secondary-main">
                  <ShieldCheck size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-primary-main">Quality You Can Trust</h4>
                <p className="text-text-body leading-relaxed">Every order is carefully inspected before shipment to help ensure it meets international quality standards.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 bg-bg-alternate rounded-lg flex items-center justify-center text-secondary-main">
                  <Globe size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-primary-main">Reliable Export Support</h4>
                <p className="text-text-body leading-relaxed">From product sourcing and documentation to shipping coordination, our team supports you throughout the export journey.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 bg-bg-alternate rounded-lg flex items-center justify-center text-secondary-main">
                  <Users size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-primary-main">Long-Term Partnerships</h4>
                <p className="text-text-body leading-relaxed">We believe strong business relationships are built on transparency, responsive communication, and dependable service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-20 bg-bg-section text-center border-t border-border-main">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-primary-main">Ready to Partner with Bhavana International?</h2>
          <p className="text-text-body text-lg mb-8">
            Looking for a trusted B2B Automobile Exporter? Connect with our team to discuss your sourcing requirements and discover reliable export solutions tailored to your business.
          </p>
          <Link to="/#contact" className="inline-block mx-auto">
            <Button size="lg" variant="primary" className="flex items-center justify-center px-10 py-4 text-lg">
              Contact Our Team <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
