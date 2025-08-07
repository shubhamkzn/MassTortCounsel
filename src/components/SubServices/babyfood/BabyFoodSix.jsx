import React from "react";
import leftImg from "../../../assets/Rectangle 4604.png";
 
// Shared content list
const compensationItems = [
  "Medical and therapy costs",
  "Special education services and long-term support",
  "Emotional distress for the family",
  "Loss of quality of life",
  "Future care expenses and financial burden",
];

export default function Compensation() {
  return (
    <section
      className="relative text-white font-[Quicksand] w-full"
      style={{ background: "#692D94", zIndex: 0, opacity: 1 }}
    >
      <div className="relative max-w-[1200px] 2xl:max-w-[1400px] w-full mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
 
        {/* Desktop & Tablet View */}
        <div className="hidden md:flex w-full items-stretch pt-6 md:pt-8 lg:pt-10 xl:pt-12">
          {/* Left: Image */}
          <div className="w-1/2 overflow-hidden rounded-tl-2xl rounded-tr-2xl md:rounded-bl-2xl md:rounded-tr-none">
            <img
              src={leftImg}
              alt="Compensation"
              className="w-full h-full object-cover rounded-tl-2xl md:rounded-none md:rounded-bl-2xl"
              style={{ height: "100%" }}
            />
          </div>
 
          {/* Right: Text */}
          <div className="w-1/2 flex items-center justify-start px-4 md:px-6 lg:px-10 py-6">
            <div className="max-w-[600px] w-full">
              <h2 className="font-semibold capitalize leading-snug text-[25px] md:text-[27px] lg:text-[32px] xl:text-[40px] text-white mb-4">
                What <span className="text-[#EDC14A]">Settlement</span>
                <span className=" lg:inline"> May Cover</span>
                {/* <span className="hidden md:inline lg:hidden">
                  <br />May Cover
                </span> */}
              </h2>
              <ul className="list-disc pl-5 text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-medium space-y-2 leading-relaxed text-white">
                {compensationItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
 
        {/* Mobile View */}
        <div className="block md:hidden w-full pt-6 px-4">
          {/* Image */}
          <div className="w-full overflow-hidden rounded-t-2xl mb-0">
            <img
              src={leftImg}
              alt="Compensation"
              className="w-full h-[300px] sm:h-[320px] object-cover rounded-t-2xl"
            />
          </div>
 
          {/* Text */}
          <div className="w-full text-white pt-4">
            <h2 className="text-[24px] min-[350px]:text-[28px] min-[400px]:text-[32px] sm:text-[28px] font-semibold capitalize mb-3 leading-tight text-left">
              What <span className="text-[#EDC14A]">Settlement</span> May Cover
            </h2>
            <ul className="list-disc pl-5 text-[14px] min-[350px]:text-[16px] min-[400px]:text-[17px] sm:text-[16px] font-medium leading-[28px] min-[400px]:leading-[30px] sm:leading-[32px] capitalize space-y-2 pb-6">
              {compensationItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
 
 