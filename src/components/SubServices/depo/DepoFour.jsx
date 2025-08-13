import React from 'react';
import bgImg from '../../../assets/Rectangle05.png';
import dpImg from '../../../assets/2bg 1.png';
import q2 from '../../../assets/qt1.png';
import q1 from '../../../assets/qt2.png';
 
const lawsuitCards = [
  {
    title: '01 - Meningiomas',
    description: (
      <>
        Hormone-sensitive
        <span className="text-[#4F2270]"> brain tumors</span>
      </>
    )
  },
  {
    title: '02 - Severe Bone',
    description:(
      <>
        Severe bone mineral
        <span className="text-[#4F2270]"> density loss</span>, often irreversible
      </>
    )
  },
  {
    title: '03 - Pseudotumor Cerebri (PTC)',
    description: (
      <>
        Increased
        <span className="text-[#4F2270]"> skull pressure </span> that mimics brain tumors
      </>
    )
  },
];
 
const LawsuitOverview = () => {
  const [is1024, setIs1024] = React.useState(false);
 
  React.useEffect(() => {
    const checkWidth = () => {
      setIs1024(window.innerWidth === 1024);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);
 
  return (
    <section
      className={`w-full flex flex-col items-center justify-center font-[Quicksand] bg-cover bg-center bg-no-repeat ${
        is1024 ? 'pt-3' : 'py-25 md:pt-4'
      }`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/*  Desktop + Tablet Layout (≥768px) */}
      <div
        className={`hidden md:flex flex-row w-full ${
          is1024
            ? 'max-w-[940px] gap-[72px] px-[56px] pt-[40px]'
            : 'max-w-[925px] lg:max-w-[1300px] gap-4 md:gap-16 lg:gap-6 2xl:gap-10 px-4 md:px-8 xl:px-0 pt-[80px] md:pt-[25px]'
        } items-start justify-center`}
      >
        {/* Left: Heading + Text + Image */}
        <div
          className={`flex flex-col ${
            is1024
              ? 'w-[420px]'
              : 'w-[225px] md:w-[280px] lg:w-[300px] xl:w-[648px]'
          }`}
        >
          <h2 className="text-[#4F2270] text-[16px] md:text-[25px] lg:text-[22px] xl:text-[35px] font-semibold leading-[110%] capitalize mb-2 md:mb-3 lg:mb-4 text-left">
            Overview of the
            <span className="text-[#FDBA22]"> Depo-Provera <br />Brain Tumor{' '}Lawsuit</span>
          </h2>
          <p className="text-[#757575] text-[10px] md:text-[11px] lg:text-[12px] xl:text-[18px] font-medium leading-[140%] mb-2 md:mb-3 lg:mb-4 xl:mb-6 text-left">
            Depo-Provera (medroxyprogesterone acetate) is an injectable birth
            control medication manufactured by Pfizer. Though FDA-approved,
            long-term use has been linked to serious health risks.
          </p>
          <img
            src={dpImg}
            alt="Depo-Provera illustration"
            className={`${
              is1024
                ? 'w-[320px]'
                : 'w-[195px] md:w-[260px] lg:w-[320px] xl:w-[576px]'
            } h-auto object-cover rounded-lg`}
          />
        </div>
 
        {/* Right: Heading + Text + Cards */}
        <div
          className={`flex flex-col ${
            is1024
              ? 'w-[420px] mt-[2px]'
              : 'w-[215px] md:w-[280px] lg:w-[355px] xl:w-[581px]'
          }`}
        >
          <h3 className="text-[#4F2270] text-[16px] md:text-[25px] lg:text-[22px] xl:text-[35px] font-semibold leading-[110%] capitalize mb-2 md:mb-3 lg:mb-4 text-left">
            Lawsuits allege that Pfizer failed
            to <span className="text-[#FDBA22]">properly warn</span> women about
          </h3>
          <p className="text-[#757575] text-[10px] md:text-[11px] lg:text-[12px] xl:text-[18px] font-medium leading-[140%] mb-2 md:mb-3 lg:mb-4 xl:mb-6 text-left">
            Lawsuits allege that Pfizer failed to properly warn women about
          </p>
          <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
            {lawsuitCards.map((card) => (
              <div
                key={card.title}
                className="w-full bg-white rounded-[10px] border border-white p-2 md:p-3 lg:p-4 xl:p-5 shadow-sm text-left"
              >
                <h4 className="text-[#4F2270] text-[12px] md:text-[16px] lg:text-[16px] xl:text-[20px] font-semibold leading-tight mb-1 md:mb-2 lg:mb-2 capitalize">
                  {card.title}
                </h4>
                <p className="text-[#757575] text-[9px] md:text-[10px] lg:text-[12px] xl:text-[18px] font-medium leading-[140%]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
 
      {/*  Mobile Layout (<768px) */}
      <div className="md:hidden flex flex-col w-full gap-6 px-2 py-25">
        <h2 className="text-[#4F2270] text-[24px] sm:text-[24px] md:text-[30px] font-semibold leading-[1.2] capitalize text-left md:text-left tracking-[-0.28px] whitespace-nowrap px-0 pt-10 pb-4
          min-[350px]:text-[26px]
          min-[420px]:text-[30px]
        ">
          Overview of 
          <span className="text-[#FDBA22]"> Depo-Provera<br />Brain Tumor{' '} Lawsuit</span>
        </h2>
        </div>
        <div className="md:hidden flex flex-col w-full gap-6 px-4">
        <img
          src={dpImg}
          alt="Depo-Provera illustration"
          className="w-full object-cover rounded-lg flex-shrink-0"
          style={{ aspectRatio: '358.21/193.00' }}
        />
        <p className="text-[#757575] text-[16px] font-medium leading-normal text-left">
          Depo-Provera (medroxyprogesterone acetate) is an injectable birth
          control medication manufactured by Pfizer. Though FDA-approved,
          long-term use has been linked to serious health risks.
        </p>
        <h2 className="text-[#4F2270] text-[24px] sm:text-[30px] md:text-[30px] font-semibold leading-[1.2] capitalize text-left tracking-[-0.28px]
           min-[350px]:text-[26px]
           min-[420px]:text-[30px]
        ">
          Lawsuits allege that Pfizer failed to{' '}
          <span className="text-[#FDBA22]">
            properly warn{' '}
          </span>Women about
        </h2>
        <p className="text-[#757575] text-[16px] font-medium leading-normal text-left">
        Lawsuits allege that Pfizer failed to properly warn women about
        </p>
        <div className="flex flex-col gap-4 pb-12">
          {lawsuitCards.map((card) => (
            <div
              key={card.title}
              className="w-full bg-white rounded-[10px] border border-white p-4 shadow-sm text-left"
            >
              <h4 className="text-[#4F2270] text-[20px] font-semibold leading-normal mb-2">
                {card.title}
              </h4>
              <p className="text-[#757575] text-[16px] font-medium leading-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
 
      {/* Bottom Quote Section - Hidden on Mobile */}
      <div className="hidden md:block w-full mt-12 lg:mt-16 xl:mt-20 pb-8 md:pb-0 lg:pb-0 xl:pb-0">
        <div className="relative max-w-[925px] lg:max-w-[1100px] xl:max-w-[1300px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="rounded-2xl p-8 md:pb-10 lg:p-12 xl:p-16">
        {/* Left Quote */}
            <div className="absolute -top-2 left-4 md:-top-1 md:left-6 lg:top-0 lg:left-8 xl:top-2 xl:left-10 z-10">
              <img
                src={q1}
                alt="Left quote"
                className="w-[40px] h-[32px] md:w-[48px] md:h-[38px] lg:w-[56px] lg:h-[45px] xl:w-[64px] xl:h-[51px]"
              />
            </div>
 
            {/* Right Quote */}
            <div className="absolute -top-2 right-4 md:-top-1 md:right-6 lg:top-0 lg:right-8 xl:top-2 xl:right-10 z-10">
              <img
                src={q2}
                alt="Right quote"
                className="w-[40px] h-[32px] md:w-[48px] md:h-[38px] lg:w-[56px] lg:h-[45px] xl:w-[64px] xl:h-[51px]"
              />
            </div>
 
            {/* Content */}
            <div className="text-center">
    <h3 className="text-[24px] md:text-[22px] lg:text-[24px] xl:text-[29px] font-medium text-[#4F2270] mb-3 md:mb-4 lg:mb-5 xl:mb-0 md:leading[1.2] lg:leading-[1.2] ">
      In 2004, FDA Issued A Black Box Warning On Depo-Provera For Bone Loss
    </h3>
    <p className="text-[#757575] text-[14px] md:text-[11px] lg:text-[12px] xl:text-[16px] font-medium leading-[1.5]">
      Since then, multiple legal claims have emerged linking the drug to debilitating neurological conditions.
    </p>
  </div>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default LawsuitOverview;