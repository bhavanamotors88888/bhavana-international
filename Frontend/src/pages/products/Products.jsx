import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bike, 
  Zap, 
  Car, 
  Truck, 
  Settings, 
  CircleDashed, 
  Package, 
  ShieldCheck, 
  Award, 
  FileText, 
  Headphones, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import Button from '../../components/ui/Button';
import twoWheelersImg from '../../assets/products/two-wheelers.png';
import evTwoWheelersImg from '../../assets/products/ev-two-wheelers.png';
import threeWheelersImg from '../../assets/products/three-wheelers.png';
import fourWheelersImg from '../../assets/products/four-wheelers.png';
import oemSparePartsImg from '../../assets/products/oem-spare-parts.png';
import tyresWheelsImg from '../../assets/products/tyres-wheels.png';
import autoAccessoriesImg from '../../assets/products/automotive-accessories.png';

const Products = () => {
  useEffect(() => {
    document.title = "Automotive Products Exporter India | Bhavana International";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore our wide range of automotive products exported by Bhavana International. We supply two wheelers, three wheelers, four wheelers, and OEM spare parts globally.");
    }
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const categories = [
    { id: 'two-wheelers', name: 'Two Wheelers', icon: <Bike size={32} /> },
    { id: 'ev-two-wheelers', name: 'EV Two Wheelers', icon: <Zap size={32} /> },
    { id: 'three-wheelers', name: 'Three Wheelers', icon: <Truck size={32} /> },
    { id: 'four-wheelers', name: 'Four Wheelers', icon: <Car size={32} /> },
    { id: 'oem-spare-parts', name: 'OEM Spare Parts', icon: <Settings size={32} /> },
    { id: 'tyres-wheels', name: 'Tyres & Wheels', icon: <CircleDashed size={32} /> },
    { id: 'automotive-accessories', name: 'Automotive Accessories', icon: <Package size={32} /> },
  ];

  const productRanges = [
    {
      id: 'two-wheelers',
      title: 'Two Wheelers',
      icon: <Bike size={36} className="text-secondary-main" />,
      image: twoWheelersImg,
      description: 'Source motorcycles and scooters from a trusted Two Wheeler Exporter India. We help businesses source quality vehicles from leading Indian manufacturers, offering options that suit different customer preferences and market requirements.',
      tags: ['Motorcycles', 'Scooters', 'Electric Scooters', 'Sports Bikes', 'Cruiser Bikes', 'Commuter Bikes', '+ More'],
    },
    {
      id: 'ev-two-wheelers',
      title: 'Electric Two Wheelers',
      icon: <Zap size={36} className="text-secondary-main" />,
      image: evTwoWheelersImg,
      description: 'Source innovative electric mobility solutions from a trusted Electric Two Wheeler Exporter India. We help businesses source reliable EV scooters and motorcycles designed to meet the growing demand for sustainable transportation across global markets.',
      tags: ['Electric Scooters', 'Electric Motorcycles', 'High-Speed Models', 'Low-Speed Models', 'Commercial Electric Vehicles', '+ More'],
    },
    {
      id: 'three-wheelers',
      title: 'Three Wheelers',
      icon: <Truck size={36} className="text-secondary-main" />,
      image: threeWheelersImg,
      description: 'Our three-wheeler range supports commercial transportation and urban mobility across global markets. As a reliable Three Wheeler Exporter India, we supply vehicles built for passenger and cargo applications.',
      tags: ['Passenger Carriers', 'Cargo Carriers', 'Electric Three Wheelers', 'Commercial Vehicles', 'Utility Vehicles', '+ More'],
    },
    {
      id: 'four-wheelers',
      title: 'Four Wheelers',
      icon: <Car size={36} className="text-secondary-main" />,
      image: fourWheelersImg,
      description: 'Explore passenger and commercial vehicles sourced from trusted Indian manufacturers. As an experienced Four Wheeler Exporter India, we help businesses find reliable petrol and electric vehicles for a variety of market needs.',
      tags: ['Hatchbacks', 'Sedans', 'SUVs', 'Pickup Trucks', 'Commercial Vehicles', 'Electric Vehicles', '+ More'],
    },
    {
      id: 'oem-spare-parts',
      title: 'OEM Spare Parts',
      icon: <Settings size={36} className="text-secondary-main" />,
      image: oemSparePartsImg,
      description: 'We supply genuine components as a trusted OEM Spare Parts Exporter India and Vehicle Spare Parts Supplier India, helping businesses source reliable parts for different vehicle categories.',
      tags: ['Engine Parts', 'Brake Parts', 'Electrical Parts', 'Suspension Parts', 'Filters', 'Body Parts', '+ More'],
    },
    {
      id: 'tyres-wheels',
      title: 'Tyres & Wheels',
      icon: <CircleDashed size={36} className="text-secondary-main" />,
      image: tyresWheelsImg,
      description: 'Built for performance and durability, our tyre and wheel range supports passenger and commercial vehicles. We are a trusted Tyre & Wheel Exporter India serving businesses across international markets.',
      tags: ['Passenger Tyres', 'Commercial Tyres', 'Alloy Wheels', 'Steel Wheels', 'Wheel Accessories', 'Tubes', '+ More'],
    },
    {
      id: 'automotive-accessories',
      title: 'Automotive Accessories',
      icon: <Package size={36} className="text-secondary-main" />,
      image: autoAccessoriesImg,
      description: 'From everyday essentials to premium upgrades, we supply quality products as an experienced Auto Accessories Exporter India, helping businesses meet diverse customer requirements.',
      tags: ['Interior Accessories', 'Exterior Accessories', 'Lighting', 'Safety Accessories', 'Car Care Products', 'Electronics', '+ More'],
    }
  ];

  return (
    <div className="w-full pt-20 pb-16">
      {/* 1. Hero Section */}
      <section className="bg-bg-alternate py-20 text-center border-b border-border-main relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-main/[0.02] -z-10"></div>
        <div className="container-custom max-w-5xl relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-main tracking-tight">
            Automotive Products Exporter India
          </h1>
          <p className="text-xl text-text-body leading-relaxed max-w-4xl mx-auto mb-10">
            Explore the wide range of automotive products exported by Bhavana International. As a trusted Automotive Products Exporter India, we supply quality two wheelers, three wheelers, four wheelers, OEM spare parts, tyres, wheels, and automotive accessories to importers, distributors, and dealers across global markets.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/#contact">
              <Button size="lg" variant="primary">Request a Quote</Button>
            </Link>
            <Link to="/#contact">
              <Button size="lg" variant="outline">Contact Our Team</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Categories Grid */}
      <section className="py-20 bg-bg-main border-b border-border-main">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-main">Explore Our Product Categories</h2>
            <p className="text-text-body text-lg max-w-3xl mx-auto">
              Discover our range of quality vehicles and automotive products, sourced from trusted manufacturers and supplied to businesses across global markets.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <button 
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className="group flex flex-col items-center p-8 bg-bg-card rounded-2xl border border-border-main shadow-sm hover:shadow-xl hover:border-primary-main/30 transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="text-secondary-main mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg text-primary-main group-hover:text-secondary-main transition-colors">
                  {category.name}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detailed Product Ranges */}
      <section className="py-20 bg-bg-section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-main">Explore Our Automotive Product Range</h2>
            <p className="text-text-body text-lg max-w-4xl mx-auto">
              As a trusted Automotive Products Exporter India, Bhavana International offers a wide range of vehicles and automotive products sourced from reliable manufacturers. Explore our product categories designed to meet the needs of importers, distributors, and dealers across global markets.
            </p>
          </div>

          <div className="space-y-12">
            {productRanges.map((product, index) => (
              <div 
                id={product.id} 
                key={product.id}
                className={`glass-panel p-8 md:p-10 rounded-2xl shadow-sm border border-border-main hover:shadow-md transition-shadow scroll-mt-24 flex flex-col md:flex-row gap-8 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-2/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="shrink-0">{product.icon}</div>
                    <h3 className="text-2xl font-bold text-primary-main">{product.title}</h3>
                  </div>
                  <p className="text-text-body text-lg leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.tags.map((tag, idx) => (
                      <span key={idx} className="bg-bg-alternate border border-border-main text-text-main px-4 py-2 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to="/#contact" className="inline-flex items-center text-secondary-main font-semibold hover:text-primary-main transition-colors">
                    Request a Quote <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
                <div className="w-full md:w-1/3 flex justify-center items-center h-full min-h-[200px] md:min-h-[300px] bg-bg-alternate rounded-xl border border-border-main/50 overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Values Section */}
      <section className="py-20 bg-primary-main text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Every Product, Sourced with Confidence</h2>
            <p className="text-secondary-light text-lg max-w-3xl mx-auto">
              Every product is carefully sourced to deliver quality, reliability, and a seamless export experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors">
              <ShieldCheck size={48} className="text-secondary-main mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-3 text-white">Trusted Sourcing</h4>
              <p className="text-secondary-light text-base leading-relaxed">Products sourced from reliable manufacturers across India.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors">
              <Award size={48} className="text-secondary-main mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-3 text-white">Quality Assured</h4>
              <p className="text-secondary-light text-base leading-relaxed">Every product is inspected before shipment.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors">
              <FileText size={48} className="text-secondary-main mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-3 text-white">Export Ready</h4>
              <p className="text-secondary-light text-base leading-relaxed">Complete support for documentation and shipping.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors">
              <Headphones size={48} className="text-secondary-main mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-3 text-white">Dedicated Support</h4>
              <p className="text-secondary-light text-base leading-relaxed">Responsive assistance from enquiry to delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="py-20 bg-bg-section text-center border-b border-border-main">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-primary-main">Ready to Expand Your Product Range?</h2>
          <p className="text-text-body text-lg mb-8">
            Partner with us to source quality automotive products from India with confidence.
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

export default Products;
