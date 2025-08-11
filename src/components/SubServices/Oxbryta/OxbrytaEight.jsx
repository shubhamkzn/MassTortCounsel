import React, { useState } from 'react';
 import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: 'What is Oxbryta used for?',
    answer:
      'Oxbryta is prescribed to treat sickle cell disease by improving hemoglobin levels and reducing red blood cell destruction.',
  },
  {
    question: 'What risks have been reported?',
    answer:
      'Liver toxicity, stroke, and multi-organ complications have been reported in patients taking Oxbryta — especially in younger individuals.',
  },
  {
    question: 'Is there an FDA recall or warning?',
    answer:
      'As of now, Oxbryta remains approved, but adverse event reports have triggered legal action and monitoring.',
  },
  {
    question: 'What documentation do I need?',
    answer:
      'Medical records showing your diagnosis, prescription history, and adverse effects are helpful but not required to start a case review.',
  },
  {
    question: 'Do I need to take legal action now?',
    answer:
      'Yes. There are time limits based on your state. Submit your case for review as soon as possible.',
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
              <span className="text-[#4F2270] text-[20px] sm:text-[24px] font-semibold leading-normal">
                {item.question}
              </span>
             
<span className="text-[18px] font-light select-none">
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 
      ${activeIndex === idx ? "rotate-180 text-[#EDC14A]" : "text-[#4F2270]"}`}
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
