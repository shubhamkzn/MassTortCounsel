import React from 'react'
import bgImg from '../../assets/AboutUsHeroCompress.png'
import MobileHeroBg from '../../assets/AboutUsHeroMobb.png'

const AboutOne = () => {
  return (
    <>
      {/* Desktop/Laptop/Tablet Hero Section */}
      <section className="hidden sm:flex relative w-full items-center justify-center overflow-hidden
        min-h-[28vh] 
        md:min-h-[32vh] 
        lg:min-h-[42vh] 
        xl:min-h-[55vh] 
        2xl:min-h-[60vh]
        min-[3840px]:min-h-[65vh]">

        {/* Background Image */}
        <img
          src={bgImg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* Content Container */}
        <div className="relative z-20 flex flex-col items-start w-full max-w-none
          pl-[5.56vw]
          md:pl-[30px]
          lg:pl-[26px]
          xl:pl-[70px]
          2xl:pl-[96px]
          min-[3840px]:pl-[160px]">
          
          {/* Main Heading */}
          <h1 className="text-white mb-4 md:mb-5 lg:mb-6 drop-shadow-lg text-left capitalize font-[Quicksand] font-bold
            text-[35px] leading-[42px] max-w-[85vw]
            md:text-[38px] md:leading-[30px] md:max-w-[50vw]
            lg:text-[44px] lg:leading-[35px] lg:max-w-[45vw]
            xl:text-[70px] xl:leading-[56px] xl:max-w-[568px]
            2xl:text-[90px] 2xl:leading-[72px] 2xl:max-w-[680px]
            min-[3840px]:text-[100px] min-[3840px]:leading-[120px] min-[3840px]:max-w-[1136px]">
            Who <span className="text-[#FDBA22]">We Are</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-white drop-shadow text-left font-[Quicksand]
            text-[8px] leading-[8px] max-w-[318px]
            md:text-[10px] md:leading-[12px] md:max-w-[368px]
            lg:text-[12px] lg:leading-[14px] lg:max-w-[490px]
            xl:text-[16px] xl:leading-[22px] xl:max-w-[650px]
            2xl:text-[20px] 2xl:leading-[25px] 2xl:max-w-[680px]
            min-[3840px]:text-[36px] min-[3840px]:leading-[40px] min-[3840px]:max-w-[1510px]">
            <span className="text-[#FDBA22] font-bold">Mass Tort Counsel </span>
            is a legal support platform dedicated to helping individuals & families navigate complex injury and product-related lawsuits. We connect people harmed by dangerous drugs, medical devices, and toxic exposures with legal teams who understand their pain and are ready to fight for justice.
          </h2>
        </div>
      </section>

      {/* Mobile Hero Section */}
      <section className="flex sm:hidden relative w-full h-[554px] flex-col items-start justify-start overflow-hidden">
        {/* Background Image */}
        <img
          src={MobileHeroBg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Content Container */}
        <div className="relative z-20 flex flex-col items-start w-full px-4 pt-[50px]">
          {/* Mobile Main Heading */}
          <h1 className="text-white mb-4 text-left capitalize font-[Quicksand] font-bold
            text-[32px] leading-normal">
            Who <span className="text-[#FDBA22]">We Are</span>
          </h1>
          
          {/* Mobile Subtitle */}
          <h2 className="text-white text-left font-[Quicksand]
            text-[15px] leading-normal">
            <span className="text-[#FDBA22] font-bold">Mass Tort Counsel </span>
            is a legal support platform dedicated to helping individuals & families navigate complex injury and product-related lawsuits. We connect people harmed by dangerous drugs, medical devices, and toxic exposures with legal teams who understand their pain and are ready to fight for justice.
          </h2>
        </div>
      </section>
    </>
  )
}

export default AboutOne