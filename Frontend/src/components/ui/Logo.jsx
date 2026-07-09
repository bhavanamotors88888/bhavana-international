import React from 'react';
import logoImg from '../../assets/01_bg_rm.png';

const Logo = ({ className = '' }) => {
  return (
    <img 
      src={logoImg} 
      alt="Bhavana International Logo" 
      className={`h-full w-auto object-contain ${className}`}
    />
  );
};

export default Logo;
