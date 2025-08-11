import React from 'react';
import bag1 from '../../assets/Bag1.png';
import bag2 from '../../assets/Bag2.png';
import bag3 from '../../assets/Bag3.png';

const features = [
  {
    icon: bag1,
    title: 'Specialized Legal Support',
    description: 'Get your best Attorneys who focus on drug injury lawsuits.',
  },
  {
    icon: bag2,
    title: 'No Upfront Costs',
    description:
      "You don’t pay unless your case results in compensation. Case reviews are always free.",
  },
  {
    icon: bag3,
    title: 'Confidential Case Reviews',
    description:
      'Your information is protected and never shared without your permission.',
  },
];

const HomeFour = () => {
  return (
    <section
      className="bg-[#4F2270] text-white py-10 px-4 sm:px-6 md:px-12"
      style={{ fontFamily: 'Quicksand, sans-serif' }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Title */}
        <div className="w-full lg:max-w-[280px] xl:max-w-[320px] flex justify-center lg:justify-start text-center lg:text-left">
          <h2 className="text-[26px] sm:text-[34px] lg:text-[36px] xl:text-[40px] leading-[38px] sm:leading-[46px] lg:leading-[54px] font-semibold text-white capitalize">
            Why You <span className="text-[#FFC928]">Can</span> <br />
            <span className="text-[#FFC928]">Always</span> Trust Us
          </h2>
        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="rounded-[10px] border border-[#EDC14A] p-5 sm:p-6 bg-white/5 text-center transition hover:shadow-md"
            >
              <div className="flex justify-center mb-3">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFour;
