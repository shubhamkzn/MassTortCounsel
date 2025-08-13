import React from 'react'
import herobg from '../../assets/MassTortHeroDekstop.jpg'
import MobileHeroBg from '../../assets/MobileHeroBg.png'
import { ChevronDown } from 'lucide-react'
const HomeOne = () => {

    const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
     {/* Desktop/Laptop/Tablet Hero Section */}
      <section className="hidden sm:flex relative w-full h-relative md:min-h-[45vh] lg:min-h-[55vh] xl:min-h-[65vh] 2xl:min-h-[85vh]  items-center justify-start overflow-hidden capitalize">
        {/* Background Image */}
        <img
          src={herobg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0  z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-start w-full px-6 md:px-16 lg:px-24 py-8">
          <h1
            className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl  font-bold text-white mb-4 drop-shadow-lg text-left"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Trusted Legal Support <br></br>for Your Future
          </h1>
          <h2
            className="text-sm sm:text-base md:text-xs lg:text-base xl:text-xl text-white mb-6 font-medium drop-shadow text-left leading-relaxed"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            If you’ve been harmed by a dangerous drug, medical device,<br />
            or toxic exposure, you're not alone. We help you understand<br />
            your rights and connect you with experienced legal teams<br />
            who put your recovery first.
          </h2>

          <button 
          
          onClick={scrollToForm}
          className="bg-[#FDBA22]  text-[#4F2270] font-semibold px-6 md:px-8 py-3 md:py-4 rounded-md shadow hover:bg-yellow-500 transition text-base md:text-lg ">
            Let's Discuss Your Case
          </button>

   


          
        </div>
      </section>

      {/* Mobile Hero Section */}
      <section className="flex sm:hidden relative w-full min-h-[90vh] items-end justify-center overflow-hidden capitalize">
        {/* Background Image */}
        <img
          src={MobileHeroBg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-relative object-cover z-0"
          style={{ minHeight: '90vh', width: '100%' }}
        />
        {/* Content */}
        <div className="relative z-20 flex flex-col items-start justify-end w-full px-3 pb-8">
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg text-center " style={{ fontFamily: 'Quicksand, sans-serif' }}>
            Trusted Legal Support for Your Future
          </h1>
          <h2 className="text-sm text-white mb-4 font-normal drop-shadow text-center" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            If you’ve been harmed by a dangerous drug, medical device, or toxic exposure, you're not alone. We help you understand your rights and connect you with experienced legal teams who put your recovery first.
          </h2>
          <div className='flex  w-full justify-center'>
          <button 
          onClick={scrollToForm}
          className="bg-[#FDBA22]  text-[#4F2270] font-semibold px-6 py-2  shadow hover:bg-yellow-500 transition text-base max-w-xs text-left rounded-md" style={{ minWidth: '180px' }}>
            Let's Discuss Your Case
          </button>
          </div>
        </div>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 z-10" />
      </section>
    </>
  )
}

export default HomeOne
