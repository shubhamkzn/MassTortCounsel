import React from "react";
import bgImg from "../../../assets/Rectangle05.png";
import dpImg from "../../../assets/2bg 1.png";

const cards = [
  {
    number: "01",
    text: <>Kidney and testicular cancer</>,
    bg: "bg-[#FFFFFF]",
  },
  {
    number: "02",
    text: <>Liver damage</>,
    bg: "bg-[#FFFFFF]",
  },
  {
    number: "03",
    text: <>Thyroid disease</>,
    bg: "bg-[#FFFFFF]",
  },
  {
    number: "04",
    text: <>Birth defects and reproductive harm</>,
    bg: "bg-[#FFFFFF]",
  },
  {
    number: "05",
    text: <>Immune system dysfunction</>,
    bg: "bg-[#FFFFFF]",
  },
];

const PFASFour = () => {
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
            <span className="text-[#FDBA22] text-[35px] font-semibold leading-normal capitalize overflow-hidden text-ellipsis">
              PFAS Lawsuit
            </span>
          </h2>

          {/* Description Text */}
          <p className="text-[#757575] text-[18px] font-medium leading-normal mb-8 max-w-[1200px]">
            PFAS (per- and polyfluoroalkyl substances) are synthetic chemicals
            found in industrial waste, firefighting foam, and consumer products
            like non-stick cookware and food packaging. <br />
            <br />
            Known as “forever chemicals,” PFAS do not break down in the
            environment or human body. Widespread water contamination has
            affected communities near military bases, airports, chemical plants,
            and manufacturing sites.{" "}
          </p>

          {/* Secondary Heading */}
          <h3 className="text-[#4F2270] text-[35px] font-semibold leading-normal capitalize mb-8">
            Health risks include:
          </h3>
          <p className="text-[#757575] text-[18px] font-medium leading-normal mb-8 max-w-[1200px]">
            Lawsuits target chemical manufacturers such as 3M, DuPont, and
            others for knowingly polluting water supplies and failing to warn
            the public.
          </p>

          {/* Cards Container */}
          {/* <div className="grid grid-cols-3 gap-8">
            {cards.map((card) => (
              <article
                key={card.number}
                className={`p-4 h-[100px] rounded-[10px] ${card.bg} shadow-sm border border-white overflow-hidden flex flex-col justify-center`}
              >
                <span className="text-[#4F2270] font-[Quicksand] not-italic font-normal leading-none text-[24px] mb-2">
                  {card.number}
                </span>
                <p className="text-[#4F2270] text-[16px] font-medium leading-none tracking-[-0.32px] text-left">
                  {card.text}
                </p>
              </article>
            ))}
          </div> */}

<div className="w-full  ">
  <div className="grid grid-cols-4 gap-6">
    {[
      { number: "01", text: "Kidney and testicular cancer" },
      { number: "02", text: "Liver damage" },
      { number: "03", text: "Thyroid disease" },
      { number: "04", text: "Birth defects and reproductive harm" },
      { number: "05", text: "Immune system dysfunction", spanFull: true },
    ].map((card, index) => (
      <div
        key={index}
        className={`p-4 h-[100px] rounded-[10px] bg-white shadow-sm border border-white flex flex-col justify-center ${
          card.spanFull ? "col-span-4" : "col-span-2"
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
          <span className="text-[#4F2270] text-[24px] sm:text-[28px] font-semibold leading-[1.2] capitalize">
            Overview of the{" "}
          </span>

          <span className="text-[#FDBA22] text-[24px] sm:text-[28px] font-semibold leading-[1.2] capitalize">
            PFAS Lawsuit
          </span>
        </h2>

        {/* Mobile Description */}
        <p className="text-[#757575] text-[16px] font-medium leading-normal text-left">
           PFAS (per- and polyfluoroalkyl substances) are synthetic chemicals
            found in industrial waste, firefighting foam, and consumer products
            like non-stick cookware and food packaging. 
          <br />
          <br />
            Known as “forever chemicals,” PFAS do not break down in the
            environment or human body. Widespread water contamination has
            affected communities near military bases, airports, chemical plants,
            and manufacturing sites.{" "}
        </p>

        {/* Mobile Secondary Heading */}
        <h3 className="text-[#4F2270] text-[35px] font-semibold leading-normal capitalize mb-8">
          Health risks include:
        </h3>
        

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
        <p className="text-[#757575] text-[18px] font-medium leading-normal mb-8 max-w-[1200px]">
          Lawsuits target chemical manufacturers such as 3M, DuPont, and others
          for knowingly polluting water supplies and failing to warn the public.
        </p>
      </div>
    </section>
  );
};

export default PFASFour;
