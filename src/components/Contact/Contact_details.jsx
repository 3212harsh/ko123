import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import Contact_Details_Each from './Contact_Details_Each';

const Contact_details = () => {

    const details = [
      {
        content:"1234 Main Street, City, Country",
        icon:FaMapMarkerAlt
      },
      {
        content:"+1 234 567 890",
        icon:FaPhoneAlt
      },
      {
        content:"info@example.com",
        icon:FaEnvelope
      },
      {
        content:"Mon - Fri, 9:00AM - 5:00PM",
        icon:FaClock
      },
    ]

    return (
        <div className="w-full md:px-36 min-h-[80vh] my-10 flex flex-col md:flex-row ">
          {/* Left side */}
          <div className="w-full md:w-1/2 font-raleway bg-gray-100 p-8">
            <h1 className="text-5xl  font-bold mb-4">Get in Touch </h1>
            <h2 className="text-md pr-5 mb-6">Feel free to reach out to us anytime. Whether you have questions, need assistance, or just want to learn more, we're here to help. Let's connect and make things easier for you.</h2>
            {details.map((e,i)=>(<Contact_Details_Each content={e.content} icon={e.icon}/> ))}
          </div>
    
          {/* Right side */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-end overflow-hidden ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.155710257941!2d75.76838157543848!3d31.216415174354562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391af4dd160acb97%3A0xdf16bdd6c7bcf78f!2sThe%20Imperial%20Poonam%20Hotel!5e0!3m2!1sen!2sin!4v1728287569222!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <a target='_blank' className='border-[1px] border-blue-700 px-5 py-2 text-blue-700 hover:bg-blue-700 hover:text-white  my-10 rounded-lg' href='https://www.google.com/maps/place/The+Imperial+Poonam+Hotel/@31.2164152,75.7683816,17z/data=!4m21!1m11!3m10!1s0x391af4dd160acb97:0xdf16bdd6c7bcf78f!2sThe+Imperial+Poonam+Hotel!5m2!4m1!1i2!8m2!3d31.2164152!4d75.7709565!10e1!16s%2Fg%2F1tj2g8df!3m8!1s0x391af4dd160acb97:0xdf16bdd6c7bcf78f!5m2!4m1!1i2!8m2!3d31.2164152!4d75.7709565!16s%2Fg%2F1tj2g8df?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D' >Get Directions</a>
          </div>
        </div>
      );
}

export default Contact_details
