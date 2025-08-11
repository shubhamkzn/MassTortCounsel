import React from 'react'
import bgImg from '../../assets/MAAP.png'
import bgImgL from '../../assets/MAAP.png'
import dots from '../../assets/dots.png'
import map from '../../assets/MOBMAP.png'
// You'll need to add your new right section background image
// import rightBgImg from '../../assets/RIGHT_SECTION_BG.png'

 
const AboutFive = () => {
  return (
    <>
      {/* Desktop/Laptop/Tablet Section */}
      <section className="hidden sm:flex relative w-full overflow-hidden
        h-[33.19vh]
        md:h-[300px]
        lg:h-[320px]
        xl:h-[500px]
        2xl:h-[574px]
        min-[3840px]:h-[956px]">
        
        {/* Left Section - Map Image */}
      <div className="relative w-[45%] h-full flex items-center justify-center">
          <img
            src={bgImg} // Replace with your dedicated map image
            alt="Network Map"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Right Section - Background Image with Text Overlay */}
        <div className="relative w-[55%] h-full">
      
          
          {/* Text Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-start z-10
            pl-[20px]
            md:pl-[30px]
            lg:pl-[40px]
            xl:pl-[50px]
            2xl:pl-[60px]
            min-[3840px]:pl-[100px]
            pr-[20px]
            md:pr-[30px]
            lg:pr-[40px]
            xl:pr-[50px]
            2xl:pr-[60px]
            min-[3840px]:pr-[100px]">
           
            <div className="w-full">
              {/* Heading */}
              <h1 className="mb-2
                text-[32px]
                md:text-[34px]
                lg:text-[36px]
                xl:text-[40px]
                2xl:text-[44px]
                min-[3840px]:text-[48px]
                font-[Quicksand] font-bold leading-normal capitalize">
                <span className="text-[#4F2270]">Our </span><span className="text-[#EDC14A]">Network</span>
              </h1>
             
              {/* Subtext */}
          <p className="text-[#757575]
              text-[12px] leading-[17px]
              md:text-[14px] md:leading-[20px]
              lg:text-[16px] lg:leading-[22px]
              xl:text-[18px] xl:leading-[24px]
              2xl:text-[20px] 2xl:leading-[27px]
              min-[3840px]:text-[22px] min-[3840px]:leading-[30px]
              font-[Quicksand] font-medium">
  BeWithLaw partners with vetted law firms that focus on mass torts and personal injury cases across the United States. These firms work on a contingency basis, meaning you pay nothing unless compensation is awarded.
</p>

            </div>
          </div>
        </div>
      </section>
 
      {/* Mobile Hero Section */}
      <section className="flex sm:hidden relative w-full h-[568px] flex-col items-start justify-between bg-white overflow-hidden">

        {/* Dots at top-right */}
        <img
          src={dots}
          alt="Top Right Dots"
          className="absolute top-0 right-0 w-1/2 h-[42px] object-contain z-10"
        />

        {/* Text Content */}
        <div className="relative z-20 flex flex-col items-start w-full px-4 pt-[97px]">
          <h1 className="text-[#4F2270] mb-4 text-left capitalize text-[32px] leading-[22px] font-[Quicksand] font-bold">
            Our <span className="text-[#EDC14A]">Network</span>
          </h1>

          <h2 className="text-[#757575] text-left text-[16px] leading-[17px] font-[Quicksand]">
            BeWithLaw partners with vetted law firms that focus on mass torts and personal injury cases across the United States. These firms work on a contingency basis, meaning you pay nothing unless compensation is awarded.
          </h2>
        </div>

        {/* Map at bottom */}
<img
  src={map}
  alt="USA Map"
  className="
    w-full max-w-[550px] mx-auto
    px-2
    mb-20
    object-contain
  "
/>



      </section>
    </>
  )
}
 
export default AboutFive