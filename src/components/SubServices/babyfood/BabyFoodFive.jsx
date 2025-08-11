import React from "react";
import bgImg from '../../../assets/Rectangle04.png';
 
const eligibilityCards = [
  {
    number: "01",
    text: (
      <>
        Your child consumed <span className="text-[#EDC14A]"> store-bought baby food </span> from one or more major brands 
      </>
    ),
    bg: "bg-[#FDF9ED]",
  },

  {
    number: "02",
    text: (
      <>
        Your child was later diagnosed with <span className="text-[#EDC14A]"> autism, ADHD, or other developmental conditions </span>
               
      </>
    ),
    bg: "bg-[#F3F4F9]",
  },

    {
    number: "",
    text: (
      <>       
      </>
    ),
    bg: "bg-[#ffffff]",
   
  },
 
  {
    number: "03",
    text: (
      <>
        You have <span className="text-[#EDC14A]">medical documentation</span>  of the diagnosis  
       
      </>
     
    ),
    bg: "bg-[#F3F4F9]",
  },
    {
    number: "04",
    text: (
      <>
        You are within<span className="text-[#EDC14A]"> the legal filing window</span> in your state 
       
      </>
     
    ),
    bg: "bg-[#FDF9ED]",
  }
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
              You may  <span class="text-[#EDC14A]">qualify to file 
</span> a lawsuit if you
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
          
          {/* Second Row - Remaining Three Cards */}
          {eligibilityCards.map((card) => (
            <article
              key={card.number}
              className={`flex flex-col justify-center items-start gap-2 p-6 xl:p-8 h-[140px] xl:h-[160px] rounded-[10px] ${card.bg}  border border-white overflow-hidden`}
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
         You may  <span class="text-[#EDC14A]">qualify to file 
</span> a lawsuit if you
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
  {eligibilityCards
    .filter((card) => card.number !== "")
    .map((card) => (
      <article
        key={card.number}
        className={`flex flex-col justify-center items-start gap-3 p-6 h-[140px] rounded-[10px] ${card.bg} border border-white overflow-hidden`}
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
  <h2 className="text-[#4F2270] text-[34px] font-semibold capitalize leading-snug text-left w-full">
    You may  <span class="text-[#EDC14A]">qualify to file 
</span> a lawsuit if you
  </h2>
        <p className="text-[#757575] text-[20px] font-medium text-left leading-[28px]">
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
         {mobileEligibilityCards
  .filter((card) => card.number !== "")
  .map((card, index) => {
    const isEven = index % 2 === 0;
    const bgColor = isEven ? "bg-[#FDF9ED]" : "bg-[#F0F4FF]"; 

    return (
      <article
        key={card.number}
        className={`flex flex-col justify-center items-start text-left gap-3 p-5 h-[120px] rounded-[10px] ${bgColor} shadow-sm border border-white overflow-hidden`}
      >
        <span className="text-[#4F2270] text-[30px] font-normal font-[Quicksand] leading-none">
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
 