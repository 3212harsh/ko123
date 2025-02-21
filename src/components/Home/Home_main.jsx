import React from 'react';

const Home_main = () => {
  return (
    <div className='w-full md:w-[80%] lg:w-[60%] px-10 md:px-12 lg:pl-48 z-10 text-white'>
      <div className='flex flex-col justify-center'>
        <h3 className='font-raleway font-semibold text-sm md:text-md lg:text-lg'>
          WELCOME TO
        </h3>
        <h1 className='text-4xl md:text-5xl lg:text-[60px] text-white font-extrabold my-5 md:my-7 lg:leading-[90px] font-julius'>
          The Imperial Poonam Hotel, Phagwara
        </h1>
        <h2 className='text-white font-raleway text-sm md:text-md lg:text-lg md:pr-10 lg:pr-28 mb-8 md:mb-10'>
          Escape to luxury at Imperial Poonam Hotel, where comfort meets elegance! Nestled along the pristine shores, our resort offers stunning ocean views, world-class amenities, and personalized service.
        </h2>
        <button className='flex bg-white w-fit text-black text-sm md:text-lg px-3 md:px-4 justify-center items-center py-2 hover:bg-transparent hover:border-[1px] hover:border-white hover:text-white rounded-lg'>
          Book now
        </button>
      </div>
    </div>
  );
};

export default Home_main;
