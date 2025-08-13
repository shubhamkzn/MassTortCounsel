import React from 'react'
import img1 from '../../../assets/Frame 48.png'
import { useNavigate } from 'react-router-dom';

const HomeSeven = () => {
  const navigate = useNavigate();

const handleRedirect = () => {
  navigate('/ContactUs'); // Adjust if your route is named differently
};

  return (
    <>
      {/* Desktop Tile Section */}
<section className="hidden lg:block py-12 lg:py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="bg-[#4F2270] relative rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-14 shadow-2xl overflow-hidden min-h-[340px]">
      {/* Grid Content */}
      <div className="grid grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-left">
          <h1
            className="text-3xl lg:text-4xl xl:text-4xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
          If You're Unsure, Start 
Your Free Case Review!
          </h1>
          <h2
            className="text-lg text-white mb-6 font-medium leading-relaxed opacity-90"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
           Fill out a from to start a free case review Now.
          </h2>
        <button
  onClick={handleRedirect}
  className="bg-[#FDBA22] hover:bg-yellow-500 text-[#4F2270]  font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
  style={{ fontFamily: 'Quicksand, sans-serif' }}
>
  Start My Case Review
</button>

        </div>
      </div>

      {/* Bottom-Right Larger Image */}
      <div className="absolute bottom-0 right-0 max-w-lg xl:max-w-xl p-4">
        <img
          src={img1}
          alt="Legal consultation"
          className="w-full h-auto rounded-xl shadow-xl"
        />
      </div>
    </div>
  </div>
</section>



      {/* Tablet Tile Section */}
      <section className="hidden md:block lg:hidden py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#4F2270] rounded-2xl p-8 shadow-2xl">
            {/* Tablet Image on Top */}
            <div className="mb-8 text-center">
              <img
                src={img1}
                alt="Legal consultation"
                className="w-full h-auto rounded-xl shadow-xl max-w-lg mx-auto"
              />
            </div>
            
            {/* Tablet Content */}
            <div className="text-left">
              <h1 
                className="text-3xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
             If You're Unsure, Start 
Your Free Case Review!
              </h1>
              <h2 
                className="text-lg text-white mb-8 font-medium leading-relaxed opacity-90"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
               Fill out a from to start a free case review Now.
              </h2>
            <button
  onClick={handleRedirect}
  className="bg-[#FDBA22] hover:bg-yellow-500 text-[#4F2270]  font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
  style={{ fontFamily: 'Quicksand, sans-serif' }}
>
  Start My Case Review
</button>

            </div>
          </div>
        </div>
      </section>

      {/* Mobile Section (No Tile) */}
      <section className="block md:hidden bg-[#4F2270] py-12">
        <div className="mx-auto px-6">
          {/* Mobile Image */}
          <div className="mb-6 text-center">
            <img
              src={img1}
              alt="Legal consultation"
              className="w-full h-auto rounded-xl shadow-xl max-w-sm mx-auto"
            />
          </div>
          
          {/* Mobile Content */}
          <div className="text-center">
            <h1 
              className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
           If You're Unsure, Start 
Your Free Case Review!
            </h1>
            <h2 
              className="text-base sm:text-lg text-white mb-6 font-medium leading-relaxed opacity-90"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
             Fill out a from to start a free case review Now.
            </h2>
            <button 
              className="bg-[#FDBA22] hover:bg-yellow-500 text-[#4F2270]  font-semibold px-6 py-3 rounded-lg text-base transition-colors duration-200 shadow-lg w-full sm:w-auto"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              Start My Case Review
            </button>
          </div>
        </div>
        <div className="mt-8 border-t-8 border-white" />

      </section>
    </>
  )
}

export default HomeSeven