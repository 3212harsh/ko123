import React from 'react'
import { FaStar , FaStarHalfAlt } from "react-icons/fa";

const Amenities_Rev_Header = () => {
  return (
    <div className='flex justify-between items-center  p-10'>
        <div className='flex flex-col w-[60%] md:pr-20 gap-3' >
            <h1 className='text-4xl font-raleway font-semibold'>What Our Guests Says</h1>
            <p className='font-poppins text-zinc-600'>Neque ut et velit dictum molestie at pellentesque aliquet magna ut tincidunt ullamcorper mauris mi et.</p>
        </div>
        <div className='flex flex-col justify-start font-poppins items-center w-[35%]'>
            <h1 className='font-semibold text-4xl'>4.6</h1>
            <h3 className='font-semibold text-xl text-zinc-600'>Out of 5</h3>
            <span className='flex gap-1 text-blue-700'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt/> </span>
        </div>

    </div>
  )
}

export default Amenities_Rev_Header
