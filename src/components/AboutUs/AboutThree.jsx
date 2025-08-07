import React from "react";

const cards = [
  {
    number: <span className="text-[#EDC14A]">01</span>,
    text: (
      <>
        Educate the public
        <span className="text-[#757575]"> about ongoing lawsuits and legal rights</span>
      </>
    ),
    bg: "bg-[#FFFFFF]",
  },
  {
    number: "02",
    text: (
      <>
        <span className="text-[#757575]">Provide </span>
        free, no-obligation
        <span className="text-[#757575]"> case evaluations</span>
      </>
    ),
    bg: "bg-[#FFFFFF]",
  },
  {
    number: <span className="text-[#EDC14A]">03</span>,
    text: (
      <>
        Connect qualified individuals
        <span className="text-[#757575]"> with experienced attorneys</span>
      </>
    ),
    bg: "bg-[#FFFFFF]",
  },
  {
    number: "04",
    text: (
      <>
        <span className="text-[#757575]">Offer a </span>
        safe, private process
        <span className="text-[#757575]"> to start your legal journey</span>
      </>
    ),
    bg: "bg-[#FFFFFF]",
  },
];

const AboutThree = () => {
  return (
    <section className="w-full font-[Quicksand] bg-cover bg-center bg-no-repeat">
      {/* Desktop + Tablet Layout (≥768px) */}
      <div className="hidden md:block w-full bg-[#692D94]">
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-20 py-12 lg:py-20">
          <h2 className="mb-10">
            <span className="text-white text-[32px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px] font-semibold leading-snug capitalize">
              What{" "}
            </span>
            <span className="text-[#EDC14A] text-[32px] lg:text-[38px] xl:text-[42px] 2xl:text-[46px] font-semibold leading-snug capitalize">
              We Do
            </span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {cards.map((card) => (
              <article
                key={card.number}
                className={`p-4 lg:p-6 xl:p-7 2xl:p-8 h-[110px] lg:h-[130px] rounded-[10px] ${card.bg} shadow-sm border border-white overflow-hidden flex flex-col justify-center`}
              >
                <span className="text-[#692D94] font-semibold text-[22px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] mb-2">
                  {card.number}
                </span>
                <p className="text-[#692D94] text-[11px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] font-medium leading-tight">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout (<768px) */}
      <div className="md:hidden w-full bg-[#692D94] px-4 py-10">
        <h2 className="text-left text-[28px] sm:text-[30px] font-semibold leading-[1.2] capitalize mb-6">
          <span className="text-white">What </span>
          <span className="text-[#EDC14A]">We Do</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card) => (
            <div
              key={card.number}
              className="w-full bg-white rounded-[12px] border border-white p-4 shadow-sm text-left"
            >
              <span className="text-[#692D94] text-[22px] font-semibold mb-2 block">
                {card.number}
              </span>
              <p className="text-[#692D94] text-[14px] font-medium">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutThree;
