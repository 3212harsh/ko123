import React from 'react'

const Home_about = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center md:items-start p-4 md:p-8 space-y-4 md:space-y-0 lg:px-48 lg:py-28 md:space-x-8">
      {/* Image Div */}
      <div className="w-full md:w-1/2">
        <img 
          src="https://websitedemos.net/budget-hotel-04/wp-content/uploads/sites/822/2021/06/about-hotel.jpg" 
          alt="Sample" 
          className="w-[90%] h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text Div */}
      <div className="w-full md:w-1/2 flex flex-col h-full py-5 space-y-10">
        <h1 className="text-3xl md:text-4xl  font-semibold font-poppins leading-10">Experience Elegance at The Imperial Poonam Hotel </h1>
        <h2 className="text-md  font-semibold text-gray-900 font-raleway">Indulge in luxury near the heart of Phagwara. Spacious rooms and modern amenities ensure a comfortable and relaxing stay. Discover unmatched hospitality and enjoy a serene atmosphere close to the city’s vibrant culture.</h2>
        <p className="text-md text-gray-700 font-raleway">
        With exquisite dining, state-of-the-art facilities, and personalized services, our hotel offers a perfect blend of comfort and style. Whether you're here for business or leisure, you’ll find everything you need for an unforgettable experience in Phagwara.
        </p>
        <button className='border-[1px] border-blue-700 w-fit rounded-md text-blue-700 px-5 py-2 hover:bg-blue-700 hover:text-white '>Discover More</button>
      </div>
    </div>
  )
}

export default Home_about
