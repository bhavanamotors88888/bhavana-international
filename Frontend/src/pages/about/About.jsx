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
      metaDescription.setAttribute("content", "Learn about Bhavana International, an Indian Vehicle Export Company supplying motorcycles, authorised OEM spare parts, and ceramic products worldwide today.");
    }
  }, []);

  return (
    <div className="w-full pt-20 pb-16">
      {/* 1. Header / Company Overview */}
      <section className="bg-bg-alternate py-16 text-center border-b border-border-main">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-main">About Us</h1>
          <p className="text-xl text-text-body leading-relaxed">
            Learn more about Bhavana International, an Indian Vehicle Export Company helping businesses source quality products from India. We work with importers, dealers, and distributors by supplying two-wheelers, three-wheelers, four-wheelers, authorised OEM spare parts, ceramic products, and wooden furniture to businesses across international markets.
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
                Bhavana International is an Indian Vehicle Export Company supplying two-wheelers, three-wheelers, four-wheelers, authorised OEM spare parts, ceramic products, and wooden furniture to businesses across global markets. Our customers include importers, dealers, and distributors looking for a reliable sourcing partner from India.
              </p>
              <p className="text-text-body text-lg mb-4 leading-relaxed">
                No two businesses have the same requirements, so we begin by understanding what's important to each customer before suggesting suitable products. Every order is handled with care because we believe trust is earned through consistency, quality, and the way we work with our customers—not just through the products we supply.
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
                To help businesses across global markets source quality products from India through a reliable and well-managed export experience. We take the time to understand what each business needs, deliver quality products, and build relationships based on trust.
              </p>
            </div>
            <div className="glass-panel p-10 rounded-2xl border-t-4 border-secondary-main bg-bg-card shadow-sm hover:shadow-lg transition-all">
              <Eye size={48} className="text-secondary-main mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-primary-main">Our Vision</h3>
              <p className="text-text-body text-lg leading-relaxed">
                To help businesses across global markets source quality products from India through a reliable and well-managed export experience. We want to understand every customer's requirements, delivering consistent quality, to building partnerships based on trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Values / The Way We Work */}
      <section className="py-20 bg-primary-main text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">The Way We Work</h2>
            <p className="text-secondary-light text-lg">Our approach is simple: understand your requirements, communicate clearly, and build long-term business relationships through reliable service</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
              <ShieldCheck size={40} className="text-secondary-main mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2 text-white">Built on Trust</h4>
              <p className="text-secondary-light text-sm">The best business relationships start with trust. We believe in being honest, clear, and straightforward from the beginning.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
              <Award size={40} className="text-secondary-main mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2 text-white">Quality First</h4>
              <p className="text-secondary-light text-sm">Before any order moves forward, we make sure it meets the standards our customers expect.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
              <Zap size={40} className="text-secondary-main mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2 text-white">Every Order Matters</h4>
              <p className="text-secondary-light text-sm">Whether it's a first enquiry or a repeat order, every customer gets the same care and attention.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
              <Users size={40} className="text-secondary-main mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2 text-white">Long-Term Relationships</h4>
              <p className="text-secondary-light text-sm">We enjoy working with customers who see us as a long-term business partner, not just a supplier.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="py-20 bg-bg-main">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary-main">Why Partner With Us?</h2>
            <p className="text-text-body text-lg">Choosing the right export partner matters. That’s why we focus on delivering quality products, dependable support, and a smooth experience for every business we work with.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex gap-4 ">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 bg-bg-alternate rounded-lg flex items-center justify-center text-secondary-main">
                  <Briefcase size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-primary-main">Diverse Product Portfolio</h4>
                <p className="text-text-body leading-relaxed">Choose from motorcycles, scooters, authorised OEM spare parts, and products across multiple industries to suit your business requirements.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 bg-bg-alternate rounded-lg flex items-center justify-center text-secondary-main">
                  <ShieldCheck size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-primary-main">Quality Assurance</h4>
                <p className="text-text-body leading-relaxed">Every order is inspected before dispatch to help ensure it meets the expected quality standards.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 bg-bg-alternate rounded-lg flex items-center justify-center text-secondary-main">
                  <Globe size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-primary-main">End-to-End Logistics</h4>
                <p className="text-text-body leading-relaxed">From documentation and customs coordination to international shipping, we help keep your export process well managed.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 bg-bg-alternate rounded-lg flex items-center justify-center text-secondary-main">
                  <Zap size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-primary-main">Cost Efficiency</h4>
                <p className="text-text-body leading-relaxed">Our sourcing and logistics approach helps businesses achieve better value while maintaining product quality.</p>
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
            Let's discuss your business requirements and help you source vehicles, authorised OEM spare parts, ceramic products, and wooden furniture from India with confidence.
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
