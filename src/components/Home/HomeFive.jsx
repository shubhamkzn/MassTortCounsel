// import React, { useState, useEffect } from 'react';
// import teamImg from '../../assets/team_new.png'; // replace with your image
// import aposthopthe_icon from '../../assets/aposthopthe_icon.png';
// const HomeFive = () => {
//   const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
 
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
 
//   return (
//     <section className="bg-[#ffffff] py-12 px-2 sm:px-4 md:px-8 lg:px-16" style={{ fontFamily: 'Quicksand, sans-serif' }}>
//       {isMobile ? (
//         // Mobile Version: Right section (content) on top, left section (image) on bottom
//         <div className="max-w-full mx-auto bg-white rounded-md p-4 flex flex-col items-center gap-6">
//           {/* Right Content (on top) */}
//           <div className="w-full flex flex-col items-start order-1">
//             <div className="text-3xl text-[#FFC928] font-bold mb-2 flex justify-start"><img src={aposthopthe_icon} alt="" className="w-[48px] h-[38px] object-cover" /></div>
//             <h2 className="text-[28px] xs:text-[24px] sm:text-[26px] font-quicksand font-semibold text-[#692D94] mb-2 leading-[30px] xs:leading-[32px] sm:leading-[36px] capitalize text-left">
//               Experienced <span className="text-[#FFC928] font-quicksand font-semibold capitalize">Legal Teams</span>
//               <br />
//               <span className="text-[#692D94] font-quicksand font-semibold capitalize">Who Work For You</span>
//             </h2>
//             <p className="text-[#757575] font-quicksand text-[12px] xs:text-[16px] sm:text-[16px] font-medium leading-normal text-left">
//               We connect you with law firms that understand complex injury claims and treat your case with urgency, compassion, and attention to detail.
//             </p>
//           </div>
//           {/* Left Image (on bottom) */}
//           <div className="w-full flex flex-col items-center order-2">
//             <div className="rounded-xl overflow-hidden w-full mb-0">
//               <img
//                 src={teamImg}
//                 alt="Legal Team"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       ) : (
//         // Desktop Version
//         <div className="w-full md:max-w-full lg:max-w-[1440px] mx-auto bg-white rounded-md p-4 sm:p-6 md:p-0 lg:p-0 xl:p-12 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10 lg:gap-16 xl:gap-20">
//           {/* Left Image */}
//           <div className="relative flex-shrink-0">
//             <div className="rounded-xl overflow-hidden w-[180px] h-[180px] sm:w-[240px] sm:h-[220px] md:w-[300px] md:h-[260px] lg:w-[350px] lg:h-[320px] xl:w-[400px] xl:h-[360px] 2xl:w-[480px] 2xl:h-[420px]">
//               <img
//                 src={teamImg}
//                 alt="Legal Team"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//           </div>
 
//           {/* Right Content */}
//           <div className="text-left md:text-left flex-1">
//             <div className="mb-4 flex items-center">
//               <img src={aposthopthe_icon} alt="" className="w-[48px] h-[38px] sm:w-[60px] sm:h-[48px] md:w-[76px] md:h-[60px] lg:w-[90px] lg:h-[70px] xl:w-[110px] xl:h-[85px] flex-shrink-0 object-cover" />
//             </div>
//             <h2
//               className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-quicksand font-semibold text-[#692D94] mb-4 leading-[32px] sm:leading-[44px] md:leading-[54px] lg:leading-[64px] xl:leading-[72px] 2xl:leading-[80px] capitalize"
//             >
//               Experienced <span className="text-[#FFC928] font-quicksand font-semibold capitalize">Legal Teams</span>
//               <br />
//               <span className="text-[#692D94] font-quicksand font-semibold capitalize">Who Work For You</span>
//             </h2>
//             <p className="text-[#757575] font-quicksand text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-medium leading-normal max-w-[700px]">
//               We connect you with law firms that understand complex injury claims and
//               treat your case with urgency, compassion, and attention to detail.
//             </p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };
 
// export default HomeFive;
import React from "react";
import leftImg from "../../assets/team_new.png";
import leftImgMob from "../../assets/team_new_mob.png";
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
            <h2 className="text-[28px] lg:text-[36px] xl:text-[40px] font-semibold text-[#692D94] leading-snug mb-4">
              Experienced <span className="text-[#EDC14A]">Legal Teams</span>
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
            <h2 className="text-[24px] min-[350px]:text-[26px] sm:text-[28px] font-semibold text-[#692D94] leading-snug mb-2">
              Experienced{" "}
              <span className="text-[#EDC14A]">Legal Teams</span>
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
 
 
 