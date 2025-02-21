import React from 'react';
import aboutUsbg from '../assets/about_bg.jpg';
import About_Content from '../components/Aboutus/About_Content';
import HotelInfo from '../components/Aboutus/Hotel_info';

const AboutUs = () => {
  return (
    <div className="w-full h-full">
      {/* Hero Section with Background Image */}
      <div className="relative h-[60vh] w-full  bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${aboutUsbg})` }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          {/* Centered Text */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold text-center">About Us</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className='flex justify-center bg-zinc-200 min-h-screen items-center'>
        <About_Content/>
      </div>

      <div className='flex justify-center bg-zinc-100 items-center'>
        <HotelInfo/>
      </div>

    </div>
  );
};

export default AboutUs;
