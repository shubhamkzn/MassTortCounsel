import React from 'react'
import blueMt from '../../assets/MountNew.png'
import dots from '../../assets/dots002.png'
import bgImg from '../../assets/bg002.png'
import MobileHeroBg from '../../assets/mountMOB.png'

const AboutTwo = () => {
  return (
    <>
    {/* Desktop/Laptop/Tablet Section */}
{/* Desktop/Laptop/Tablet Section */}
<section
  className="hidden sm:block relative bg-no-repeat bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImg})` }}
>
  <div className="relative min-h-[500px] lg:min-h-[60vh] max-h-[900px]">
    {/* Mountain (bottom-left) - More conservative scaling */}
    <img
      src={blueMt}
      alt="Mountains illustration"
      className="absolute bottom-0 left-0 z-10
        w-[314px] h-[169px]
        sm:w-[377px] sm:h-[203px]
        md:w-[503px] md:h-[270px]
        lg:w-[589px] lg:h-[317px]"
    />

    {/* Top-left dots - Conservative scaling to prevent overlap */}
    <img
      src={dots}
      alt=""
      className="absolute left-0 z-10
        top-[18px] w-[172px] h-[22px]
        sm:top-[21px] sm:w-[206px] sm:h-[27px]
        md:top-[28px] md:w-[275px] md:h-[36px]
        lg:top-[33px] lg:w-[322px] lg:h-[42px]"
    />

    {/* Bottom-right dots - Conservative scaling to prevent overlap */}
    <img
      src={dots}
      alt=""
      className="absolute right-0 z-10
        bottom-[18px] w-[172px] h-[22px]
        sm:bottom-[21px] sm:w-[206px] sm:h-[27px]
        md:bottom-[28px] md:w-[275px] md:h-[36px]
        lg:bottom-[33px] lg:w-[322px] lg:h-[42px]"
    />

    {/* Text block - Right half, vertically centered */}
    <div className="absolute left-1/2 top-1/2 -translate-y-1/2 z-20 w-1/2 pr-8 md:pr-12 lg:pr-16 xl:pr-20 2xl:pr-24">
      <div className="max-w-[600px] 2xl:max-w-[700px] min-[2560px]:max-w-[800px] space-y-4">
        <h2 className="font-quicksand font-bold text-left
          text-[32px] md:text-[38px] lg:text-[44px] xl:text-[50px] 2xl:text-[54px]
          min-[2560px]:text-[58px] min-[3840px]:text-[62px]
          leading-snug">
          <span className="text-[#692D94]">Our </span>
          <span className="text-[#EDC14A]">Mission</span>
        </h2>
        <p className="font-quicksand font-medium text-[#757575] text-left
          text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]
          min-[2560px]:text-[24px] min-[3840px]:text-[26px]
          leading-relaxed">
          To simplify legal access for people harmed by negligence &amp; hold
          corporations accountable through trusted, compassionate, and
          professional support.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Mobile Hero Section */}
      <section className="flex sm:hidden relative w-full h-[610px] flex-col items-start justify-between overflow-hidden ">
        {/* Background Image */}
        <img
          src={MobileHeroBg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-#FDF9ED;/30 z-10" />

        {/* Content - Positioned at top */}
        <div className="relative z-20 flex flex-col items-start w-full px-4 pt-[97px]">
          <h1 
            className="text-[#692D94] mb-4 text-left capitalize
              text-[32px] leading-normal
              font-[Quicksand] font-bold"
          >
            Our <span className="text-[#EDC14A]">Mission</span>
          </h1>
          
          <h2 
            className="text-[#757575] text-left
              text-[14px] leading-normal font-medium
              font-[Quicksand]"
          >
            To simplify legal access for people harmed by negligence & hold corporations accountable through trusted, compassionate, and professional support.
          </h2>
        </div>

      </section>
    </>
  )
}

export default AboutTwo