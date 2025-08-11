import React from 'react'
import imgR from '../../assets/NewServiceMainImg2.png'
import MobileHeroBg from '../../assets/serMob1.png'
// import GradientMobileHero from '../../assets/ServiceGradientMobileHero.png'
const ServiceOne = () => {
  return (
    <>
      {/* Desktop/Laptop/Tablet Hero Section */}
      <section className="hidden sm:flex relative items-center justify-between overflow-hidden bg-gradient-to-r from-[#4F2270] to-[#4F2270]
        h-[27.85vh]
        md:h-[301px]
        lg:h-[351px]
        xl:h-[401px]
        2xl:h-[481px]
        min-[3840px]:h-[802px]">
       
        {/* Content - Precisely positioned */}
        <div className="relative z-20 flex flex-col items-start w-full
          pl-[5.56vw]
          md:pl-[60px]
          lg:pl-[70px]
          xl:pl-[80px]
          2xl:pl-[96px]
          4xl:pl-[160px]">
         
          <h1
            className="text-white mb-4 md:mb-5 lg:mb-6 drop-shadow-lg text-left capitalize
              text-[32px] leading-[42px] max-w-[85vw]
              md:text-[26px] md:leading-[28px] md:max-w-[40vw]
              lg:text-[40px] lg:leading-[53px] lg:max-w-[45vw]
              xl:text-[45px] xl:leading-[60px] xl:max-w-[568px]
              2xl:text-[54px] 2xl:leading-[72px] 2xl:max-w-[680px]
              min-[3840px]:text-[90px] min-[3840px]:leading-[120px] min-[3840px]:max-w-[1136px]
               md:-ml-8"
            style={{
              fontFamily: 'Quicksand, sans-serif',
              fontWeight: 700
            }}
          >
            Explore Active Lawsuits And Claim<span className="text-[#FDBA22] font-bold"> Your Rights</span>
          </h1>
         
          <h2
            className="text-white mb-6 md:mb-8 lg:mb-10 drop-shadow text-left
              text-[14px] leading-[23px] max-w-[90vw]
              md:text-[10px] md:leading-[15px] md:max-w-[45vw]
              lg:text-[12px] lg:leading-[27px] lg:max-w-[50vw]
              xl:text-[15px] xl:leading-[30px] xl:max-w-[636px]
              2xl:text-[17px] 2xl:leading-[36px] 2xl:max-w-[760px]
              min-[3840px]:text-[36px] min-[3840px]:leading-[60px] min-[3840px]:max-w-[1272px]
               md:-ml-8  font-[Quicksand] font-medium"
          >
            Discover legal actions against companies that endangered lives. If you were harmed by a drug, toxic exposure, or defective product, you may be eligible for a settlement. Click to learn more and connect with attorneys - at no cost to you.
          </h2>
        </div>
 
        {/* Right Image - Exact Height */}
       
        <img
          src={imgR}
          alt="Hero Right"
          className="h-full object-cover
            w-[38.96vw]
            md:w-[421px]
            lg:w-[491px]
            xl:w-[561px]
            2xl:w-[673px]
            min-[3840px]:w-[1122px]
            md:-mr-28"
        />
      </section>
 
   {/* Mobile Hero Section */}
<section className="bg-[#4F2270] flex sm:hidden relative w-full items-start justify-center overflow-hidden">
  
  {/* Background Image */}
  <img
    src={MobileHeroBg}
    alt="Hero Background"
    className="w-full h-auto object-cover" // ✅ Keeps aspect ratio
  />

  {/* Overlay (optional for darkening image) */}
  <div className="absolute inset-0" />

  {/* Hero Text Content */}
  <div className="absolute top-0 left-0 z-20 flex flex-col items-start w-full px-4 pt-[50px]">
    <h1
      className="text-white mb-4 text-left capitalize text-[25px] min-[350px]:text-[28px] leading-normal max-w-[358px] font-[Quicksand] font-bold"
    >
      Explore Active Lawsuits<br />
      And Claim <span className='text-[#FDBA22]'> Your Rights</span> 
    </h1>

    <h2
      className="text-white text-left capitalize text-[12px] min-[350px]:text-[14px] leading-[23px] tracking-[-0.15px] max-w-[358px] font-[Quicksand] font-medium"
    >
      Discover legal actions against companies that endangered lives. If you were harmed by a drug, toxic exposure, or defective product, you may be eligible for a settlement. Click to learn more and connect with attorneys – at no cost to you.
    </h2>
  </div>
</section>

   
    </>
  )
}
 
export default ServiceOne


