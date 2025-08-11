import React from 'react'
import herobg from '../../../assets/Afff_hero.png'
import MobileHeroBg from '../../../assets/Afff_mobb.png'

const AFFOne = () => {
  return (
    <>
      {/* Desktop/Laptop/Tablet Hero Section */}
<section className="hidden sm:flex relative w-full min-h-[45vh] md:min-h-[45vh] lg:min-h-[60vh] xl:min-h-[85vh] items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={herobg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

  {/* Overlay for better text visibility */}
  <div className="absolute inset-0 z-10" />

  {/* Content - Centered text block */}
  <div className="relative z-20 flex flex-col items-center justify-center gap-5
    w-[90vw] max-w-[61.88vw]
    md:w-[668px] md:gap-[15px]
    lg:w-[779px] lg:gap-[18px]
    xl:w-[891px] xl:gap-[20px]
    2xl:w-[1069px] 2xl:gap-[24px]
    min-[3840px]:w-[1782px] min-[3840px]:gap-[40px]
    px-4 text-center">
    
    <h1 className="text-white drop-shadow-lg font-[Quicksand] font-bold capitalize
      text-[32px] leading-[42px]
      md:text-[24px] md:leading-[30px]
      lg:text-[34px] lg:leading-[52px]
      xl:text-[45px] xl:leading-[60px]
      2xl:text-[54px] 2xl:leading-[72px]
      min-[3840px]:text-[90px] min-[3840px]:leading-[120px]">
      Diagnosed with Cancer After Exposure to Firefighting Foam?
    </h1>
    
    <h2 className="text-white drop-shadow font-[Quicksand]
      text-[13px] leading-[22px]
      md:text-[13px] md:leading-[23px]
      lg:text-[16px] lg:leading-[26px]
      xl:text-[18px] xl:leading-[30px]
      2xl:text-[22px] 2xl:leading-[36px]
      min-[3840px]:text-[36px] min-[3840px]:leading-[60px]">
      Firefighters and military personnel exposed to AFFF may face increased cancer risks from toxic PFAS chemicals. You may qualify for settlement.
    </h2>
  </div>
</section>
{/* Mobile Hero Section */}
<section className="flex sm:hidden relative w-full min-h-[90vh] items-center justify-center overflow-hidden">
  {/* Background Image */}
  <img
    src={MobileHeroBg}
    alt="Hero Background"
    className="absolute inset-0 w-full h-full object-cover z-0"
    style={{ minHeight: '90vh', width: '100%' }}
  />
  {/* Content */}
  <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center">
         <h1
          className="text-white capitalize text-[32px] min-[390px]:text-[40px] min-[500px]:text-[38px] leading-[42px] font-[Quicksand] font-bold -mt-[300px]"
        >
      Diagnosed with Cancer After Exposure to Firefighting Foam?
    </h1>
    {/* <h2
      className="text-sm text-white mb-4 font-normal drop-shadow"
      style={{ fontFamily: 'Quicksand, sans-serif' }}
    >
    Firefighters and military personnel exposed to AFFF may face increased cancer risks from toxic PFAS chemicals. You may qualify for settlement.
        </h2> */}
  </div>
  {/* Overlay */}
  <div className="absolute inset-0  z-10" />
</section>

    </>
  )
}

export default AFFOne
