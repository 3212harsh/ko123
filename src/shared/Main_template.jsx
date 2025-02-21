import React from 'react'

const Main_template = (props) => {
    const {heading,subheading,img} = props;
  return (
    <div className="w-full mb-20">
      <div className="relative h-[60vh] w-full  bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${img})` }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          {/* Centered Text */}
          <div className="text-white text-5xl md:text-6xl lg:text-7xl font-bold font-raleway text-center md:w-1/2">{heading}</div>
          <div className='md:pr-44 font-raleway text-lg text-zinc-100 md:w-1/2'>{subheading}</div>
        </div>
      </div>

    </div>
  )
}

export default Main_template
