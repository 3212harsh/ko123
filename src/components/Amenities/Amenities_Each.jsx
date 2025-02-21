import React from 'react'

const Amenities_Each = (props) => {
    const {title,subtitle,img,services} = props;
  return (
    <div className='flex flex-col gap-7 mb-10 w-[48%]'>
        <div className='w-full h-[50vh]'> {/* Ensures the div has a fixed height */}
            <img src={img} alt={title} className='w-full h-full object-cover' /> {/* object-cover instead of object-contain */}
        </div>
        <h1 className=' text-3xl font-semibold font-raleway'>{title}</h1>
        <h3 className='font-poppins text-zinc-600 '>{subtitle}</h3>
        <div className='flex flex-wrap justify-between font-poppins gap-5 text-zinc-600 '>
            {services.map((e,i)=>(<span className='flex items-center gap-5 mr-10'> {e.icon} {e.name}</span>))}
        </div>
        <div>

        <button className='hover:bg-blue-700 hover:text-white rounded-lg border-[1px] border-blue-700 text-blue-700 px-5 py-2'>Reserve Now</button>
        </div>
      
    </div>
  )
}

export default Amenities_Each
