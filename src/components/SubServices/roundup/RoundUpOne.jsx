import React from 'react'
import herobg from '../../../assets/roundupHero.png'
import MobileHeroBg from '../../../assets/RoundupHeroMobile.png'
 
const RoundUpOne = () => {
  return (
    <>
      {/* Desktop/Laptop/Tablet Hero Section */}
      <section className="hidden sm:flex relative w-full min-h-[45vh] md:min-h-[45vh] lg:min-h-[60vh] xl:min-h-[85vh] items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
  src={herobg}
  alt="Hero Background"
  className="absolute inset-0 w-full h-full object-cover lg:object-[right_bottom] xl:object-[right_bottom] z-0"
/>

 
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0  z-10" />
 
        {/* Content */}
       
        <div className="relative z-20 flex flex-col items-center justify-center w-full px-6 md:px-16 lg:px-24 py-8 text-center">
  <h1
    className="text-white mb-4 drop-shadow-lg capitalize font-[Quicksand] font-bold text-center
      text-[23px] leading-[31px] max-w-[216px]
      sm:text-[30px] sm:leading-[40px] sm:max-w-[443px]
      md:text-[30px] md:leading-[43px] md:max-w-[590px]
      lg:text-[35px] lg:leading-[48px] lg:max-w-[653px]
      xl:text-[45px] xl:leading-[60px] xl:max-w-[831px]
      2xl:text-[54px] 2xl:leading-[72px] 2xl:max-w-[997px]
      min-[3840px]:text-[90px] min-[3840px]:leading-[120px] min-[3840px]:max-w-[1662px]"
  >
    Used Roundup and Later Diagnosed
    with Non-Hodgkin's Lymphoma?
  </h1>
  <h2
    className="text-white mb-6 drop-shadow font-[Quicksand] font-normal text-center
      text-[9px] leading-[15px] max-w-[220px]
      sm:text-[12px] sm:leading-[20px] sm:max-w-[451px]
      md:text-[13px] md:leading-[22px] md:max-w-[501px]
      lg:text-[15px] lg:leading-[27px] lg:max-w-[667px]
      xl:text-[18px] xl:leading-[30px] xl:max-w-[847px]
      2xl:text-[22px] 2xl:leading-[36px] 2xl:max-w-[1016px]
      min-[3840px]:text-[36px] min-[3840px]:leading-[60px] min-[3840px]:max-w-[1694px]"
  >
    Lawsuits allege that long-term exposure to Roundup's active ingredient, glyphosate, causes cancer. If you or a loved one developed non-Hodgkin's lymphoma, you may qualify for settlement.
  </h2>
</div>
 
      </section>
{/* Mobile Hero Section */}
<section className="flex sm:hidden relative w-full min-h-[90vh] items-start overflow-hidden">
  {/* Background Image */}
  <img
    src={MobileHeroBg}
    alt="Hero Background"
    className="absolute inset-0 w-full h-full object-cover object-[right] z-0"
    style={{ minHeight: '90vh', width: '100%' }}
  />
  {/* Content */}
  <div className="relative z-20 flex flex-col items-center w-full px-4 text-center pt-[50px]">
       <h1
      className="text-[36px] leading-[40px] font-bold text-white mb-8 mt-8 drop-shadow-lg font-[Quicksand]"
    >
      Used Roundup and Later Diagnosed with Non-Hodgkin's Lymphoma?
    </h1>
    {/* <h2
      className="text-sm text-white mb-4 font-normal drop-shadow"
      style={{ fontFamily: 'Quicksand, sans-serif' }}
    >
Lawsuits allege long-term exposure to Roundup's glyphosate causes cancer. If you or a loved one developed non-Hodgkin's lymphoma, you may qualify for a settlement.    </h2> */}
  </div>
  {/* Overlay */}
  <div className="absolute inset-0  z-10" />
</section>
    </>
  )
}
 
export default RoundUpOne