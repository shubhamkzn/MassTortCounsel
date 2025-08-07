import React from 'react'
import herobg from '../../../assets/ParaquatHero.png'
import MobileHeroBg from '../../../assets/ParaquatHeroMobile.png'

const PraquatOne = () => {
  return (
    <>
      {/* Desktop/Laptop/Tablet Hero Section */}
<section className="hidden sm:flex relative w-full min-h-[45vh] md:min-h-[55vh] lg:min-h-[65vh] xl:min-h-[85vh] items-center justify-center overflow-hidden">
  {/* Background Image Container */}
  <div className="absolute inset-0 w-full h-full z-0">
    <img
      src={herobg}
      alt="Hero Background"
      className="w-full h-full object-cover scale-110"
    />
  </div>

  {/* Overlay for better text visibility */}
  <div className="absolute inset-0 z-10" />

        {/* Content */}
        
        <div className="relative z-20 flex flex-col items-center justify-center w-full px-6 md:px-16 lg:px-24 py-8 text-center">
  <h1
    className="text-white mb-4 drop-shadow-lg capitalize font-[Quicksand] font-bold text-center
      text-[23px] leading-[31px] max-w-[218px]
      sm:text-[30px] sm:leading-[40px] sm:max-w-[372px]
      md:text-[28px] md:leading-[35px] md:max-w-[447px]
      lg:text-[39px] lg:leading-[45px] lg:max-w-[596px]
      xl:text-[45px] xl:leading-[50px] xl:max-w-[838px]
      2xl:text-[54px] 2xl:leading-[60px] 2xl:max-w-[1117px]
      min-[3840px]:text-[90px] min-[3840px]:leading-[120px] min-[3840px]:max-w-[1676px]"
  >
    Exposed to Paraquat and Later Diagnosed with Parkinson's?
  </h1>
  <h2
    className="text-white mb-6 drop-shadow font-[Quicksand] font-normal text-center
      text-[9px] leading-[15px] max-w-[186px]
      sm:text-[12px] sm:leading-[20px] sm:max-w-[317px]
      md:text-[11px] md:leading-[12px] md:max-w-[381px]
      lg:text-[16px] lg:leading-[17px] lg:max-w-[508px]
      xl:text-[18px] xl:leading-[20px] xl:max-w-[714px]
      2xl:text-[22px] 2xl:leading-[22px] 2xl:max-w-[952px]
      min-[3840px]:text-[36px] min-[3840px]:leading-[60px] min-[3840px]:max-w-[1428px]"
  >
    Farmers, agricultural workers, and nearby residents exposed to Paraquat may face a 
    higher risk of Parkinson's disease. If you or a loved one were affected, you may be 
    eligible for settlement.
  </h2>
</div>

      </section>
{/* Mobile Hero Section */}
<section className="flex sm:hidden relative w-full min-h-[90vh] items-start overflow-hidden">
  {/* Background Image */}
  <img
    src={MobileHeroBg}
    alt="Hero Background"
    className="absolute inset-0 w-full h-full object-cover z-0"
    style={{ minHeight: '90vh', width: '100%' }}
  />
  {/* Content */}
  <div className="relative z-20 flex flex-col items-center w-full px-4 text-center pt-[80px]">
    <h1
      className="text-[36px] leading-[40px] font-bold text-white mb-8 mt-8 drop-shadow-lg font-[Quicksand]"
    >
    Exposed to Paraquat & Later Diagnosed with Parkinson's?
    </h1>
{/* 
    <h2
      className="text-[16px] leading-[20px] text-white mb-4 font-normal drop-shadow font-[Quicksand]"
    >
Farmers, agricultural workers, and nearby residents exposed to Paraquat may face a higher risk of Parkinson's disease. If you or a loved one were affected, you may be eligible for settlement.    </h2> */}
  </div>
  {/* Overlay */}
  <div className="absolute inset-0  z-10" />
</section>

    </>
  )
}

export default PraquatOne
