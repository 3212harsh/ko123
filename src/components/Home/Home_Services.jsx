import React from 'react'
import { FaKey, FaCar, FaHeart, FaLock, FaMoneyBill, FaBed, FaTshirt, FaWifi, FaTv, FaBolt, FaSnowflake, FaCreditCard, FaEnvelope, FaUserMd, FaBeer, FaBell, FaShower, FaWater, FaSmokingBan, FaPlane } from 'react-icons/fa';
import Each_Service from '../Services/Each_Service';
import Button from '../../shared/Button';
const services = [
    { icon: FaKey, text: 'Electronic Door Locks' },
    { icon: FaCar, text: 'Valet Parking' },
    { icon: FaHeart, text: 'Wedding Planners' },
    { icon: FaLock, text: 'In-room Electronic Safe' },
    { icon: FaMoneyBill, text: 'Foreign Currency Exchange' },
    { icon: FaBed, text: 'Well Furnished Rooms' },
    { icon: FaTshirt, text: 'Laundry Service' },
    { icon: FaBed, text: 'All Rooms With Wooden Flooring' },
    
  ];
  

const Home_Services = () => {
  return (
    <div className='flex flex-col px-5 md:px-48 justify-center items-center'>
        <h2 className="text-4xl font-bold text-center m-10 mt-20 mb-4  text-zinc-700 font-raleway">Our Facilities</h2>
        <p className=' text-center lg:w-1/2 text-zinc-700 font-raleway mb-10'>Enjoy our modern facilities designed for your comfort and convenience, ensuring a pleasant and seamless stay.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8  ">
            {services.map((service, index) => (
            <Each_Service index={index} text={service.text} />
            ))}
        </div>
        <div className='w-full flex justify-end px-4 md:px-20 my-10'>
            <Button title="View All" color="blue" path="/services" />
        </div>
    </div>
  )
}

export default Home_Services
