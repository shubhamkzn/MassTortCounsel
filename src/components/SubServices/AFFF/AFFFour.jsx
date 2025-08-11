import React from "react";
import bgImg from "../../../assets/Rectangle05.png";
 
const cards = [
  {
    number: "01",
    text: <>Kidney Cancer</>,
    bg: "bg-[#FFFFFF]",
  },
  {
    number: "02",
    text: <>Testicular cancer</>,
    bg: "bg-[#FFFFFF]",
  },
  {
    number: "03",
    text: <>Liver cancer</>,
    bg: "bg-[#FFFFFF]",
  },
  {
    number: "04",
    text: <>Prostate cancer</>,
    bg: "bg-[#FFFFFF]",
  },
  {
    number: "05",
    text: <>Thyroid disease</>,
    bg: "bg-[#FFFFFF]",
  },
  {
    number: "06",
    text: <>Ulcerative colitis</>,
    bg: "bg-[#FFFFFF]",
  },
];
 
const AFFFour = () => {
  const [is1024, setIs1024] = React.useState(false);
 
  React.useEffect(() => {
    const checkWidth = () => {
      setIs1024(window.innerWidth === 1024);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);
 
  return (
    <section
      className={`w-full font-[Quicksand] bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/*  Desktop + Tablet Layout (≥768px) */}
      <div className="hidden md:block w-full">
        <div className="w-full max-w-[1440px] mx-auto px-[80px] py-[60px]">
          {/* Main Heading - Dual Color */}
          <h2 className="mb-6">
            <span className="text-[#4F2270] text-[35px] font-semibold leading-normal capitalize overflow-hidden text-ellipsis">
              Overview of the{" "}
            </span>
            <span className="text-[#EDC14A] text-[35px] font-semibold leading-normal capitalize overflow-hidden text-ellipsis">
              AFFF Lawsuit
            </span>
          </h2>
 
          {/* Description Text */}
          <p className="text-[#757575] text-[18px] font-medium leading-normal mb-8 max-w-[1200px]">
            AFFF (Aqueous Film-Forming Foam) is used to suppress high-intensity fires involving flammable liquids. While essential for firefighting operations, AFFF contains PFAS chemicals, which are known to accumulate in the human body and cause serious harm. <br />
            <br />
            Lawsuits claim that chemical manufacturers 3M, DuPont, Chemours, and others failed to warn users that PFAS in AFFF can increase cancer risk. {" "}
          </p>
 
          {/* Secondary Heading */}
          <h3 className="text-[#4F2270] text-[35px] font-semibold xl:leading-4 capitalize mb-8">
            Health conditions linked to AFFF exposure
          </h3>
          <p className="text-[#757575] text-[18px] font-medium leading-normal mb-8 max-w-[1200px]">
            Firefighters, airport personnel, military servicemembers, and others regularly exposed to AFFF may be entitled to financial compensation.
          </p>
 
        
<div className="w-full  ">
  <div className="grid grid-cols-2 gap-6">
    {[
      { number: "01", text: "Kidney cancer" },
      { number: "02", text: "Testicular cancer " },
      { number: "03", text: "Liver cancer" },
      { number: "04", text: "Prostate cancer" },
      { number: "05", text: "Thyroid disease" },
      { number: "06", text: "Ulcerative colitis" },
    ].map((card, index) => (
      <div
        key={index}
        className={`font-medium p-4 h-[100px] rounded-[10px] bg-white shadow-sm border border-white flex flex-col justify-center "
        }`}
      >
        <span className="text-[#4F2270] font-[Quicksand] text-[24px] leading-none mb-2">
          {card.number}
        </span>
        <p className="text-[#4F2270] text-[16px] font-medium leading-none tracking-[-0.32px]">
          {card.text}
        </p>
      </div>
    ))}
  </div>
</div>
 
 
        </div>
      </div>
 
      {/*  Mobile Layout (<768px) */}
      <div className="md:hidden flex flex-col w-full gap-6 px-4 py-8">
        {/* Mobile Main Heading */}
        <h2 className="text-left">
          <span className="text-[#4F2270] text-[30px] sm:text-[30px] font-semibold leading-[1.2] capitalize">
            Overview of the{" "}
          </span>
 
          <span className="text-[#EDC14A] text-[30px] sm:text-[30px] font-semibold leading-[1.2] capitalize">
            AFF Lawsuit
          </span>
        </h2>
 
        {/* Mobile Description */}
        <p className="text-[#757575] text-[16px] font-medium leading-normal text-left">
           AFFF (Aqueous Film-Forming Foam) is used to suppress high-intensity fires involving flammable liquids. While essential for firefighting operations, AFFF contains PFAS chemicals, which are known to accumulate in the human body and cause serious harm.
          <br />
          <br />
            Lawsuits claim that chemical manufacturers 3M, DuPont, Chemours, and others failed to warn users that PFAS in AFFF can increase cancer risk. {" "}
        </p>
 
        {/* Mobile Secondary Heading */}
        <h3 className="text-[#4F2270] text-[30px] font-semibold leading-normal capitalize mb-0">
          Health conditions linked to AFFF exposure:
        </h3>
       <p className="text-[#757575] text-[18px] font-medium leading-normal mb-8 max-w-[1200px]">
          Firefighters, airport personnel, military servicemembers, and others regularly exposed to AFFF may be entitled to financial compensation.
        </p>
 
        {/* Mobile Cards */}
        <div className="flex flex-col gap-4">
          {cards.map((card) => (
            <div
              key={card.number}
              className="w-full bg-white rounded-[10px] border border-white p-4 shadow-sm text-left"
            >
              <span className="text-[#4F2270] text-[20px] font-semibold leading-normal mb-2 block">
                {card.number}
              </span>
              <p className="text-[#4F2270] text-[16px] font-medium leading-normal">
                {card.text}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
 
export default AFFFour;
 
 