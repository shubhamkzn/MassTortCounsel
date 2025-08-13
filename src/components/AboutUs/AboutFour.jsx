import React from "react";
import bgImg from '../../assets/Rectangle04.png';
 
const eligibilityCards = [
  {
    number: "01",
    text: (
      <>
        Dangerous prescription drugs
      </>
    ),
    bg: "bg-[#FDF9ED]",
  },
  {
    number: "02",
    text: (
      <>
        Defective medical devices
      </>
    ),
    bg: "bg-[#F3F4F9]",
  },
  {
    number: "03",
    text: (
      <>
        Environmental or chemical exposure
      </>
    ),
    bg: "bg-[#FDF9ED]",
  },
  {
    number: "04",
    text: (
      <>
        Wrongful injury or illness
      </>
     
    ),
    bg: "bg-[#F3F4F9]",
  },
  
];
 
const mobileEligibilityCards = eligibilityCards.map((card, index) => {
  // Alternate colors: odd indices get #FDF9ED, even indices get #F3F4F9
  // This creates: #FDF9ED, #F3F4F9, #FDF9ED, #F3F4F9, #FDF9ED
  if (index % 2 === 0) {
    return { ...card, bg: "!bg-[#FDF9ED]" };
  }
  return { ...card, bg: "!bg-[#F3F4F9]" };
});
 
export default function EligibilityCriteria() {
  return (
    <section
      className="w-full bg-white py-12 font-[Quicksand] bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Laptop & Large Screen Layout (≥1024px) - Horizontal Layout */}
<div className="hidden lg:block max-w-[1440px] mx-auto 
  px-[57px] py-[43px]
  xl:px-[80px] xl:py-[60px]
  2xl:px-[96px] 2xl:py-[72px]">
  <div className="flex items-center gap-6 xl:gap-8 justify-evenly">


    
    {/* Text Block */}
    <div className="flex flex-col justify-center 
      w-[280px] h-[102px]
      xl:w-[394px] xl:h-[144px]
      2xl:w-[473px] 2xl:h-[173px]">
      <h2 className="text-[#4F2270] text-[35px] xl:text-[45px] 2xl:text-[45px] font-semibold capitalize leading-tight mb-2">
        Who We<span className="text-[#FDBA22]"> Help</span>
      </h2>
      <p className="text-[#757575] text-[11px] xl:text-[14px] 2xl:text-[17px] font-medium leading-[18px] xl:leading-[22px] 2xl:leading-[26px]">
        We assist individuals & families affected by:     
      </p>
    </div>

    {/* Four Cards in Horizontal Line */}
    {eligibilityCards.slice(0, 4).map((card, index) => (
      <article
        key={card.number}
        className={`flex flex-col justify-center items-start gap-2 
          p-4 xl:p-6 2xl:p-7
          w-[137px] h-[102px]
          xl:w-[192px] xl:h-[144px]
          2xl:w-[230px] 2xl:h-[173px]
          rounded-[10px] ${card.bg} shadow-sm border border-white overflow-hidden`}
      >
        <span className={`font-[Quicksand] font-normal leading-none 
          text-[25px] xl:text-[35px] 2xl:text-[42px]
          ${index % 2 === 0 ? 'text-[#FDBA22]' : 'text-[#4F2270]'}`}>
          {card.number}
        </span>
        <p className="text-[#4F2270] font-medium tracking-[-0.32px] capitalize text-left
          text-[11px] leading-[16px]
          xl:text-[16px] xl:leading-[22px]
          2xl:text-[19px] 2xl:leading-[26px]">
          {card.text}
        </p>
      </article>
    ))}
  </div>
</div>
 
      {/*  Tablet Layout (md only) */}
<div className="hidden md:flex lg:hidden max-w-[1200px] mx-auto flex-col items-center gap-6 px-4 py-2 md:gap-6 xl:gap-8">
  <div className="w-full text-center -mt-8">
    <h2 className="text-[#4F2270] text-[28px] lg:text-[32px] font-semibold capitalize leading-normal">
      Who We<span className="text-[#FDBA22]"> Help</span>
    </h2>

    <p className="text-[#757575] text-[14px] lg:text-[14px] font-medium text-center mt-4 leading-[22px] lg:leading-[24px]">
      We assist individuals & families affected by: 
    </p>
  </div>

  <div className="grid grid-cols-2 gap-8">
    {eligibilityCards.map((card, index) => {
      // Cards 1 and 4 get one color, cards 2 and 3 get another
      const cardBg = (index === 0 || index === 3) ? 'bg-[#FDF9ED]' : 'bg-[#F3F4F9]';
      const numberColor = (index === 0 || index === 3) ? 'text-[#FDBA22]' : 'text-[#4F2270]';
      
      return (
        <article
          key={card.number}
          className={`flex flex-col justify-center items-start gap-3 p-6 h-[140px] rounded-[10px] ${cardBg} shadow-sm border border-white overflow-hidden`}
        >
          <span className={`${numberColor} font-[Quicksand] font-normal leading-none text-[26px]`}>
            {card.number}
          </span>
          <p className="text-[#4F2270] text-[14px] font-medium leading-[20px] tracking-[-0.32px] capitalize text-left">
            {card.text}
          </p>
        </article>
      );
    })}
  </div>
</div>
 
      {/* Mobile Layout (below md) */}
<div className="md:hidden flex flex-col items-center justify-center gap-6 px-4">
  <h2 className="text-[#4F2270] text-[35px] font-semibold capitalize leading-[10px] text-left w-full">
    Who We<span className="text-[#FDBA22]"> Help</span>
  </h2>
  <p className="text-[#757575] text-[16px] font-medium text-left leading-[22px] w-full">
    We assist individuals & families affected by:
  </p>

  <div className="grid grid-cols-2 gap-4">
    {mobileEligibilityCards.map((card, index) => {
      // Alternating number colors based on index
      const numberColor = index % 2 === 0 ? 'text-[#FDBA22]' : 'text-[#4F2270]';
      
      return (
        <article
          key={card.number}
          className={`flex flex-col justify-center items-start text-left gap-3 p-5 h-[120px] rounded-[10px] ${card.bg} shadow-sm border border-white overflow-hidden`}
        >
          <span className={`${numberColor} text-[35px] font-medium font-[Quicksand] leading-none`}>
            {card.number}
          </span>
          <p className="text-[#4F2270] text-[15px] font-medium font-[Quicksand] leading-[20px] tracking-[-0.32px] capitalize">
            {card.text}
          </p>
        </article>
      );
    })}
  </div>
</div>
    </section>
  );
}
 