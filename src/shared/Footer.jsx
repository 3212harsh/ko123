import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';  // Social Icons
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';         // Contact Icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top part of the footer: Links or information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className=' border-r-2 flex flex-col px-20'>
            <h3 className="text-lg font-semibold mb-4 ">Company</h3>
            <ul className='flex gap-10'>
              <li className="mb-2 hover:text-gray-400 transition duration-300">
                <a href="#about">About Us</a>
              </li>
              <li className="mb-2 hover:text-gray-400 transition duration-300">
                <a href="#services">Services</a>
              </li>
              <li className="mb-2 hover:text-gray-400 transition duration-300">
                <a href="#careers">Careers</a>
              </li>
            </ul>
          </div>

          <div className=' border-r-2'>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className='flex gap-10'>
              <li className="mb-2 flex items-center hover:text-gray-400 transition duration-300">
                <HiOutlinePhone className="mr-2" /> 
                <a href="#contact">Contact Us</a>
              </li>
              <li className="mb-2 flex items-center hover:text-gray-400 transition duration-300">
                <HiOutlineMail className="mr-2" /> 
                <a href="#faq">FAQs</a>
              </li>
              <li className="mb-2 hover:text-gray-400 transition duration-300">
                <a href="#help-center">Help Center</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="flex space-x-6">
              <li>
                <a href="#facebook" className="hover:text-gray-400 transition duration-300">
                  <FaFacebookF className="text-xl" />
                </a>
              </li>
              <li>
                <a href="#twitter" className="hover:text-gray-400 transition duration-300">
                  <FaTwitter className="text-xl" />
                </a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-gray-400 transition duration-300">
                  <FaInstagram className="text-xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom part of the footer: Copyright and legal links */}
        <div className="mt-8 border-t flex flex-col items-center border-gray-700 pt-6 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <ul className="flex space-x-4 justify-center md:justify-start mt-4">
            <li>
              <a href="#privacy" className="hover:text-gray-400 transition duration-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-gray-400 transition duration-300">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#cookies" className="hover:text-gray-400 transition duration-300">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
