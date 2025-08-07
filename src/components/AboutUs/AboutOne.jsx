import React from 'react'
import bgImg from '../../assets/AboutUsHero.png'
import MobileHeroBg from '../../assets/AboutUsHeroMobb.png'


const AboutOne = () => {
  return (
    <>
      {/* Desktop/Laptop/Tablet Hero Section */}
      {/* <section className="hidden sm:flex relative items-center justify-between overflow-hidden
      w-10vh
        h-[33.19vh]
        md:h-[300px]
        lg:h-[320px]
        xl:h-[500px]
        2xl:h-[574px]
        min-[3840px]:h-[956px]">

      
        <img
          src={bgImg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        /> */}
        
        {/* Desktop/Laptop/Tablet Hero Section */}
      <section className="hidden sm:flex relative w-full h-[50vh] md:h-[32vh] lg:h-[43vh] xl:h-[48vh] items-center justify-center overflow-hidden">

        {/* Background Image */}
        <img
          src={bgImg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay for better text visibility */}
        {/* <div className="absolute inset-0 bg-black/20 z-10" /> */}
        
        {/* Content - Precisely positioned */}
        <div className="relative z-20 flex flex-col items-start w-full 
          pl-[5.56vw]
          md:pl-[30px]
          lg:pl-[26px]
          xl:pl-[70px]
          2xl:pl-[96px]
          4xl:pl-[160px]">
          
          <h1
            className="text-white mb-4 md:mb-5 lg:mb-6 drop-shadow-lg text-left capitalize
              text-[35px] leading-[42px] max-w-[85vw]
              md:text-[38px] md:leading-[30px] md:max-w-[50vw]
              lg:text-[44px] lg:leading-[35px] lg:max-w-[45vw]
              xl:text-[70px] xl:leading-[56px] xl:max-w-[568px]
              2xl:text-[90px] 2xl:leading-[72px] 2xl:max-w-[680px]
              min-[3840px]:text-[100px] min-[3840px]:leading-[120px] min-[3840px]:max-w-[1136px]
              font-[Quicksand] font-bold"
          >
            Who <span className="text-[#EDC14A]">We Are</span>
          </h1>
          
          <h2
            className="text-white drop-shadow text-left
              text-[8px] leading-[8px] max-w-[318px]
              md:text-[10px] md:leading-[12px] md:max-w-[368px]
              lg:text-[12px] lg:leading-[14px] lg:max-w-[490px]
              xl:text-[16px] xl:leading-[22px] xl:max-w-[650px]
              2xl:text-[20px] 2xl:leading-[25px] 2xl:2xl:max-w-[680px]
              min-[3840px]:text-[36px] min-[3840px]:leading-[40px] min-[3840px]:max-w-[1510px]
              font-[Quicksand]"
          >
            <span className="text-[#EDC14A] font-bold">BeWithLaw </span>is a legal support platform dedicated to helping individuals & families navigate complex injury and product-related lawsuits. We connect people harmed 
by dangerous drugs, medical devices, and toxic exposures with legal teams who understand their pain and are ready to fight for justice.
          </h2>
        </div>

      
      </section>

      {/* Mobile Hero Section */}
      <section className="flex sm:hidden relative w-full h-[554px] flex-col items-start justify-between overflow-hidden">
        {/* Background Image */}
        <img
          src={MobileHeroBg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* <img
  src={elp}
  alt="Ellipse"
  className="absolute top-0 right-0 w-full object-contain z-10 "
/> */}


        {/* Content - Positioned at top */}
        <div className="relative z-20 flex flex-col items-start w-full px-4 pt-[50px]">
          <h1 
            className="text-white mb-4 text-left capitalize
              text-[32px] leading-normal
              font-[Quicksand] font-bold"
          >
            Who <span className="text-[#EDC14A]">We Are</span>
          </h1>
          
          <h2 
            className="text-white text-left
              text-[15px] leading-normal
              font-[Quicksand]"
          >
           <span className="text-[#EDC14A]">BeWithLaw</span> is a legal support platform dedicated to helping individuals & families navigate complex injury and product-related lawsuits. We connect people harmed by dangerous drugs, medical devices, and toxic exposures with legal teams who understand their pain and are ready to fight for justice.
          </h2>
        </div>

        {/* Bottom Image
        <div className="relative z-30 w-full flex justify-center mt-auto">
          <img
            src={imgR}
            alt="Bottom illustration"
            className="h-auto object-contain aspect-[374/227.30]"
          />
        </div> */}
      </section>
    </>
  )
}

export default AboutOne