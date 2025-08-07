import React from "react";
import bgImg from "../../../assets/Rectangle04.png";

const eligibilityCards = [
  {
    number: "01",
    text: (
      <>
        Used Depo-Provera For{" "}
        <span className="text-[#EDC14A]">6 Months Or Longer</span>
      </>
    ),
    bg: "bg-[#FDF9ED]",
  },
  {
    number: "02",
    text: (
      <>
        <span className="text-[#EDC14A]">Were Diagnosed</span> With Meningioma,
        <br /> Pseudotumor Cerebri, Or Severe Bone Loss
      </>
    ),
    bg: "bg-[#F6F7FB]",
  },
  {
    number: "03",
    text: (
      <>
        <span className="text-[#EDC14A]">Symptoms</span> Like Vision Problems,
        <br /> Severe Headaches, Or Balance Issues
      </>
    ),
    bg: "bg-[#F3F4F9]",
  },
  {
    number: "04",
    text: (
      <>
        Are Still <span className="text-[#EDC14A]">Within Your State's</span>{" "}
        Statute Of Limitations
      </>
    ),
    bg: "bg-[#FDF9ED]",
  },
];

// Mobile-specific cards with swapped backgrounds for cards 03 and 04
const mobileEligibilityCards = eligibilityCards.map((card, index) => {
  if (index === 2) {
    // Card 03 (index 2)
    return { ...card, bg: "!bg-[#FDF9ED]" }; // Use card 04's background with !important
  }
  if (index === 3) {
    // Card 04 (index 3)
    return { ...card, bg: "!bg-[#F3F4F9]" }; // Use card 03's background with !important
  }
  return card; // Keep original backgrounds for cards 01 and 02
});

export default function EligibilityCriteria() {
  return (
    <section
      className="w-full bg-white py-12 font-[Quicksand] bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* ✅ Laptop & Large Screen Layout (≥1024px) */}
     <div className="hidden lg:grid max-w-[1200px] mx-auto grid-cols-[420px_auto] xl:grid-cols-[450px_auto] gap-x-[48px] xl:gap-x-[60px] gap-y-12 px-4 lg:px-6 items-center">
        <div className="max-w-[405px] flex flex-col justify-center">
          <h2 className="text-[#692D94] text-[32px] xl:text-[40px] font-semibold capitalize leading-[1.2]">
            You May <span className="text-[#EDC14A]">Qualify<br></br> To File </span><span className="text-[#692D94]">A Lawsuit<br /> If You...!</span>
          </h2>
          <p className="text-[#757575] text-[13px] xl:text-[14px] font-medium leading-[20px] xl:leading-[22px]">
  Unsure?{' '}
  <a
    href="#contact-form"
    className="text-[#EDC14A] hover:text-[#d4a841] transition-colors duration-200 underline"
  >
    Submit the form
  </a>
  {' '}above<br />to check eligibility at no cost.
</p>
        </div>
 
        <div className="grid grid-cols-2 gap-x-[28px] xl:gap-x-[32px] gap-y-4 justify-start ml-[-20px] xl:ml-[-32px]">
          {eligibilityCards.map((card) => (
            <article
              key={card.number}
              className={`flex flex-col justify-center items-start gap-[6px] p-4 w-[260px] xl:w-[325px] h-[100px] rounded-[10px] ${card.bg} shadow-sm border border-white overflow-hidden`}
            >
              <span className="text-[#692D94] font-[Quicksand] not-italic font-medium leading-none text-[25px] xl:text-[28px]">
                {card.number}
              </span>
              <p className="text-[#692D94] text-[12px] xl:text-[13px] font-medium leading-none tracking-[-0.32px] capitalize text-left">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
 

      {/* ✅ Tablet Layout (md only) */}
      <div className="hidden md:flex lg:hidden max-w-[1200px] mx-auto flex-col items-center gap-6 px-4 py-2 md:gap-6 xl:gap-8">
        <div className="w-full text-center -mt-8">
          <h2 className="text-[#692D94] text-[28px] lg:text-[32px] font-semibold capitalize leading-normal">
            You May <span className="text-[#EDC14A]">Qualify To File </span>
            <br />
            <span className="text-[#692D94]">A Lawsuit If You...!</span>
          </h2>
          <p className="text-[#757575] text-[13px] xl:text-[14px] font-medium leading-[20px] xl:leading-[22px]">
            Unsure?{" "}
            <a
              href="#contact-form"
              className="text-[#EDC14A] hover:text-[#d4a841] transition-colors duration-200 underline"
            >
              Submit the form
            </a>{" "}
            above to check eligibility at no cost.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {eligibilityCards.map((card) => (
            <article
              key={card.number}
              className={`flex flex-col justify-center items-start gap-[12px] p-8 w-[280px] lg:w-[320px] h-[160px] rounded-[10px] ${card.bg} shadow-sm border border-white overflow-hidden`}
            >
              <span className="text-[#692D94] font-[Quicksand] not-italic font-normal leading-none text-[20px]">
                {card.number}
              </span>
              <p className="text-[#692D94] text-[14px] lg:text-[15px] xl:text-[16px] font-medium leading-none tracking-[-0.32px] capitalize text-left">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* ✅ Mobile Layout (below md) */}
      <div className="md:hidden flex flex-col  gap-6 px-4">
        <h2 className="text-[#692D94] text-[30px] font-semibold capitalize leading-snug text-left">
          You May <span className="text-[#EDC14A]">Qualify</span>{" "}
          <span className="text-[#EDC14A]">To</span>{" "}
          <span className="text-[#EDC14A]">File</span> A Lawsuit If You
        </h2>
          <p className="text-[#757575] text-[13px] xl:text-[14px] font-medium leading-[20px] xl:leading-[22px]">
            Unsure?{" "}
            <a
              href="#contact-form"
              className="text-[#EDC14A] hover:text-[#d4a841] transition-colors duration-200 underline"
            >
              Submit the form
            </a>{" "}
            above
            <br />
            to check eligibility at no cost.
          </p>

        <div className="flex flex-col gap-5 w-full items-center justify-center">
          {mobileEligibilityCards.map((card) => (
            <article
              key={card.number}
              className={`flex flex-col justify-center items-start text-left gap-[8px] p-5 w-full rounded-[10px] ${card.bg} shadow-sm border border-white overflow-hidden`}
            >
              <span className="text-[#692D94] text-[35px] font-normal font-[Quicksand] leading-none">
                {card.number}
              </span>
              <p className="text-[#692D94] text-[16px] font-medium font-[Quicksand] leading-none tracking-[-0.32px] capitalize">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
