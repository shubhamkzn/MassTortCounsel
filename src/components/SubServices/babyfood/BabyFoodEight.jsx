import React, { useState } from 'react';
 import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: 'Which baby food brands are involved?',
    answer:
      'Investigations have listed brands like Gerber, Beech-Nut, Earth’s Best, HappyBABY, and more.',
  },
  {
    question: 'Is there a scientific link to autism?',
    answer:
      'Heavy metals such as arsenic and lead are known to harm brain development. Studies and legal reviews suggest a link between early exposure and autism diagnoses.',
  },
  {
    question: 'Do I need to prove which brand my child consumed?',
    answer:
      'Proof of purchase helps but is not always required. Intake teams will help assess this.',
  },
  {
    question: 'What age range qualifies?',
    answer:
      'Typically, children diagnosed before age 12, with early exposure to packaged baby foods, may qualify.',
  },
  {
    question: 'Is this a class action?',
    answer:
      'Most cases are filed as individual mass tort claims. You may be eligible for compensation specific to your child’s harm.',
  },
];



const BabyFoodEight = () => {
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

export default BabyFoodEight;
