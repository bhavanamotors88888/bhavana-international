import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'FAQ', path: '/#faqs' },
    { name: 'Contact Us', path: '/#contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-zinc-100/80   py-3 transition-all duration-300 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center h-[40px] md:h-[50px] max-w-[240px]">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-[clamp(0.9rem,1rem,1.2rem)] font-medium transition-colors hover:text-secondary-main ${isActive ? 'text-primary-main' : 'text-[#334155]'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">

          <button 
            className="md:hidden p-2 text-text-main cursor-pointer" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-panel border-t border-border-main flex flex-col py-4 px-6 shadow-xl gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `block py-2 text-lg font-medium ${isActive ? 'text-primary-600' : 'text-text-main'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
