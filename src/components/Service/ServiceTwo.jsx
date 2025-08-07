import React from 'react';
import bag1 from '../../assets/Bag1Blue.png';
import bag2 from '../../assets/Bag2Blue.png';
import bag3 from '../../assets/Bag3Blue.png';

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

const ServiceTwo = () => {
  return (
    <>
      {/* ===== DESKTOP SECTION ===== */}
      <section
        className="hidden md:block bg-[#692D94] text-white py-12 px-4 sm:px-8 md:px-16"
        style={{ fontFamily: 'Quicksand, sans-serif' }}
      >
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Title */}
          <div className="w-full lg:w-[300px] flex justify-center lg:justify-start">
            <h2 className="text-center text-[32px] sm:text-[36px] font-quicksand font-semibold text-white leading-[48px] sm:leading-[60px] capitalize">
              Why You <span className="text-[#FFC928] font-quicksand">Can</span> <br />
              <span className="text-[#FFC928] font-quicksand">Always</span> Trust Us
            </h2>
          </div>

          {/* Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="rounded-[10px] border p-6 bg-white text-center transition hover:shadow-md"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={item.icon}
                    alt="Feature Icon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-lg font-quicksand font-semibold mb-2 text-[#692D94]">
                  {item.title}
                </h3>
                <p className="text-sm font-quicksand text-[#757575] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MOBILE SECTION ===== */}
      <section
        className="block md:hidden bg-[#692D94] text-white py-12 px-4"
        style={{ fontFamily: 'Quicksand, sans-serif' }}
      >
        <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-8">
          {/* Title */}
          <div className="w-full flex justify-center">
            <h2 className="text-center text-[32px] font-quicksand font-semibold text-white leading-[48px] capitalize">
              Why You <span className="text-[#FFC928] font-quicksand">Can</span> <br />
              <span className="text-[#FFC928] font-quicksand">Always</span> Trust Us
            </h2>
          </div>

          {/* Cards */}
          <div className="w-full flex flex-col gap-6">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="rounded-[10px] border p-6 bg-white text-center transition hover:shadow-md"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={item.icon}
                    alt="Feature Icon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-lg font-quicksand font-semibold mb-2 text-[#692D94]">
                  {item.title}
                </h3>
                <p className="text-sm font-quicksand text-[#757575] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceTwo;
