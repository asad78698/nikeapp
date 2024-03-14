import React, { useState } from 'react';
import { headerLogo } from '../assets/images/';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants/index';
 
const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className='padding-x py-8 z-10 absolute w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden"> 
          {navLinks.map((item) => (
            <li key={item.label}>
              <a className='text-lg text-slate-gray leading-none font-montserrat hover:text-coral-red' href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='hidden max-lg:block'>
          <img 
            onClick={toggleMobileMenu}
            src={hamburger}
            alt='hamburger'
            width={25}
            height={25}
          />
    </div>
      </nav>

      
      <ul className={` hidden flex-1 justify-evenly items-center gap-16 float-end bg-slate-gray p-4 rounded-md ${isMobileMenuOpen?'max-lg:block ':"max-lg:hidden"}`}> 
          {navLinks.map((item) => (
            <li key={item.label} className="border-b-2 border-orange-50 py-3">
              <a className='text-lg text-white leading-none font-montserrat border-b-orange-50' href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
    </header>
  );
};

export default Nav;
