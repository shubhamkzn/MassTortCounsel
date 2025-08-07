import React, { useState } from 'react';
 import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: 'Is talcum powder still on the market?',
    answer:
      'Johnson & Johnson discontinued talc-based Baby Powder in North America, but it remains available in other regions. Cornstarch alternatives are now more common.',
  },
  {
    question: 'How long must I have used talcum powder to qualify?',
    answer:
      'Most cases involve regular use over several years, especially during reproductive age.',
  },
  {
    question: 'Do I need proof of purchase?',
    answer:
      'Not always. Personal testimony, diagnosis timing, and usage history may support your case.',
  },
  {
    question: 'Is this a class action?',
    answer:
      'No. These are individual mass tort cases, meaning compensation is based on your specific harm.',
  },
  {
    question: 'What if a family member passed away from ovarian cancer?',
    answer:
      'You may still be able to file on behalf of a deceased loved one under wrongful death rules.',
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
        className="text-[32px] sm:text-[40px] font-semibold text-[#692D94] mb-6 capitalize leading-none"
      >
        Frequently Asked{' '}
        <span className="text-[#EDC14A] font-semibold capitalize">
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
              <span className="text-[#692D94] text-[20px] sm:text-[24px] font-semibold leading-normal">
                {item.question}
              </span>
            <span className="text-[18px] font-light select-none">
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 
      ${activeIndex === idx ? "rotate-180 text-[#EDC14A]" : "text-[#692D94]"}`}
                />
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
