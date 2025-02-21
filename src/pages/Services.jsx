import React from 'react';
import { FaKey, FaCar, FaHeart, FaLock, FaMoneyBill, FaBed, FaTshirt, FaWifi, FaTv, FaBolt, FaSnowflake, FaCreditCard, FaEnvelope, FaUserMd, FaBeer, FaBell, FaShower, FaWater, FaSmokingBan, FaPlane } from 'react-icons/fa';
import Each_Service from '../components/Services/Each_Service';
import Main_template from '../shared/Main_template';

const services = [
  { icon: FaKey, text: 'Electronic Door Locks' },
  { icon: FaCar, text: 'Valet Parking' },
  { icon: FaHeart, text: 'Wedding Planners' },
  { icon: FaLock, text: 'In-room Electronic Safe' },
  { icon: FaMoneyBill, text: 'Foreign Currency Exchange' },
  { icon: FaBed, text: 'Well Furnished Rooms' },
  { icon: FaTshirt, text: 'Laundry Service' },
  { icon: FaBed, text: 'All Rooms With Wooden Flooring' },
  { icon: FaWifi, text: 'Wi-Fi Connectivity' },
  { icon: FaTv, text: 'Satellite Channels' },
  { icon: FaBolt, text: '24 Hours Electricity Back up' },
  { icon: FaSnowflake, text: 'Air Conditioned Rooms' },
  { icon: FaCreditCard, text: 'Major Credit Cards Accepted' },
  { icon: FaEnvelope, text: 'Mail & Courier Services' },
  { icon: FaUserMd, text: 'Doctor on Call' },
  { icon: FaBeer, text: 'Minibar' },
  { icon: FaBell, text: 'Wakeup Call' },
  { icon: FaShower, text: 'Shower Cubicles' },
  { icon: FaWater, text: '24 Hours Hot & Cold Water' },
  { icon: FaSmokingBan, text: 'Non Smoking Rooms' },
  { icon: FaBeer, text: 'Special Bar Offer' },
  { icon: FaPlane, text: 'Travel Desk' },
];

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-zinc-100 ">
      <Main_template heading={"Our Services"} subheading="Experience unparalleled comfort and luxury with our top-notch facilities, personalized services, and world-class amenities tailored for your stay" img="https://www.linenservice.com/img/pics/services/hotel-linen-services.jpg" />
      
        <div className="grid grid-cols-1 sm:grid-cols-2 w-[75%] md:grid-cols-3 lg:grid-cols-4 gap-8  ">
          {services.map((service, index) => (
            <Each_Service index={index} text={service.text} />
          ))}
        </div>
    </div>
  );
};

export default Services;
