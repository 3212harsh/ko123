import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Comments_Each = (props) => {
    const {name,review,img}=props;
  return (
    <div className="bg-gray-50 p-6 rounded-lg  w-96 md:w-[48%]">
      {/* Star Rating */}
      <div className="flex items-center mb-4">
        <div className="flex text-blue-700">
          <FaStar className="w-6 h-6" />
          <FaStar className="w-6 h-6" />
          <FaStar className="w-6 h-6" />
          <FaStar className="w-6 h-6" />
          <FaStarHalfAlt className="w-6 h-6" />
        </div>
      </div>

      {/* Quote */}
      <p className="text-gray-700 mb-4 font-raleway">
        {review}
      </p>

      {/* Reviewer Info */}
      <div className="flex items-center font-poppins">
        <img
          src={img}
          alt="Morgan Jonathan"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className="text-gray-900 font-semibold">{name}</div>
      </div>
    </div>
  );
};

export default Comments_Each;
