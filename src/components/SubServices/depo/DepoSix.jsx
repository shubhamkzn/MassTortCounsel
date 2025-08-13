import React from "react";
import leftImg from "../../../assets/Rectangle 4604.png";
import leftImgDesk from "../../../assets/SettleMent_img_dekstop.png";
import leftImgMobile from "../../../assets/SettleMent_img_mobile.png";


export default function Compensation() {
  return (
    <section
      className="relative text-white font-[Quicksand] w-full"
      style={{
        background: "#4F2270",
        zIndex: 0,
        opacity: 1,
      }}
    >
      <div className="relative max-w-[1200px] 2xl:max-w-[1400px] w-full mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* Desktop & Tablet View (≥768px) */}
        <div className="hidden md:flex w-full items-stretch pt-6 md:pt-8 lg:pt-10 xl:pt-12">
          {/* Left: Image */}
          <div className="w-1/2 overflow-hidden rounded-tl-2xl rounded-tr-2xl md:rounded-bl-2xl md:rounded-tr-none">
            <img
              src={leftImgDesk}
              alt="Compensation"
              className="w-full h-full object-cover rounded-tl-2xl md:rounded-none md:rounded-bl-2xl"
              style={{ height: "100%" }}
            />
          </div>

          {/* Right: Text */}
          <div className="w-1/2 flex items-center justify-start px-4 md:px-6 lg:px-10 py-4">
            <div className="max-w-[600px] w-full">
              <h2 className="font-medium leading-snug text-[22px] md:text-[22px] lg:text-[30px] xl:text-[35px] text-white mb-4 ">
                What <span className="text-[#FDBA22]">Settlement</span> May Cover
                
              </h2>
              <ul className="list-disc pl-12 text-[10px] md:text-[12px] lg:text-[16px] xl:text-[18px] space-y-2 leading-relaxed text-white ">
                <li>Medical bills and diagnostic testing</li>
              <li>Brain tumor treatment or surgery </li>
              <li>Lost wages or inability to work</li>
              <li>Ongoing care for long-term symptoms</li>
              <li>Pain, emotional stress, and reduced quality of life</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile View (<768px) */}
        <div className="block md:hidden w-full pt-6 px-4">
          {/* Image */}
          <div className="w-full overflow-hidden rounded-t-2xl mb-0">
            <img
              src={leftImgMobile}
              alt="Compensation"
              className="w-full h-[300px] sm:h-[320px] object-contain rounded-t-2xl"
            />
          </div>

          {/* Text */}
          <div className="w-full text-white pt-4">
            <h2 className="text-[24px] min-[350px]:text-[28px] min-[400px]:text-[32px] sm:text-[28px] font-medium mb-3 leading-tight text-left">
              What <span className="text-[#FDBA22]"> Settlement </span> May Cover
            </h2>
            <ul className="list-disc pl-5 text-[14px] min-[350px]:text-[16px] min-[400px]:text-[17px] sm:text-[16px] font-normal leading-[28px] min-[400px]:leading-[30px] sm:leading-[32px] space-y-2 pb-6">
            <li>Medical bills and diagnostic testing</li>
              <li>Brain tumor treatment or surgery </li>
              <li>Lost wages or inability to work</li>
              <li>Ongoing care for long-term symptoms</li>
              <li>Pain, emotional stress, and reduced quality of life</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
