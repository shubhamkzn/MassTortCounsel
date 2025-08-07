import React from 'react'
import herobg from '../../../assets/PFASHero.png'
import MobileHeroBg from '../../../assets/PFASMobileHero.png'

const PFASOne = () => {
  return (
    <>
      {/* Desktop/Laptop/Tablet Hero Section */}
      <section className="hidden sm:flex relative w-full min-h-[45vh] md:min-h-[75vh] lg:min-h-[80] xl:min-h-[85vh] items-center justify-center overflow-hidden">
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
         Exposed to PFAS-Contaminated Water or Products?
          </h1>
          <h2
            className="text-sm sm:text-base md:text-xs lg:text-xl text-white mb-6 font-medium drop-shadow leading-relaxed"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
           PFAS chemicals have been linked to cancer, birth defects, and organ damage. <br></br>If you or a loved one were exposed through drinking water or workplace contact, you may qualify for settlement.
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
         Exposed to PFAS-Contaminated Water or Products?
    </h1>
    {/* <h2
      className="text-sm text-white mb-4 font-normal drop-shadow"
      style={{ fontFamily: 'Quicksand, sans-serif' }}
    >
           PFAS chemicals have been linked to cancer, birth defects, and organ damage. If you or a loved one were exposed through drinking water or workplace contact, you may qualify for settlement.
    </h2> */}
  </div>
  {/* Overlay */}
  <div className="absolute inset-0  z-10" />
</section>

    </>
  )
}

export default PFASOne
