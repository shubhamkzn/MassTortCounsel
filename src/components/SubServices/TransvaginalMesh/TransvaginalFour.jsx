import React from "react";
import bgImg from "../../../assets/Rectangle05.png";
import dpImg from "../../../assets/2bg 1.png";

const cards = [
 {
        number: "01",
        text: (
          <>
            <span className="text-[#EDC14A]">Mesh erosion</span>{" "}
            through vaginal walls
          </>
        ),
      },
      {
        number: "02",
        text: (
          <>
            <span className="text-[#EDC14A]">Internal bleeding</span> and
            infections
          </>
        ),
      },
      {
        number: "03",
        text: (
          <>
            <span className="text-[#EDC14A]">Organ</span> perforation
          </>
        ),
      },
      {
        number: "04",
        text: (
          <>
            <span className="text-[#EDC14A]">Pain during sex</span> or daily
            movement
          </>
        ),
      },
      {
        number: "05",
        text: (
          <>
            Multiple surgeries for{" "}
            <span className="text-[#EDC14A]">mesh removal or replacement</span>
          </>
        ),
        spanFull: true,
      },
];

const TransvaginalFour = () => {
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
              Transvaginal Mesh Lawsuit
            </span>
          </h2>

          {/* Description Text */}
          <p className="text-[#757575] text-[18px] font-medium leading-normal mb-8 max-w-[1200px]">
           Transvaginal mesh was used to treat pelvic organ prolapse (POP) and stress urinary incontinence (SUI). It was marketed as a minimally invasive solution - but thousands of women have experienced devastating complications after implantation.{" "}
          </p>

          {/* Secondary Heading */}
          <h3 className="text-[#4F2270] text-[35px] font-semibold leading-normal capitalize mb-8">
           manufacturers failed to warn doctors and patients about severe risks 

          </h3>
          <p className="text-[#757575] text-[18px] font-medium leading-normal mb-8 max-w-[1200px]">
                    Several manufacturers have settled lawsuits or recalled products, yet thousands of affected women are still eligible to file claims. 

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
<div className="w-full">
  <div className="grid grid-cols-4 gap-6">
    {[
      {
        number: "01",
        text: (
          <>
            <span className="text-[#EDC14A]">Mesh erosion</span> through vaginal walls
          </>
        ),
      },
      {
        number: "02",
        text: (
          <>
            <span className="text-[#EDC14A]">Internal bleeding</span> and infections
          </>
        ),
      },
      {
        number: "03",
        text: (
          <>
            <span className="text-[#EDC14A]">Organ</span> perforation
          </>
        ),
      },
      {
        number: "04",
        text: (
          <>
            <span className="text-[#EDC14A]">Pain during sex</span> or daily movement
          </>
        ),
      },
      {
        number: "05",
        text: (
          <>
            Multiple surgeries for{" "}
            <span className="text-[#EDC14A]">mesh removal or replacement</span>
          </>
        ),
        spanFull: true,
      },
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

          <span className="text-[#EDC14A] text-[24px] sm:text-[28px] font-semibold leading-[1.2] capitalize">
            Transvaginal Mesh Lawsuit
          </span>
        </h2>

        {/* Mobile Description */}
        <p className="text-[#757575] text-[16px] font-medium leading-normal text-left">
                    Transvaginal mesh was used to treat pelvic organ prolapse (POP) and stress urinary incontinence (SUI). It was marketed as a minimally invasive solution - but thousands of women have experienced devastating complications after implantation.{" "}

        </p>

        {/* Mobile Secondary Heading */}
        <h3 className="text-[#4F2270] text-[35px] font-semibold leading-normal capitalize mb-8">
manufacturers failed to warn doctors and patients about severe risks 
       </h3>
         <p className="text-[#757575] text-[18px] font-medium leading-normal mb-8 max-w-[1200px]">
          Several manufacturers have settled lawsuits or recalled products, yet thousands of affected women are still eligible to file claims. 
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

export default TransvaginalFour;
