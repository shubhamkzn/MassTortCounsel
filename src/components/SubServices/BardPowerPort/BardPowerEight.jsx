import React, { useState } from 'react';
 import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: 'What is wrong with the Bard PowerPort?',
    answer:
      'The catheter has been reported to crack or fracture inside the body, which may lead to infection or serious complications.',
  },
  {
    question: 'How do I know if I had a Bard PowerPort?',
    answer:
      'Your medical records can confirm the manufacturer and model of your implanted port. Your legal team can help access these if needed.',
  },
  {
    question: 'Is there a recall?',
    answer:
      'As of now, the Bard PowerPort has not been formally recalled, but litigation is ongoing due to device failure reports.',
  },
  {
    question: 'What if the device was removed already?',
    answer:
      'You may still qualify if you suffered complications while the device was implanted.',
  },
  {
    question: 'How long do I have to file?',
    answer:
      'Legal deadlines apply and vary by state. Submit your case review as soon as possible to preserve your rights.',
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
