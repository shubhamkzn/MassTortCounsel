import React, { useState } from 'react';

const faqData = [
  {
    question: 'What is AFFF and where was it used?',
    answer:
      ' AFFF is a firefighting foam used to extinguish fuel-based fires, commonly used by military, airport, and industrial firefighters.',
  },
  {
    question: 'How is AFFF harmful?',
    answer:
      'It contains PFAS, a class of toxic “forever chemicals” that accumulate in the body and are linked to cancer and other illnesses.',
  },
  {
    question: 'Has AFFF been banned?',
    answer:
      'Some states and military branches have restricted its use. Federal regulations and lawsuits are ongoing.',
  },
  {
    question: 'Can retired firefighters still file a claim?',
    answer:
      'Yes. Even if you’re no longer active, you may still be eligible if you meet the exposure and diagnosis criteria.',
  },
  {
    question: 'Is this a class action?',
    answer:
      ' Most cases are individual mass tort claims. Compensation is based on personal exposure, diagnosis, and loss.',
  },
];


const HomeEight = () => {
  const [activeIndex, setActiveIndex] = useState(null); // No dropdown open by default

  const toggle = (idx) => {
    setActiveIndex(idx === activeIndex ? null : idx);
  };

  return (
    <section className="py-12 px-2 sm:px-4 md:px-8 lg:px-16 w-full max-w-none" style={{ fontFamily: 'Quicksand, sans-serif' }}>
      {/* Title */}
      <h2
        className="text-[32px] sm:text-[40px] font-semibold text-[#4F2270] mb-6 capitalize leading-none"
      >
        Frequently Asked{' '}
        <span className="text-[#FDBA22] font-semibold capitalize">
          Questions
        </span>
      </h2>

      {/* Accordion */}
      <div className="space-y-4">
        {faqData.map((item, idx) => (
          <div key={idx} className="border border-gray-200 rounded overflow-hidden">
            <button
              onClick={() => toggle(idx)}
              className={`w-full text-left px-4 py-3 flex justify-between items-center ${
                activeIndex === idx ? 'bg-[#F4F6FC]' : 'bg-white'
              } transition`}
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              <span className="text-[#4F2270] text-[20px] sm:text-[24px] font-semibold leading-normal">
                {item.question}
              </span>
              <span className="text-[18px] font-light select-none">
                {activeIndex === idx ? '▴' : '▾'}
              </span>
            </button>
            {activeIndex === idx && (
              <div className="px-4 pb-4 pt-1 text-[#757575] text-[18px] sm:text-[20px] font-medium leading-normal bg-[#F4F6FC]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeEight;
