import React from 'react'
import herobg from '../../../assets/subservice/Talcum_hero.png'
import MobileHeroBg from '../../../assets/subservice/talcum_mobile_hero.png'

const HomeOne = () => {
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
        <div className="absolute inset-0  z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full px-6 md:px-16 lg:px-24 py-8 text-center">
          <h1
            className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
        Used Talcum Powder and Diagnosed<br></br> with Ovarian Cancer? 
          </h1>
          <h2
            className="text-sm sm:text-base md:text-xs lg:text-xl text-white mb-6 font-medium drop-shadow leading-relaxed"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
          Talc-based products like Johnson’s Baby Powder have been linked to ovarian cancer in women.<br></br>  If you or a loved one were diagnosed, you may be eligible for financial settlement. 
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
    Used Talcum Powder and Diagnosed with Ovarian Cancer? 
    </h1>
    {/* <h2
      className="text-sm text-white mb-4 font-normal drop-shadow"
      style={{ fontFamily: 'Quicksand, sans-serif' }}
    >
      Talc-based products like Johnson’s Baby Powder have been linked to ovarian cancer in women.  If you or a loved one were diagnosed, you may be eligible for financial settlement. 
    </h2> */}
  </div>
  {/* Overlay */}
  <div className="absolute inset-0  z-10" />
</section>

    </>
  )
}

export default HomeOne
