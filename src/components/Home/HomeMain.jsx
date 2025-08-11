import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import HomeOne from './HomeOne.jsx';
import HomeTwo from './HomeTwo.jsx';
import HomeThree from './HomeThree.jsx';
import HomeFour from './HomeFour.jsx';
import HomeFive from './HomeFive.jsx';
import HomeSix from './HomeSix.jsx';
 
const TURNSTILE_SITE_KEY = '0x4AAAAAABqj9wvRF2Oe5RiS';
 
const HomeMain = () => {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const widgetRef = useRef(null);
  const scriptLoadedRef = useRef(false);
 
  useEffect(() => {
    // Check if already verified
    const isVerified = localStorage.getItem('isHumanVerified');
    if (isVerified === 'true') {
      setVerified(true);
      setLoading(false);
      return;
    }
 
    // Check if site key is available
    if (!TURNSTILE_SITE_KEY) {
      setError('Turnstile site key not configured');
      setLoading(false);
      return;
    }
 
    loadTurnstileScript();
 
    // Cleanup function
    return () => {
      if (window.onTurnstileLoad) {
        delete window.onTurnstileLoad;
      }
      if (widgetRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetRef.current);
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    };
  }, []);
 
  const loadTurnstileScript = () => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="turnstile"]');
   
    if (existingScript) {
      // Script already loaded, check if Turnstile is ready
      if (window.turnstile && window.turnstile.render) {
        setLoading(false);
      } else {
        // Script loaded but Turnstile not ready, set up callback
        setupTurnstileCallback();
      }
      return;
    }
 
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad';
    script.async = true;
    script.defer = true;
   
    script.onerror = () => {
      setError('Failed to load verification system');
      setLoading(false);
    };
 
    // Set up global callback for when Turnstile is ready
    setupTurnstileCallback();
 
    document.head.appendChild(script);
  };
 
  const setupTurnstileCallback = () => {
    window.onTurnstileLoad = () => {
      scriptLoadedRef.current = true;
      setLoading(false);
    };
  };
 
  const handleTurnstileSuccess = (token) => {
    if (token) {
      localStorage.setItem('isHumanVerified', 'true');
      setVerified(true);
     
      // Clean up the widget
      if (widgetRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetRef.current);
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    }
  };
 
  const handleTurnstileError = () => {
    setError('Verification failed. Please refresh the page and try again.');
  };
 
  const renderTurnstileWidget = () => {
    const container = document.getElementById('turnstile-widget');
   
    if (!container || !window.turnstile || !window.turnstile.render) {
      return;
    }
 
    // Clear any existing content
    container.innerHTML = '';
 
    try {
      const widgetId = window.turnstile.render(container, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: handleTurnstileSuccess,
        'error-callback': handleTurnstileError,
        theme: 'light',
        size: 'normal',
        retry: 'auto'
      });
     
      widgetRef.current = widgetId;
    } catch (error) {
      console.error('Turnstile render error:', error);
      setError('Failed to initialize verification widget');
    }
  };
 
  // Render widget when everything is ready
  useEffect(() => {
    if (!loading && !verified && !error && scriptLoadedRef.current) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        renderTurnstileWidget();
      }, 100);
     
      return () => clearTimeout(timer);
    }
  }, [loading, verified, error]);
 
  const handleRetry = () => {
    setError(null);
    setLoading(true);
    loadTurnstileScript();
  };
 
  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4F2270] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading security verification...</p>
        </div>
      </div>
    );
  }
 
  if (error) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center bg-white">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Verification Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={handleRetry}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
 
  return (
    <div className="relative">
      <div className={`transition-all duration-300 ${!verified ? 'pointer-events-none blur-sm select-none' : ''}`}>
        <Navbar />
        <HomeOne />
        <HomeTwo />
        <HomeThree />
        <HomeFour />
        <HomeFive />
        <HomeSix />
        <Footer />
      </div>
 
      {!verified && (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" p-8 rounded-lg shadow-2xl text-center max-w-sm mx-auto">
           
            <div
              id="turnstile-widget"
              className="flex justify-center min-h-[65px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};
 
export default HomeMain;
 



// const HomeMain = () => {
//   return (
//     <div><Navbar />
//         <HomeOne />
//         <HomeTwo />
//         <HomeThree />
//         <HomeFour />
//         <HomeFive />       
//          <HomeSix />
//          <Footer />
         
//          </div>
//   )
// }

// export default HomeMain