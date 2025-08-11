import React from 'react'
import herobg from '../../../assets/DepoHero.png'
import MobileHeroBg from '../../../assets/DepoHeroMobile.png'

const HomeOne = () => {
  return (
    <>
      {/* Desktop/Laptop/Tablet Hero Section */}
            <section className="hidden sm:flex relative w-full h-relative md:min-h-[45vh] lg:min-h-[60vh] xl:min-h-[85vh] items-center justify-start overflow-hidden">
 
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
           Used Depo-Provera And Diagnosed With<br></br> A Brain Tumor Or Neurological Condition?
          </h1>
          <h2
            className="text-sm sm:text-base md:text-xs lg:text-xl text-white mb-6 font-medium drop-shadow leading-relaxed"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
           Depo-Provera has been linked to brain tumors, pseudotumor cerebri, and bone loss. <br></br> You may qualify for compensation. Get a free legal case review now. 
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
    {/* <h1
      className="text-45px font-bold text-white mb-4 drop-shadow-lg"
      style={{ fontFamily: 'Quicksand, sans-serif' }}
    >
           
    </h1> */}
   
   <h1
      className="text-[36px] leading-[40px] font-bold text-white mb-36 drop-shadow-lg font-[Quicksand]"
    >

          Used Depo-Provera And Diagnosed With A Brain Tumor Or Neurological Condition?
        </h1>

    <h2
      className="text-sm text-white mb-4 font-normal drop-shadow"
      style={{ fontFamily: 'Quicksand, sans-serif' }}
    >
           
    </h2>
{/* 
      <h2
          className="text-white capitalize text-[14px] min-[350px]:text-[15px] leading-[23px] tracking-[-0.15px] max-w-[358px] font-[Quicksand] font-medium"
        >
          Depo-Provera has been linked to brain tumors, pseudotumor cerebri, and bone loss.  You may qualify for compensation. Get a free legal case review now. 
        </h2> */}

  </div>
  {/* Overlay */}
  <div className="absolute inset-0  z-10" />
</section>

    </>
  )
}

export default HomeOne
