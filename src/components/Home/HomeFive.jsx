import React from "react";
import leftImg from "../../assets/team_new_compress.png";
import leftImgMob from "../../assets/team_new_mob_compress.png";

import aposthopthe_icon from "../../assets/aposthopthe_icon.png";
 
export default function HomeFive() {
  return (
    <section
      className="relative text-white font-[Quicksand] w-full bg-[#F3F4F9]"
      style={{ background: "#F3F4F9", zIndex: 0, opacity: 1 }}
    >
      <div className="relative max-w-[1200px] 2xl:max-w-[1400px] w-full mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
 
        {/* Desktop & Tablet View */}
        <div className="hidden md:flex w-full items-center pt-6 md:pt-8 lg:pt-10 xl:pt-12  md:gap-8 xl:gap-[8rem]">
          {/* Left: Image */}
          <div className="w-1/2 overflow-hidden rounded-2xl">
            <img
              src={leftImg}
              alt="Legal Team"
              className="w-full h-full object-cover"
              style={{ height: "100%" }}
            />
          </div>
 
          {/* Right: Content */}
          <div className="w-1/2 flex flex-col justify-center">
            <div className="mb-4">
              <img
                src={aposthopthe_icon}
                alt="Quote Icon"
                className="w-[48px] h-[38px] object-contain"
              />
            </div>
            <h2 className="text-[28px] lg:text-[36px] xl:text-[40px] font-semibold text-[#4F2270] leading-snug mb-4">
              Experienced <span className="text-[#FDBA22]">Legal Teams</span>
              <br />
              <span>Who Work For You</span>
            </h2>
            <p className="text-[#757575] text-[15px] lg:text-[16px] font-medium leading-relaxed">
              We connect you with law firms that understand complex injury
              claims and treat your case with urgency, compassion, and
              attention to detail.
            </p>
          </div>
        </div>
 
        {/* Mobile View */}
        <div className="flex flex-col md:hidden w-full pt-6 px-4 bg-[#F3F4F9]">
          {/* Content first on mobile */}
          <div className="w-full mb-4">
            <div className="mb-2">
              <img
                src={aposthopthe_icon}
                alt="Quote Icon"
                className="w-[40px] h-[32px] object-contain"
              />
            </div>
            <h2 className="text-[24px] min-[350px]:text-[26px] sm:text-[28px] font-semibold text-[#4F2270] leading-snug mb-2">
              Experienced{" "}
              <span className="text-[#FDBA22]">Legal Teams</span>
              <br />
              <span>Who Work For You</span>
            </h2>
            <p className="text-[#757575] text-[14px] sm:text-[15px] font-medium leading-normal">
              We connect you with law firms that understand complex injury
              claims and treat your case with urgency, compassion, and
              attention to detail.
            </p>
          </div>
 
          {/* Image last on mobile */}
          <div className="w-full overflow-hidden rounded-2xl ">
            <img
              src={leftImgMob}
              alt="Legal Team"
              className="w-full h-[300px] sm:h-[320px] object-fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
 
 
 