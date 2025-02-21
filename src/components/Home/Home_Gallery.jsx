import React from 'react'
import Basic_Heading from '../../shared/Basic_Heading'

const Home_Gallery = () => {
  return (
    <div className='flex flex-col p-4 lg:px-48 items-center my-10'>
      <Basic_Heading title="Gallery" />

      {/* First Row */}
      <div className='flex flex-col gap-5 md:flex-row mt-5 w-full'>
        <div className='flex flex-col gap-5 md:w-[32%]'>
          {/* Image with aspect ratio and fixed height */}
          <img
            src="https://theimperialpoonamhotel.com/imp/b2.jpg"
            className='w-full h-[245px] object-cover rounded-lg'
            alt=""
          />
          <img
            src="https://theimperialpoonamhotel.com/imp/royale.jpg"
            className='w-full h-[245px] object-cover rounded-lg'
            alt=""
          />
        </div>
        <div className='flex flex-col md:w-[68%]'>
          <img
            src="https://theimperialpoonamhotel.com/imp/pdr.jpg"
            className='w-full h-[510px] object-cover rounded-lg'
            alt=""
          />
        </div>
      </div>

      <br />

      {/* Second Row */}
      <div className='flex flex-col gap-5 md:flex-row w-full'>
        <div className='flex flex-col md:w-[68%]'>
          <img
            src="https://theimperialpoonamhotel.com/imp/b1.jpg"
            className='w-full h-[510px] object-cover rounded-lg'
            alt=""
          />
        </div>
        <div className='flex flex-col gap-5 md:w-[32%]'>
          <img
            src="https://theimperialpoonamhotel.com/imp/re1.jpg"
            className='w-full h-[245px] object-cover rounded-lg'
            alt=""
          />
          <img
            src="https://theimperialpoonamhotel.com/imp/re3.jpg"
            className='w-full h-[245px] object-cover rounded-lg'
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Home_Gallery
