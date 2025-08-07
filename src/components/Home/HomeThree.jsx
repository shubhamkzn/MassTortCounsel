import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import depoImg from "../../assets/newServiceImg/DepoDesktop.png";
import paraquatImg from "../../assets/newServiceImg/para_img.png";
import roundupImg from "../../assets/newServiceImg/RoundupDesktop.png";
import babyFoodImg from "../../assets/newServiceImg/ToxicbabyDesktop.png";


const lawsuits = [
  { title: 'Depo-Provera Lawsuit', description: 'Linked to brain tumors and bone loss in long-term users', image: depoImg, link: '/DepoMain' },
  { title: 'Paraquat Lawsuit', description: 'Parkinsons disease caused by toxic herbicide exposure', image: paraquatImg, link: '/ParaquatMain' },
  { title: 'Roundup Lawsuit', description: 'Cancer linked to glyphosate-based weed killer', image: roundupImg, link: '/roundupMain' },
  { title: 'Toxic Baby Food Lawsuit', description: 'Heavy metal exposure tied to developmental delays', image: babyFoodImg, link: '/Babyfood' },

];



const HomeThree = () => {

  
  const cardsRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 768 : true);
  const mobileCardsRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop wheel scroll handling
  useEffect(() => {
    if (!isDesktop) return;
    const handleScroll = (e) => {
      if (cardsRef.current) {
        const container = cardsRef.current;
        if (container.scrollWidth > container.clientWidth && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          const atStart = container.scrollLeft === 0;
          const atEnd = Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth;
          if ((e.deltaY < 0 && !atStart) || (e.deltaY > 0 && !atEnd)) {
            e.preventDefault();
            container.scrollLeft += e.deltaY;
          }
        }
      }
    };
    const container = cardsRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
    };
  }, [isDesktop]);

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-white w-full" style={{ fontFamily: 'Quicksand, sans-serif' }}>
      {/* Header */}
      {isDesktop ? (
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#692D94]">
            What Do We <span className="text-[#EDC14A]">Help</span> You With <span className="text-[#EDC14A]">?</span>
          </h2>
          <a
            href="/ServiceMain"
            className="text-sm md:text-base font-semibold text-[#692D94] hover:underline whitespace-nowrap "
           style={{ fontFamily: 'Quicksand, sans-serif' }} >
            See All Lawsuits <span className="text-[#EDC14A]">{'>'}</span>
          </a>
        </div>
      ) : (
        <div className="flex justify-between items-center mb-8  gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#692D94]">
            What Do We <span className="text-[#EDC14A]">Help You</span> With?
          </h2>
          <a
            href="/ServiceMain"
            className="text-sm md:text-base font-bold text-[#692D94] hover:underline whitespace-nowrap"
          style={{ fontFamily: 'Quicksand, sans-serif' }} >
            See All <span className="text-[#EDC14A]">{'>'}</span>
          </a>
        </div>
      )}

      {/* Cards */}
      {isDesktop ? (
        <div
          ref={cardsRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-2 xl:grid xl:grid-cols-4 xl:overflow-visible"
          style={{ WebkitOverflowScrolling: 'touch', minWidth: 0 }}
        >
          {lawsuits.map((item, idx) => (
            <div
              key={idx}
              className="group relative min-w-[260px] max-w-[280px] bg-white rounded-lg overflow-hidden"
              style={{ flex: '0 0 260px', minWidth: 0 }}
            >
              {/* Image */}
              <div className="relative w-full h-[180px] ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg" 
                />
                <div className="absolute bottom-0 left-0 w-full flex justify-center items-end px-2 sm:px-4 py-2 sm:py-3">
                  <h3 className="text-[16px] sm:text-[20px] font-quicksand font-bold text-white text-center truncate max-w-full">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs mt-2 text-gray-600 leading-snug">
                  {item.description}
                </p>
                <Link to={item.link}>
  <button className="mt-4 px-4 py-2 border border-[#692D94] text-[#692D94]  rounded text-sm transition-colors duration-200 hover:bg-yellow-400">
    Learn More
  </button>
</Link>

              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          ref={mobileCardsRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-2"
          style={{ 
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'smooth'
          }}
        >
          {lawsuits.map((item, idx) => (
            <div
              key={idx}
              className="group relative min-w-[260px] max-w-[280px] bg-white rounded-lg overflow-hidden flex-shrink-0"
            >
              {/* Image */}
              <div className="relative w-full h-[180px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 w-full flex justify-center items-end px-2 sm:px-4 py-2 sm:py-3">
                  <h3 className="text-[16px] sm:text-[20px] font-quicksand font-bold text-white text-center truncate max-w-full">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs mt-2 text-gray-600 leading-snug">
                  {item.description}
                </p>
                <Link to={item.link}>
  <button className="mt-4 px-4 py-2 border border-[#692D94] text-[#692D94]  rounded text-sm transition-colors duration-200 hover:bg-yellow-400">
    Learn More
  </button>
</Link>

              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default HomeThree;