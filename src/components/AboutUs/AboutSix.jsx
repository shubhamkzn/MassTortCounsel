import { Link } from 'react-router-dom';
import React from 'react'
import teamImg from '../../assets/abUs006.png'
import teamImg1 from '../../assets/abUs006Mob.png'
import aposthopthe_icon from '../../assets/aposthopthe_icon.png';
 
const AboutSix = () => {
  return (
    <>
      {/* Desktop Tile Section */}
<section className="hidden lg:block py-12 lg:py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
  <div className="bg-[#4F2270] relative rounded-2xl lg:rounded-3xl 
  px-8 pt-8 pb-0 lg:px-10 lg:pt-10 lg:pb-0 xl:px-14 xl:pt-14 xl:pb-0 
  shadow-2xl overflow-hidden min-h-[340px] w-full md:max-w-full lg:max-w-[1440px] mx-auto 
  rounded-md p-4 sm:p-6 md:p-0 lg:p-0 
  flex flex-col-reverse md:flex-row items-end gap-8 md:gap-10 lg:gap-16 xl:gap-20">

      {/* Left Image */}
          {/* Main Flex Row */}
<div className="flex flex-col-reverse md:flex-row justify-center gap-[40px] md:gap-[50px] lg:gap-[70px] xl:gap-[80px] w-full">
 
 {/* IMAGE BLOCK (Fixed size per breakpoint, bottom-aligned) */}
<div className="flex items-end justify-start 
  w-[310px] h-[260px] 
  sm:w-[360px] sm:h-[300px] 
  md:w-[390px] md:h-[330px] 
  lg:w-[420px] lg:h-[368px] 
  xl:w-[465px] xl:h-[391px]">
  
  <img
    src={teamImg}
    alt="Legal Team"
    className="w-[310px] h-[260px] 
      sm:w-[360px] sm:h-[300px] 
      md:w-[390px] md:h-[330px] 
      lg:w-[420px] lg:h-[310px] 
      xl:w-[465px] xl:h-[391px] 
      object-contain rounded-md"
  />
</div>



 
  {/* TEXT BLOCK */}
  <div className="flex flex-col justify-center w-[380px] sm:w-[440px] md:w-[480px] lg:w-[520px] xl:w-[559px] gap-4">
    <img
      src={aposthopthe_icon}
      alt="quote icon"
      className="w-[40px] h-[32px] sm:w-[50px] sm:h-[40px] md:w-[60px] md:h-[48px] lg:w-[70px] lg:h-[56px] xl:w-[76px] xl:h-[60px]"
    />
    <p className="text-white font-quicksand capitalize text-[16px] sm:text-[18px] md:text-[22px] lg:text-[28px] xl:text-[32px] leading-snug">
      If you or a loved one has been affected by a harmful product or exposure, we’re here to help you take the first step toward justice.
    </p>

    <Link to="/ServiceMain">
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
        Explore Active Lawsuits
      </button>
    </Link>
  </div>
</div>
 
    </div>
  </div>
</section>
 
 
 
      {/* Tablet Tile Section */}
      <section className="hidden md:block lg:hidden py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#4F2270] rounded-2xl p-8 shadow-2xl">
            {/* Tablet Image on Top */}
            <div className="mb-8 text-center">
              <img
                src={teamImg}
                alt="Legal consultation"
                className="w-full h-auto rounded-xl shadow-xl max-w-lg mx-auto"
              />
            </div>
           
            {/* Tablet Content */}
            <div className="text-left">
              <p className="text-[#ffffff] font-quicksand text-[14px] sm:text-[16px] md:text-[20px] lg:text-[26px] xl:text-[30px] 2xl:text-[32px] leading-normal max-w-[700px] capitalize mb-10">
              If you or a loved one has been affected by a harmful product or exposure, we’re here to help you take the first step toward justice.
            </p>
            <Link to="/ServiceMain">
              <button
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                Explore Active Lawsuits
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
 
 
    {/* Mobile Section */}
<section
  className="relative sm:hidden flex flex-col items-center justify-end
             bg-[#4F2270] w-full pt-[50px] pb-[35px]"
>
  <div className="z-[10] w-full flex flex-col items-center">
    {/* Quote + Text Block */}
    <div className="w-full px-[16px] flex flex-col items-start gap-[20px]">
      {/* Quote Icon */}
      <img
        src={aposthopthe_icon}
        alt="quote icon"
        className="w-[48px] h-[38px]"
      />

      {/* Text */}
      <p className="text-white font-quicksand text-[28px] font-normal capitalize leading-snug w-full">
        If you or a loved one has been affected by a harmful product or
        exposure, we're here to help you take the first step toward justice.
      </p>
    </div>

    {/* Bottom Image (full-width minus 16px padding, bottom-aligned) */}
    <div className="w-full px-[16px] mt-[32px] flex justify-center">
      <img
        src={teamImg1}
        alt="Legal Team"
        className="w-full h-auto object-contain rounded-md"
      />
    </div>
  </div>

  {/* Cream Bottom Patch */}
  <div className="absolute bottom-0 left-0 w-full h-[35px] bg-[#FAF7EF]" />
</section>

    </>
  )
}
 
export default AboutSix
 