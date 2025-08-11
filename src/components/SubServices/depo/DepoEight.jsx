import React, { useState } from 'react';

const faqData = [
  {
    question: 'Is Depo-Provera linked to brain tumors?',
    answer:
      'Yes. Studies and lawsuits have reported higher rates of hormone-sensitive tumors like meningiomas in women who used Depo-Provera long-term.',
  },
  {
    question: 'What is pseudotumor cerebri?',
    answer:
      'PTC is a neurological disorder that causes increased pressure inside the skull. It can lead to vision loss, migraines, and permanent complications.',
  },
  {
    question: 'Is there a recall?',
    answer:
      'Depo-Provera is not recalled, but it carries a black box warning for significant bone density loss.',
  },
  {
    question: 'Do I need medical records now?',
    answer:
      'No. Your legal team can help request records after your initial eligibility review.',
  },
  {
    question: 'Will this cost me anything?',
    answer:
      'There is no cost to submit your case. You only pay if you receive a settlement or award.',
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
        className="text-[32px] sm:text-[40px] font-medium text-[#4F2270] mb-6 capitalize leading-none"
      >
        Frequently Asked{' '}
        <span className="text-[#EDC14A] font-medium capitalize">
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
              <div className="px-4 pb-4 pt-1 text-[#757575] text-[18px] sm:text-[20px] font-normal leading-normal bg-[#F4F6FC]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
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
