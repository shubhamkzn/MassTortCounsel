import React, { useState } from 'react';

const faqData = [
  {
    question: 'Is glyphosate officially classified as cancer-causing?',
    answer:
      'The World Health Organization’s International Agency for Research on Cancer classified glyphosate as “probably carcinogenic to humans” in 2015.',
  },
  {
    question: 'Has Roundup been recalled?',
    answer:
      'No. Roundup remains on the market, but legal action is ongoing.',
  },
  {
    question: 'Do I need receipts or proof of purchase?',
    answer:
      'Not necessarily. Work history, treatment records, and usage history can help establish a claim.',
  },
  {
    question: 'How soon should I file?',
    answer:
      'Each state has its own time limit to file. It’s best to act quickly.',
  },
  {
    question: 'Will I have to go to court?',
    answer:
      'Most cases are resolved through settlement. Your legal team will guide the process.',
  },
];



const RoundUpEight = () => {
  const [activeIndex, setActiveIndex] = useState(null); // No dropdown open by default

  const toggle = (idx) => {
    setActiveIndex(idx === activeIndex ? null : idx);
  };

  return (
    <section className="py-12 px-2 sm:px-4 md:px-8 lg:px-16 w-full max-w-none" style={{ fontFamily: 'Quicksand, sans-serif' }}>
      {/* Title */}
      <h2
        className="text-[32px] sm:text-[40px] font-medium text-[#4F2270] mb-6 capitalize leading-none"
      >
        Frequently Asked{' '}
        <span className="text-[#FDBA22] font-medium capitalize">
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
              <span className="text-[#4F2270] text-[20px] sm:text-[24px] font-medium leading-normal">
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

export default RoundUpEight;
