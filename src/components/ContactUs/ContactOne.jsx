import React, { useEffect, useState } from 'react';
import teamImage from '../../assets/ContactUsOneHero.webp'; // Replace with your actual image path
import bgcolor from '../../assets/herobgcontactus.png'
const ContactOne = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect screen resize to toggle between mobile and desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-[#692D94] text-white px-4" style={{ fontFamily: 'Quicksand, sans-serif' }}>
      {isMobile ? (
        // ---------------------- MOBILE VERSION ----------------------
        <div className="pt-8">
          <h2 className="text-[28px] font-semibold leading-snug text-left">
            The Right Legal Help <br />
            <span className="text-white">
              Is Just <span className="text-yellow-400">One Message</span> Away
            </span>
          </h2>
          <p className="mt-4 text-[15px] text-gray-200 text-left">
            We connect you with law firms that understand complex injury claims and treat your case with urgency and care.
          </p>
          <div className="mt-6">
            <img
              src={teamImage}
              alt="Legal Team"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>
      ) : (
        // ---------------------- DESKTOP VERSION ----------------------
<div className="w-full pt-12 bg-[#692D94]">



  {/* Content */}
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8 relative z-10 text-white px-4">
    {/* Left Content */}
    <div>
      <h2 className="md:text-[27px] lg:text-[33px] xl:text-[40px] font-semibold leading-snug">
        The Right Legal Help <br />
        <span className="text-white">
          Is Just <span className="text-yellow-400">One Message</span> Away
        </span>
      </h2>
      <p className="mt-4 md:text-[11px] lg:text-[14px] xl:text-[18px] text-gray-200 max-w-md">
        We connect you with law firms that understand complex injury claims and treat your case with urgency,
        compassion, and attention to detail.
      </p>
    </div>

    {/* Right Image */}
    <div className="flex flex-col justify-end h-full">
      <img
        src={teamImage}
        alt="Legal Team"
        className="w-full h-auto object-cover rounded-md self-end"
      />
    </div>
  </div>
</div>

      )}
    </div>
  );
};

export default ContactOne;