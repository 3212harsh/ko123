import React from 'react'

const Contact_Main = () => {
  return (
    <div className="w-full mb-20">
      <div className="relative h-[60vh] w-full  bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(https://i.pinimg.com/236x/e0/9e/2d/e09e2d373823c04bfb9f399270e3cb6e.jpg)` }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          {/* Centered Text */}
          <div className="text-white text-5xl md:text-6xl lg:text-7xl font-bold font-raleway text-center md:w-1/2">Contact</div>
          <div className='md:pr-44 font-raleway text-lg text-zinc-100 md:w-1/2'>Get in touch with us for reservations, inquiries, or assistance. Our team is here to help you plan your perfect stay.</div>
        </div>
      </div>

    </div>
  )
}

export default Contact_Main
