import React from "react";
import bgImg from '../../../assets/Rectangle04.png';
 
const eligibilityCards = [
  {
    number: "01",
    text: (
      <>
        Worked in <span className="text-[#EDC14A]">farming, landscaping, or chemical application</span>
      </>
    ),
    bg: "bg-[#FDF9ED]",
  },
  {
    number: "02",
    text: (
      <>
        Were exposed to Paraquat through<span className="text-[#EDC14A]"> mixing, spraying, or contact</span>
               
      </>
    ),
    bg: "bg-[#F3F4F9]",
  },
  {
    number: "03",
    text: (
      <>
      Lived near farms or areas treated with Paraquat
       
      </>
    ),
    bg: "bg-[#F3F4F9]",
  },
  {
    number: "04",
    text: (
      <>
        Were later diagnosed with <span className="text-[#EDC14A]"> Parkinson’s disease</span>
       
      </>
     
    ),
    bg: "bg-[#FDF9ED]",
  },
  {
    number: "05",
    text: (
      <>
        Are within your <span className="text-[#EDC14A]"> state’s filing deadline</span>
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
      {/* Laptop & Large Screen Layout (≥1024px) - 3x2 Grid */}
      <div className="hidden lg:block max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-6 xl:gap-7">
          {/* First Row */}
          {/* Text Block (First Cell) - Sized like a card but without background */}
          <div className="flex flex-col justify-center px-6 xl:px-8 py-6 xl:py-8 h-[140px] xl:h-[160px]">
            <h2 className="text-[#4F2270] text-[28px] xl:text-[32px] font-semibold capitalize leading-tight mb-2">
              Who May Be Eligible
            </h2>
            <p className="text-[#757575] text-[13px] xl:text-[14px] font-medium leading-[20px] xl:leading-[22px]">
  Unsure?{' '}
  <a
    href="#contact-form"
    className="text-[#EDC14A] hover:text-[#d4a841] transition-colors duration-200 underline"
  >
    Submit the form
  </a>
  {' '}above to check eligibility at no cost.
</p>
          </div>
 
          {/* First Two Cards (Second and Third Cells) */}
          {eligibilityCards.slice(0, 2).map((card) => (
            <article
              key={card.number}
              className={`flex flex-col justify-center items-start gap-2 p-6 xl:p-8 h-[140px] xl:h-[160px] rounded-[10px] ${card.bg} shadow-sm border border-white overflow-hidden`}
            >
              <span className="text-[#4F2270] font-[Quicksand] font-normal leading-none text-[28px] xl:text-[32px]">
                {card.number}
              </span>
              <p className="text-[#4F2270] text-[14px] xl:text-[15px] font-medium leading-[20px] xl:leading-[22px] tracking-[-0.32px] capitalize text-left">
                {card.text}
              </p>
            </article>
          ))}
 
          {/* Second Row - Remaining Three Cards */}
          {eligibilityCards.slice(2, 5).map((card) => (
            <article
              key={card.number}
              className={`flex flex-col justify-center items-start gap-2 p-6 xl:p-8 h-[140px] xl:h-[160px] rounded-[10px] ${card.bg} shadow-sm border border-white overflow-hidden`}
            >
              <span className="text-[#4F2270] font-[Quicksand] font-normal leading-none text-[28px] xl:text-[32px]">
                {card.number}
              </span>
              <p className="text-[#4F2270] text-[14px] xl:text-[15px] font-medium leading-[20px] xl:leading-[22px] tracking-[-0.32px] capitalize text-left">
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
          Who May Be Eligible
          </h2>
 
          <p className="text-[#757575] text-[14px] lg:text-[14px] font-medium text-center mt-4 leading-[22px] lg:leading-[24px]">
  Unsure?{' '}
  <a
    href="#contact-form"
    className="text-[#EDC14A] hover:text-[#d4a841] transition-colors duration-200 underline"
  >
    Submit the form
  </a>
  {' '}above to check eligibility at no cost.
</p>
 
         
        </div>
 
        <div className="grid grid-cols-2 gap-8">
          {eligibilityCards.map((card) => (
            <article
              key={card.number}
              className={`flex flex-col justify-center items-start gap-3 p-6 h-[140px] rounded-[10px] ${card.bg} shadow-sm border border-white overflow-hidden`}
            >
              <span className="text-[#4F2270] font-[Quicksand] font-normal leading-none text-[26px]">
                {card.number}
              </span>
              <p className="text-[#4F2270] text-[14px] font-medium leading-[20px] tracking-[-0.32px] capitalize text-left">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
 
      {/* Mobile Layout (below md) */}
      <div className="md:hidden flex flex-col items-center justify-center gap-6 px-4">
  <h2 className="text-[#4F2270] text-[24px] font-semibold capitalize leading-snug text-left w-full">
    Who May Be Eligible
  </h2>
        <p className="text-[#757575] text-[14px] font-medium text-left leading-[22px]">
  Unsure?{' '}
  <a
    href="#contact-form"
    className="text-[#EDC14A] hover:text-[#d4a841] transition-colors duration-200 underline"
  >
    Submit the form
  </a>
  {' '}above to check eligibility at no cost.
</p>
 
        <div className="flex flex-col gap-5 w-full max-w-[360px]">
          {mobileEligibilityCards.map((card) => (
            <article
              key={card.number}
              className={`flex flex-col justify-center items-start text-left gap-3 p-5 h-[120px] rounded-[10px] ${card.bg} shadow-sm border border-white overflow-hidden`}
            >
              <span className="text-[#4F2270] text-[30px] font-normal font-[Quicksand] leading-none">
                {card.number}
              </span>
              <p className="text-[#4F2270] text-[15px] font-medium font-[Quicksand] leading-[20px] tracking-[-0.32px] capitalize">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
 