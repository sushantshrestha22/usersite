import React from "react";
// import Image from "../../assets/Image.png";
// import Image1 from "../../assets/Image1.png";

const Card = ({ image }) => {
  return (
    <div>
      <div className="group border-2  p-4 flex flex-col gap-4 justify-center rounded-md">
        <div className="relative flex justify-center">
          <img src={image} alt="placeholder" />
          <div className="hidden group-hover:flex group-hover:bg-opacity-50 rounded-md bg-gray-600 text-white absolute inset-0 justify-center items-center transition text-center">
            <ul>
              <li>24 hours Emergency Service</li>
              <li>24 hours ambulance service</li>
              <li>24 hours pharmacy service</li>
              <li>Helipad service</li>
            </ul>
          </div>
        </div>
        <div className="font-semibold capitalize text-[#010C26]">Emergency Service</div>
      </div>
    </div>
  );
};

export default Card;