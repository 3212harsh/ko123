import React from 'react'


const Each_hotel_info = (props) => {

    const {svg,title,text,key} = props;

  return (
    <div className="flex flex-col items-center text-center bg-white p-6 border rounded-lg shadow-lg" key={key}>
            <div className='flex items-center justify-center bg-white border-gray-200 border-2 rounded-full p-5 mb-4 w-[100px]'>
                <img src={svg} className='w-full h-full' alt="" />
            </div>
          <h3 className="text-2xl font-bold mb-2 font-raleway text-zinc-800">{title}</h3>
          <p className="text-gray-600 font-sans">{text}</p>
        </div>
  )
}

export default Each_hotel_info
