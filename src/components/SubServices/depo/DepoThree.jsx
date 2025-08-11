import React from 'react';
import c1 from '../../../assets/c1.png';
import c2 from '../../../assets/c2.png';
import c3 from '../../../assets/c3.png';
import bgImg from '../../../assets/Rectangle04.png';


const trustCards = [
  {
    icon: c1,
    title: 'Specialized Legal Support',
    description: 'Get experienced attorneys in drug injury, hormone-related lawsuits like Depo-Provera.'
  },
  {
    icon: c2,
    title: 'No Upfront Costs',
    description: 'You only pay if your case leads to a settlement or legal recovery. '
  },
  {
    icon: c3,
    title: 'Private and Confidential',
    description: 'Your information is 100% secure and never shared without your consent. '
  }
];

const WhyTrustUs = () => (
  <section
    className="bg-cover bg-center bg-no-repeat font-[Quicksand] w-full py-16"
    style={{ backgroundImage: `url(${bgImg})` }}
    aria-labelledby="why-trust-us-title"
  >

    {/* PC + large tablet */}
    <div className="hidden lg:flex max-w-[1200px] mx-auto flex-row items-center justify-between gap-4 px-4 lg:gap-6 xl:gap-8">
      {/* Heading */}
      <div className="w-[300px] lg:w-[328px] min-w-[240px] lg:min-w-[260px] h-[100px] lg:h-[120px] flex items-center">
        <h2
          id="why-trust-us-title"
          className="text-[26px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[48px] xl:leading-[52px] font-semibold text-[#4F2270] capitalize"
        >
          Why You <span className="text-[#EDC14A] font-bold">Can</span><br />
          <span className="text-[#EDC14A] font-bold">Always</span> Trust Us
        </h2>
      </div>

      {/* Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-20 flex-1">
        {trustCards.map((card) => (
          <article
            key={card.title}
            className="flex flex-col items-center w-[160px] md:w-[180px] lg:w-[200px] xl:w-[230px] 2xl:w-[270px] bg-[#F3F4F9] rounded-[10px] py-4 px-3 gap-2 shadow-md"
          >
            <img
              src={card.icon}
              alt="icon"
              className="w-[32px] h-[32px] md:w-[50px] md:h-[50px] lg:w-[50px] lg:h-[50px] xl:w-[48px] xl:h-[51x] 2xl:w-[50px] 2xl:h-[50px]"
            />
            <h3 className="w-[165px] text-center text-[#4F2270] text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-semibold">
              {card.title}
            </h3>
            <p className="text-center text-[#757575] text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] font-medium opacity-80">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </div>

    {/* Mobile Layout */}
    <div className="flex flex-col items-center gap-6 px-4 md:hidden">
      <h2
        className="text-[34px] leading-[40px] font-semibold text-[#4F2270] text-center"
      >
        Why You <span className="text-[#EDC14A] font-bold">Can</span> <br />
        <span className="text-[#EDC14A] font-bold">Always</span> Trust Us
      </h2>

      <div className="flex flex-col gap-6 w-full">
        {trustCards.map((card) => (
          <article
            key={card.title}
            className="flex flex-col items-center bg-[#F3F4F9] rounded-[10px] py-8 px-4 gap-2 shadow-md"
          >
            <img
              src={card.icon}
              alt="icon"
              className="w-[50px] h-[50px]"
            />
            <h3 className="text-center text-[#4F2270] text-[18px] font-semibold">
              {card.title}
            </h3>
            <p className="text-center text-[#757575] text-[13px] font-medium opacity-80">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </div>

    {/* Strictly for 768px Tablet */}
    <div className="hidden md:flex lg:hidden flex-col max-w-[768px] mx-auto gap-6 px-4 mt-8">
      {/* Heading on top left */}
      <h2
        className="text-left md:text-center text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] font-semibold text-[#4F2270] relative"
        style={{ transform: 'translateY(-50px)' }}
      >
        Why You <span className="text-[#EDC14A] font-bold">Can</span><br />
        <span className="text-[#EDC14A] font-bold">Always</span> Trust Us
      </h2>

      {/* 2x2 Grid Cards, vertical style */}
      <div className="grid grid-cols-2 gap-6">
        {trustCards.map((card, index) => (
          <article
            key={card.title}
            className="flex flex-col items-center justify-center bg-[#F3F4F9] rounded-[10px] py-6 px-4 gap-3 shadow-md h-[220px] min-w-[150px] relative top-[-25px]"
          >
            <img src={card.icon} alt="icon" className="w-[36px] h-[36px]" />
            <h3 className="text-center text-[#4F2270] text-[16px] font-semibold">
              {card.title}
            </h3>
            <p className="text-center text-[#757575] text-[13px] font-medium opacity-80">
              {card.description}
            </p>
          </article>
        ))}
        {/* Empty cell to make it 2x2 visually */}
        <div></div>
      </div>
    </div>

  </section>
);

export default WhyTrustUs;
