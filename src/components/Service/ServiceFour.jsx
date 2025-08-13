import React, { useState } from 'react';
 import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: 'How do I know if I qualify?',
    answer:
      'Complete the form. A legal team will assess your situation based on your exposure and health condition.',
  },
  {
    question: 'Do I have to pay anything now?',
    answer:
      'No. You only pay if your case results in compensation.',
  },
  {
    question: 'Will someone contact me?',
    answer:
      'Yes. If you qualify, a legal representative will follow up with a confidential consultation.',
  },
  {
    question: 'Can I file on behalf of a loved one?',
    answer:
      'Yes. Family members can often file for wrongful death or disability claims.',
  },
];


const ServiceFour = () => {
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
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 
      ${activeIndex === idx ? "rotate-180 text-[#FDBA22]" : "text-[#4F2270]"}`}
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

export default ServiceFour;
