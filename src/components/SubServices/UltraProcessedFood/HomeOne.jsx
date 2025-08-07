import React from 'react'
import herobg from '../../../assets/ParaHero.png'
import MobileHeroBg from '../../../assets/Paramobilebg.png'

const HomeOne = () => {
  return (
    <>
      {/* Desktop/Laptop/Tablet Hero Section */}
      <section className="hidden sm:flex relative w-full min-h-[45vh] md:min-h-[55vh] lg:min-h-[65vh] items-center justify-center overflow-hidden">
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
          Exposed to Paraquat and Later Diagnosed with Parkinson’s?
          </h1>
          <h2
            className="text-sm sm:text-base md:text-xs lg:text-xl text-white mb-6 font-medium drop-shadow leading-relaxed"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
           Farmers, agricultural workers, and nearby residents exposed to Paraquat may face a 
higher risk of Parkinson’s disease. If you or a loved one were affected, you may be 
eligible for settlement.
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
      className="text-3xl font-bold text-white mb-4 drop-shadow-lg"
      style={{ fontFamily: 'Quicksand, sans-serif' }}
    >
      Trusted Legal Support for Your Future
    </h1>
    <h2
      className="text-sm text-white mb-4 font-normal drop-shadow"
      style={{ fontFamily: 'Quicksand, sans-serif' }}
    >
      If you’ve been harmed by a dangerous drug, medical device, or toxic exposure, you're not alone. We help you understand your rights and connect you with experienced legal teams who put your recovery first.
    </h2>
  </div>
  {/* Overlay */}
  <div className="absolute inset-0  z-10" />
</section>

    </>
  )
}

export default HomeOne
