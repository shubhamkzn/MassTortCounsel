import React from 'react';
import bgImg from '../../../assets/Rectangle05.png';
import dpImg from '../../../assets/2bg 1.png';

   
const cards = [
  {
    number: "01",
    text: (
      <>
       <span className='text-[#757575]'>Talc products</span> used near the genitals  <span className='text-[#757575]'>can travel to the ovaries </span>
      </>
    ),
    bg: "bg-[#FFFFFF]",
  },
  {
    number: "02",
    text: (
      <>
         <span className='text-[#757575]'>Talc may cause </span> chronic inflammation, <span className='text-[#757575]'> leading to cancer over time </span>
      </>
    ),
    bg: "bg-[#FFFFFF]",
  },
  {
    number: "03",
    text: (
      <>
         <span className='text-[#757575]'>Internal company documents allegedly show that </span> manufacturers knew of the risks  <span className='text-[#757575]'>and</span> failed to warn consumers 
      </>
    ),
    bg: "bg-[#FFFFFF]",
  },
];
 
const ParaquatLawsuitOverview = () => {
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
      className={`w-full font-[Quicksand] bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/*  Desktop + Tablet Layout (≥768px) */}
      <div className="hidden md:block w-full">
        <div className="w-full max-w-[1440px] mx-auto px-[80px] py-[60px]">
          {/* Main Heading - Dual Color */}
          <h2 className="mb-6">
            <span className="text-[#4F2270] text-[35px] font-semibold leading-normal capitalize overflow-hidden text-ellipsis">
              Overview of the{' '}
            </span>
            <span className="text-[#FDBA22] text-[35px] font-semibold leading-normal capitalize overflow-hidden text-ellipsis">
               Talcum Powder Lawsuit 
            </span>
          </h2>
 
          {/* Description Text */}
          <p className="text-[#757575] text-[18px] font-medium leading-normal mb-8 max-w-[1200px]">
          Thousands of women have filed lawsuits against <span className="text-[#FDBA22]">Johnson & Johnson </span> and other companies, claiming that long-term use of <span className="text-[#FDBA22]">talc-based powders </span>in the genital area caused them to develop <span className="text-[#FDBA22]">ovarian cancer.</span> <br></br><br></br>

Many juries have awarded multi-million dollar verdicts to affected women, while others are pursuing claims through mass tort litigation. 
          </p>
 
          {/* Secondary Heading */}
          <h3 className="text-[#4F2270] text-[35px] font-semibold leading-normal capitalize mb-8">
            The lawsuits are based on evidence that: 
          </h3>
 
          {/* Cards Container */}
          <div className="grid grid-cols-2 gap-8">
  {cards.map((card, index) => (
    <article
      key={card.number}
      className={`p-4 h-[100px] rounded-[10px] ${card.bg} shadow-sm border border-white overflow-hidden flex flex-col justify-center ${
        index === 2 ? 'col-span-2' : ''
      }`}
    >
      <span className="text-[#4F2270] font-[Quicksand] not-italic font-normal leading-none text-[24px] mb-2">
        {card.number}
      </span>
      <p className="text-[#4F2270] text-[16px] font-medium leading-none tracking-[-0.32px] text-left">
        {card.text}
      </p>
    </article>
  ))}
</div>

        </div>
      </div>
 
      {/*  Mobile Layout (<768px) */}
      <div className="md:hidden flex flex-col w-full gap-6 px-4 py-8">
        {/* Mobile Main Heading */}
        <h2 className="text-left">
          <span className="text-[#4F2270] text-[24px] sm:text-[28px] font-semibold leading-[1.2] capitalize">
            Overview of the{' '}
          </span>
         
          <span className="text-[#FDBA22] text-[24px] sm:text-[28px] font-semibold leading-[1.2] capitalize">
            Talcum Powder Lawsuit
          </span>
        </h2>
 
        {/* Mobile Description */}
        <p className="text-[#757575] text-[16px] font-medium leading-normal text-left">
           Thousands of women have filed lawsuits against <span className="text-[#FDBA22]">Johnson & Johnson </span> and other companies, claiming that long-term use of <span className="text-[#FDBA22]">talc-based powders </span>in the genital area caused them to develop <span className="text-[#FDBA22]">ovarian cancer.</span> <br></br><br></br>

Many juries have awarded multi-million dollar verdicts to affected women, while others are pursuing claims through mass tort litigation. 
          </p>
 
        {/* Mobile Secondary Heading */}
        <h3 className="text-[#4F2270] text-[24px] sm:text-[28px] font-semibold leading-[1.2] capitalize text-left">
          The lawsuits are based on evidence that: 
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
      </div>
    </section>
  );
};
 
export default ParaquatLawsuitOverview;
 