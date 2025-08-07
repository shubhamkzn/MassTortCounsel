import React from 'react';
import bgImg from '../../../assets/Rectangle05.png';
import dpImg from '../../../assets/2bg 1.png';

   
const cards = [
  {
    number: "01",
    text: (
      <>
        Farmers, field workers,<span className="text-[#757575]"> and </span>pesticide applicators
      </>
    ),
    bg: "bg-[#FFFFFF]",
  },
  {
    number: "02",
    text: (
      <>
        Communities<span className="text-[#757575]"> near treated fields</span>
      </>
    ),
    bg: "bg-[#FFFFFF]",
  },
  {
    number: "03",
    text: (
      <>
        <span className="text-[#757575]">Individuals exposed through </span>direct spraying <span className="text-[#757575]"> or </span> environmental drift  
      </>
    ),
    bg: "bg-[#FFFFFF]",
  },
];
 
const PraquatFour = () => {
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
            <span className="text-[#692D94] text-[35px] font-semibold leading-normal capitalize overflow-hidden text-ellipsis">
              Overview of the{' '}
            </span>
            <span className="text-[#EDC14A] text-[35px] font-semibold leading-normal capitalize overflow-hidden text-ellipsis">
              Paraquat Lawsuit
            </span>
          </h2>
 
          {/* Description Text */}
          <p className="text-[#757575] text-[18px] font-medium leading-normal mb-8 max-w-[1200px]">
            Paraquat is a highly toxic herbicide used across U.S. farmlands for weed and grass control. Scientific studies and court filings have linked Paraquat exposure to an increased risk of Parkinson's disease, a chronic and progressive neurological condition.
            <br /><br />
            Lawsuits claim that manufacturers, including Syngenta and Chevron, failed to properly warn users of these serious health risks - despite knowing the potential dangers for decades.
          </p>
 
          {/* Secondary Heading */}
          <h3 className="text-[#692D94] text-[35px] font-semibold leading-normal capitalize mb-8">
            This lawsuit targets:
          </h3>
 
          {/* Cards Container */}
          <div className="grid grid-cols-3 gap-8">
            {cards.map((card) => (
              <article
                key={card.number}
                className={`p-4 h-[100px] md:h-[150px] rounded-[10px] ${card.bg} shadow-sm border border-white overflow-hidden flex flex-col justify-center`}
              >
                <span className="text-[#692D94] font-[Quicksand] not-italic font-normal leading-none text-[24px] mb-2">
                  {card.number}
                </span>
                <p className="text-[#692D94] text-[16px] font-medium leading-none tracking-[-0.32px] text-left">
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
          <span className="text-[#692D94] text-[24px] sm:text-[28px] font-semibold leading-[1.2] capitalize">
            Overview of the{' '}
          </span>
         
          <span className="text-[#EDC14A] text-[24px] sm:text-[28px] font-semibold leading-[1.2] capitalize">
            Paraquat Lawsuit
          </span>
        </h2>
 
        {/* Mobile Description */}
        <p className="text-[#757575] text-[16px] font-medium leading-normal text-left">
          Paraquat is a highly toxic herbicide used across U.S. farmlands for weed and grass control. Scientific studies and court filings have linked Paraquat exposure to an increased risk of Parkinson's disease, a chronic and progressive neurological condition.
          <br /><br />
          Lawsuits claim that manufacturers, including Syngenta and Chevron, failed to properly warn users of these serious health risks - despite knowing the potential dangers for decades.
        </p>
 
        {/* Mobile Secondary Heading */}
        <h3 className="text-[#692D94] text-[24px] sm:text-[28px] font-semibold leading-[1.2] capitalize text-left">
          This lawsuit targets:
        </h3>
 
        {/* Mobile Cards */}
        <div className="flex flex-col gap-4">
          {cards.map((card) => (
            <div
              key={card.number}
              className="w-full bg-white rounded-[10px] border border-white p-4 shadow-sm text-left"
            >
              <span className="text-[#692D94] text-[20px] font-semibold leading-normal mb-2 block">
                {card.number}
              </span>
              <p className="text-[#692D94] text-[16px] font-medium leading-normal">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default PraquatFour;
 