import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 
// Desktop Images
import depoImg from "../../assets/newServiceImg/depoSer.png";
import paraquatImg from "../../assets/newServiceImg/ParaSer.png";
import roundupImg from "../../assets/newServiceImg/RoundupSer.png";
import babyFoodImg from "../../assets/newServiceImg/BabySer.png";
import oxbrytaImg from "../../assets/newServiceImg/OxbrytaSer.png";
import talcumImg from "../../assets/newServiceImg/TalcumSer.png";
import bardImg from "../../assets/newServiceImg/BardSer.png";
import afffImg from "../../assets/newServiceImg/AfffSer.png";
import pfasImg from "../../assets/newServiceImg/PfasSer.png";
import meshImg from "../../assets/newServiceImg/transSer.png";
 
// Mobile Images
import depoImgMob from "../../assets/SubserviceMobile/depoMob.png";
import paraquatImgMob from "../../assets/SubserviceMobile/ParaMob.png";
import roundupImgMob from "../../assets/SubserviceMobile/RoundupMob.png";
import babyFoodImgMob from "../../assets/SubserviceMobile/BabyMob.png";
import oxbrytaImgMob from "../../assets/SubserviceMobile/OxbrytaMob.png";
import talcumImgMob from "../../assets/SubserviceMobile/talcumMob.png";
import bardImgMob from "../../assets/SubserviceMobile/BardMob.png";
import afffImgMob from "../../assets/SubserviceMobile/afffMob.png";
import pfasImgMob from "../../assets/SubserviceMobile/pfasMob.png";
import meshImgMob from "../../assets/SubserviceMobile/meshmob.png";
 
const lawsuits = [
  { title: 'Depo-Provera Lawsuit', description: 'Linked to brain tumors and bone loss in long-term users', image: depoImg, link: '/DepoMain' },
  { title: 'Paraquat Lawsuit', description: 'Parkinsons disease caused by toxic herbicide exposure', image: paraquatImg, link: '/ParaquatMain' },
  { title: 'Roundup Lawsuit', description: 'Cancer linked to glyphosate-based weed killer', image: roundupImg, link: '/roundupMain' },
  { title: 'Toxic Baby Food Lawsuit', description: 'Heavy metal exposure tied to developmental delays', image: babyFoodImg, link: '/Babyfood' },
  { title: 'Oxbryta Lawsuit', description: 'Linked to brain tumors and bone loss in long-term users', image: oxbrytaImg, link: '/OxbrytaMain' },
  { title: 'Talcum Powder Lawsuit', description: 'Parkinsons disease caused by toxic herbicide exposure', image: talcumImg, link: '/TalcumMain' },
  { title: 'Bard PowerPort Lawsuit', description: 'Cancer linked to glyphosate-based weed killer', image: bardImg, link: '/BardPowerPortMain' },
  { title: 'AFFF Firefighting Foam Lawsuit', description: 'Linked to brain tumors and bone loss in long-term users', image: afffImg, link: '/AFFFMain' },
  { title: 'PFAS Contamination Lawsuit', description: 'Parkinsons disease caused by toxic herbicide exposure', image: pfasImg, link: '/PFASMain' },
  { title: 'Transvaginal Mesh Lawsuit', description: 'Cancer linked to glyphosate-based weed killer', image: meshImg, link: '/TransvaginalMain' },
];
 
const Moblawsuits = [
  { title: 'Depo-Provera Lawsuit', description: 'Linked to brain tumors and bone loss in long-term users', image: depoImgMob, link: '/DepoMain' },
  { title: 'Paraquat Lawsuit', description: 'Parkinsons disease caused by toxic herbicide exposure', image: paraquatImgMob, link: '/ParaquatMain' },
  { title: 'Roundup Lawsuit', description: 'Cancer linked to glyphosate-based weed killer', image: roundupImgMob, link: '/roundupMain' },
  { title: 'Toxic Baby Food Lawsuit', description: 'Heavy metal exposure tied to developmental delays', image: babyFoodImgMob, link: '/Babyfood' },
  { title: 'Oxbryta Lawsuit', description: 'Linked to brain tumors and bone loss in long-term users', image: oxbrytaImgMob, link: '/OxbrytaMain' },
  { title: 'Talcum Powder Lawsuit', description: 'Parkinsons disease caused by toxic herbicide exposure', image: talcumImgMob, link: '/TalcumMain' },
  { title: 'Bard PowerPort Lawsuit', description: 'Cancer linked to glyphosate-based weed killer', image: bardImgMob, link: '/BardPowerPortMain' },
  { title: 'AFFF Firefighting Foam Lawsuit', description: 'Linked to brain tumors and bone loss in long-term users', image: afffImgMob, link: '/AFFFMain' },
  { title: 'PFAS Contamination Lawsuit', description: 'Parkinsons disease caused by toxic herbicide exposure', image: pfasImgMob, link: '/PFASMain' },
  { title: 'Transvaginal Mesh Lawsuit', description: 'Cancer linked to glyphosate-based weed killer', image: meshImgMob, link: '/TransvaginalMain' },
];
 
const ServiceThree = () => {
  const [isMobile, setIsMobile] = useState(false);
 
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
 
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-white w-full font-[Quicksand]">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#4F2270]">
            What Do We <span className="text-[#FDBA22]">Help You</span> With?
          </h2>
        </div>
 
        {isMobile ? (
          <div className="grid grid-cols-2 gap-6">
            {Moblawsuits.map((item, idx) => (
              <div key={idx} className="bg-white rounded-[14px] overflow-hidden w-full">
                <div className="w-full h-[180px] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-fill rounded-[10%]"
                  />
                  <div className="absolute bottom-0 left-0 w-full text-left px-3 py-3">
                    <h3 className="text-[14px] sm:text-[13px] font-bold text-white leading-tight px-3 py-2 break-words whitespace-normal">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-[#6b7280] leading-snug">{item.description}</p>
                  <Link to={item.link}>
                    <button className="mt-4 px-4 py-2 border border-[#4F2270] text-[#4F2270]  rounded-[6px] text-sm transition-colors duration-200 hover:bg-yellow-400">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {lawsuits.map((item, idx) => (
              <div key={idx} className="bg-white rounded-[14px] overflow-hidden w-full max-w-[300px] mx-auto">
                <div className="w-full h-[180px] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-fill"
                  />
                  <div className="absolute bottom-0 left-0 w-full text-left px-4 py-3">
                    <h3 className="text-[16px] font-bold text-white leading-tight px-3 py-2 break-words whitespace-normal">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-[#6b7280] leading-snug mb-4">
                    {item.description}
                  </p>
                  <Link to={item.link}>
                    <button className="mt-2 px-4 py-2 border border-[#4F2270] text-[#4F2270]  rounded-[6px] text-sm transition-colors duration-200 hover:bg-yellow-400">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
 
export default ServiceThree;
 
 