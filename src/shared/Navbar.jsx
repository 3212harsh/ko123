import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FiMenu, FiX } from 'react-icons/fi'; // Using react-icons for the hamburger and close icons

const Navbar = () => {
  // State to handle the mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hideBackground = true;

  const navRoutes = [
    { name: 'Home', path: '', hlight: false },
    { name: 'Amenities', path: '/amenities', hlight: false },
    { name: 'Services', path: '/services', hlight: false },
    { name: 'About Us', path: '/aboutus', hlight: false },
    { name: 'Contact', path: '/contact', hlight: false },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`flex flex-row w-full py-4 justify-between px-4 md:px-20 items-center text-[17px] ${hideBackground ? "text-white" : "bg-white text-black"} absolute z-10`}>
      {/* Logo */}
      <div className='flex'>
        <span>
          <img src={logo} width="100px" alt="Logo" />
        </span>
      </div>

      {/* Menu for larger screens */}
      <div className='hidden md:flex flex-row items-center text-md font-semibold font-sans'>
        {navRoutes.map((route, i) => (
          <NavLink key={i} className={route.hlight ? `ml-10 bg-sky-400 px-7 py-3 rounded-full text-white` : `ml-10`} to={route.path}>
            {route.name}
          </NavLink>
        ))}
        <NavLink className="ml-10 hover:bg-white hover:text-black border-[1px] border-white px-5 py-3 rounded-md" to='/reservation'>
          Reservation
        </NavLink>
      </div>

      {/* Hamburger Icon for small screens */}
      <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center text-black z-20'>
          {navRoutes.map((route, i) => (
            <NavLink key={i} className="py-4 text-xl" to={route.path} onClick={() => setIsMenuOpen(false)}>
              {route.name}
            </NavLink>
          ))}
          <NavLink className="py-4 text-xl border-[1px] border-black px-5 py-3 rounded-md" to='/reservation' onClick={() => setIsMenuOpen(false)}>
            Reservation
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
