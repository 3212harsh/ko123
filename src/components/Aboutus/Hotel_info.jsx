import React from 'react';
import vision from '../../assets/Vision.svg'
import mission from '../../assets/mission.svg'
import values from '../../assets/values.svg'
import Each_hotel_info from './Each_hotel_info';
import main_about from '../../assets/aboutus_main.jpg'

const data =[

    {
        svg:vision,
        title:"Our Vision",
        text:"To be a world-class hotel that provides luxurious comfort and unparalleled service to all our guests."
    },
    {
        svg:mission,
        title:"Our Mission",
        text:"To deliver unforgettable experiences by ensuring every guest feels welcome and valued."
    },
    {
        svg:values,
        title:"Our Values",
        text:"We value integrity, excellence, and putting our guests first in everything we do."
    },
]

const HotelInfo = () => {
  return (
    <div className="w-[70%] h-fit my-20 mx-auto flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16dd">
        {data.map((e,i)=><Each_hotel_info svg={e.svg} title={e.title} text={e.text} key={i} />)}
      </div>
      <div >
        <img src={main_about} width="100%" />
      </div>
    </div>
  );
};

export default HotelInfo;
