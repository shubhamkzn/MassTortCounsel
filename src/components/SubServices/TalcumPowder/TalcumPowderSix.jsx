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
          <div className="w-1/2 flex items-center justify-start px-4 md:px-6 lg:px-10 py-6">
            <div className="max-w-[600px] w-full">
              <h2 className="font-semibold capitalize leading-snug text-[20px] md:text-[28px] lg:text-[40px] text-white mb-4">
                What <span className="text-[#FDBA22]">Settlement</span>
                <span className="md:hidden lg:inline"> May Cover</span>
                <span className="hidden md:inline lg:hidden">
                  <br />May Cover
                </span>
              </h2>
              <ul className="list-disc pl-5 text-[14px] md:text-[16px] lg:text-[22px] font-medium space-y-2 leading-relaxed text-white">
                <li>Medical bills, surgeries, and cancer treatment</li>
                <li>Lost wages and future loss of income </li>
                <li>Pain and suffering </li>
                <li>Long-term care or palliative treatment </li>
                <li>Funeral costs in wrongful death cases </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile View (<768px) */}
        <div className="block md:hidden w-full pt-6 px-4">
          {/* Image */}
          <div className="w-full overflow-hidden rounded-t-2xl mb-0">
            <img
              src={leftImg}
              alt="Compensation"
              className="w-full h-[300px] sm:h-[320px] object-contain rounded-t-2xl"
            />
          </div>

          {/* Text */}
          <div className="w-full text-white pt-4">
            <h2 className="text-[24px] min-[350px]:text-[28px] min-[400px]:text-[32px] sm:text-[28px] font-semibold capitalize mb-3 leading-tight text-left">
              What <span className="text-[#FDBA22]">Settlement</span> May Cover
            </h2>
            <ul className="list-disc pl-5 text-[14px] min-[350px]:text-[16px] min-[400px]:text-[17px] sm:text-[16px] font-medium leading-[28px] min-[400px]:leading-[30px] sm:leading-[32px] capitalize space-y-2 pb-6">
              <li>Medical bills, surgeries, and cancer treatment</li>
                <li>Lost wages and future loss of income </li>
                <li>Pain and suffering </li>
                <li>Long-term care or palliative treatment </li>
                <li>Funeral costs in wrongful death cases </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
