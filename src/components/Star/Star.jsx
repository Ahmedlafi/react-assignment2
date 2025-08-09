import React from "react";
import { FaStar } from "react-icons/fa6";

const Star = ({ bgColor, color }) => {
  return (
    <>
      <div className="flex justify-center items-center gap-3">
        <div className={`bg-${bgColor} h-1 w-24`}></div>
        <span>
          <FaStar className={`text-${color} h-6 w-6`} />
        </span>
        <div className={`bg-${bgColor} h-1 w-24`}></div>
      </div>
    </>
  );
};

export default Star;
