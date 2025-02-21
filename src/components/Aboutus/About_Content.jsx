import React from 'react'
import aboutUsimage from '../../assets/About_us_image.jpg'

const About_Content = () => {
  return (
    <div className="container bg-zinc-100 mx-auto rounded-lg flex flex-col md:flex-row items-center w-[70%]">
        {/* Image */}
        <div className="w-full md:w-1/2 mb-8 h-full md:mb-0 md:pr-8">
          <img
            src={aboutUsimage}
            alt="Hotel Interior"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
        {/* Text Content */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-raleway mb-4">The Imperial Poonam Hotel</h2>
          <p className="text-sm text-gray-500">
            The majority of the Indians travellers are now choosing luxury resort/hotels over others as they offer all the amenities at one place so that they don’t have to step outside the premises.
            <br /><br />
            The Imperial Poonam Hotel offers accommodation in Phagwāra, 21.7 miles from Ludhiana. The hotel has a barbeque and views of the garden, and guests can enjoy a drink at the bar. Visitors can relish on the following amenities and can be assured of the memorable experience:
            <br /><br />
            24×7 In-room service, concierge, parking, restaurant, coffee shop, Wi-Fi, Express Laundry services, Domestic and International call services and much more. <br /><br />

            Every room is fitted with a flat-screen TV and a seating area where you can relax. You will find a kettle in the room. <br /><br />
            The Imperial Poonam Hotel not just meant for leisure travellers but they also address the Corporate Guest from industry. It is an exclusive destination for business, pleasure and celebrations, these masterpieces exemplify splendour at their best. Ultimate luxury, superior amenities and best cuisines.
          </p>
        </div>
      </div>
  )
}

export default About_Content
