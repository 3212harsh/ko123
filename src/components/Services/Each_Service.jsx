import React from 'react';
import ElectronicDoorLockIcon from '../../assets/electronic-door-lock.svg';
import { MdOutlineArrowRight } from "react-icons/md";

const Each_Service = (props) => {
  const { index, text } = props;

  return (
    <div
      key={index}
      className="group relative flex flex-col items-center p-6 bg-opacity-90 border-b-2 hover:border-2 duration-75 cursor-pointer overflow-hidden"
    >
      {/* Main content */}
      <div className="text-6xl mb-4">
        <img src={ElectronicDoorLockIcon} className="w-20 h-20" alt="Door Lock" />
      </div>
      <div>
        <h3 className="text-md font-raleway text-blue-950 text-center flex">
          <span>
            <MdOutlineArrowRight size={25} />
          </span>{" "}
          {text}
        </h3>
      </div>

      {/* Hover effect overlay with scale effect */}
      <div className="absolute inset-0 bg-black bg-opacity-80 text-white flex items-center justify-center transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-in-out">
        <span className="text-lg">Hello</span>
      </div>
    </div>
  );
};

export default Each_Service;
