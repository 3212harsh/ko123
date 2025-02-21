import React from 'react'
import Basic_Heading from '../../shared/Basic_Heading'
import Basic_Subheading from '../../shared/Basic_Subheading'
import Home_Rooms_Each from './Home_Rooms_Each'

const Home_Rooms = () => {

    const rooms = [
        {
            image:"https://theimperialpoonamhotel.com/demo/r1.jpg",
            title:"Dulxe Rooms",
            paragraph:"Offering modern décor with neutral shades, air-conditioned rooms, come with a safe, tea/coffee maker and mini bar. Private bathrooms offer a hairdryer and toiletries. This room type has 1 King size double bed & Twin bed rooms",
        },
        {
            image:"https://theimperialpoonamhotel.com/demo/r2-del.jpg",
            title:"Executive Rooms",
            paragraph:"Free Wi-Fi is available in all rooms. Executive Room: Offering modern décor with neutral shades, air-conditioned rooms, safe, tea/coffee maker and mini bar. offer a hair dryer and toiletries.",
        },
        {
            image:"https://theimperialpoonamhotel.com/demo/r3-d.jpg",
            title:"Royal Suite",
            paragraph:"Royal Suit Room Spacious suite features a large designer bathroom with separate bath tub. Sofa chair available in room, separate terrace available attach with this room.",
        }
    ]

  return (
    <div className=" mx-auto px-4 py-10 lg:px-48 bg-slate-100">
      {/* Heading and Subheading */}
      <div className="flex flex-col items-center justify-center text-center mb-8 w-full">
        <Basic_Heading title="Our Rooms"/>
        <Basic_Subheading subheading="24×7 In-room service, concierge, parking, restaurant, coffee shop, Wi-Fi, Express Laundry services, Domestic and International call services and much more."/>
      </div>

      {/* Image Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {rooms.map((e,i)=><Home_Rooms_Each key={i} title={e.title} paragraph={e.paragraph} image={e.image} />)}
      </div>
    </div>
  )
}

export default Home_Rooms
