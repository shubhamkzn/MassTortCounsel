
import React, { useState, useEffect } from 'react';
import { sendAdminEmail, sendUserEmail } from '../../../emailService.js';
import toast, { Toaster } from 'react-hot-toast';

const CustomCaptcha = ({ onCaptchaChange, resetTrigger }) => {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [charOffsets, setCharOffsets] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
 
  const generateCaptcha = () => {
    // Stop any ongoing speech when generating new CAPTCHA
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
   
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    let offsets = [];
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
      offsets.push((Math.random() * 10 - 5).toFixed(2));
    }
    setCaptchaText(result);
    setCharOffsets(offsets);
    setUserInput('');
    setIsValid(false);
    onCaptchaChange && onCaptchaChange(false);
  };
 
  // Generate CAPTCHA immediately when component mounts
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Reset captcha when resetTrigger changes
  useEffect(() => {
    if (resetTrigger) {
      generateCaptcha();
    }
  }, [resetTrigger]);
 
  useEffect(() => {
    const timer = setInterval(() => {
      generateCaptcha();
    }, 60000);
 
    return () => {
      clearInterval(timer);
      // Stop any ongoing speech when component unmounts
      if (isSpeaking) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSpeaking]);
 
  const speakCaptcha = () => {
    if ('speechSynthesis' in window) {
      // Stop any ongoing speech before starting new one
      window.speechSynthesis.cancel();
      setIsSpeaking(true);
 
      const voices = window.speechSynthesis.getVoices();
      const maleUsVoice = voices.find(voice =>
        voice.lang === 'en-US' &&
        voice.name.toLowerCase().includes('david')
      ) || voices.find(voice =>
        voice.lang === 'en-US'
      );
 
      let currentIndex = 0;
      const speakNextChar = () => {
        if (currentIndex < captchaText.length) {
          const char = captchaText[currentIndex];
          const utterance = new SpeechSynthesisUtterance(char);
          utterance.rate = 0.5;
          utterance.pitch = 0.9;
          utterance.volume = 1.0;
          utterance.lang = 'en-US';
         
          if (maleUsVoice) {
            utterance.voice = maleUsVoice;
          }
 
          utterance.onend = () => {
            currentIndex++;
            speakNextChar();
          };
 
          window.speechSynthesis.speak(utterance);
        } else {
          setIsSpeaking(false);
        }
      };
 
      speakNextChar();
    }
  };
 
  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserInput(value);
    const valid = value === captchaText;
    setIsValid(valid);
    onCaptchaChange && onCaptchaChange(valid);
  };
 
  const handleAudioToggle = (e) => {
    setAudioEnabled(e.target.checked);
  };
 
  return (
    <div className="mt-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="bg-gray-100 p-3 rounded font-mono text-lg tracking-wider select-none relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                #ccc,
                #ccc 1px,
                transparent 1px,
                transparent 5px
              )`,
              backgroundSize: '100% 10px',
              backgroundPosition: '0 50%'
            }}
          />
          <div className="relative z-10">
            {captchaText.split('').map((char, index) => (
              <span
                key={index}
                style={{ 
                  transform: `translateY(${charOffsets[index]}px)`, 
                  display: 'inline-block',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                }}
                className="mx-0.5"
              >
                {char}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-2 items-center justify-left sm:justify-start">
          <button
            type="button"
            onClick={generateCaptcha}
            className="px-3 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-0"
            title="Refresh CAPTCHA"
          >
            ↻
          </button>
          {audioEnabled && (
            <button
              type="button"
              onClick={speakCaptcha}
              disabled={isSpeaking}
              className={`px-3 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-0 ${
                isSpeaking ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              title="Listen to CAPTCHA"
            >
              {isSpeaking ? '🔊🎵' : '🔊'}
            </button>
          )}
        </div>
      </div>
      
      <div className="flex items-center mt-2">
        <input
          type="checkbox"
          id="enableAudio"
          checked={audioEnabled}
          onChange={handleAudioToggle}
          className="mr-2"
        />
        <label htmlFor="enableAudio" className="text-sm text-gray-700">
          Enable Audio
        </label>
      </div>
      
      <div className="mt-3">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter CAPTCHA"
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            userInput !== '' && !isValid 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-gray-300'
          }`}
        />
        {userInput !== '' && !isValid && (
          <p className="text-red-500 text-sm mt-1">
            CAPTCHA does not match
          </p>
        )}
        {isValid && (
          <p className="text-green-500 text-sm mt-1">
            ✓ CAPTCHA verified successfully
          </p>
        )}
      </div>
    </div>
  );
};

const FloatingInput = ({ type, id, label, value, onChange, error }) => {
  const [focused, setFocused] = useState(false);
 
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={(e) => setFocused(e.target.value !== '' || focused)}
        className={`peer w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:ring-2 ${error ? 'focus:ring-red-500' : 'focus:ring-blue-400'} bg-[#692D941A] text-[#692D94] font-medium`}
        style={{ fontFamily: 'Quicksand, sans-serif' }}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={`absolute left-4 top-2 text-sm ${error ? 'text-red-600' : 'text-gray-600'} transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600`}
        style={{ fontFamily: 'Quicksand, sans-serif' }}
      >
        {label}
      </label>
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

const FloatingTextarea = ({ id, label, value, onChange }) => {
  const [focused, setFocused] = useState(false);
 
  return (
    <div className="relative w-full">
      <textarea
        id={id}
        required
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={(e) => setFocused(e.target.value !== '' || focused)}
        rows={4}
        className="peer w-full border border-gray-300 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#692D941A] text-[#692D94] font-medium resize-vertical"
        style={{ fontFamily: 'Quicksand, sans-serif' }}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600"
        style={{ fontFamily: 'Quicksand, sans-serif' }}
      >
        {label}
      </label>
    </div>
  );
};

// ZIP code lookup function
const fetchLocationByZip = async (zipCode) => {
  try {
    const response = await fetch(`https://api.zippopotam.us/us/${zipCode}`);
    if (response.ok) {
      const data = await response.json();
      return {
        city: data.places[0]['place name'],
        state: data.places[0]['state abbreviation']
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching location:', error);
    return null;
  }
};

// Email validation function
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone number formatting and validation for US numbers
const formatPhoneNumber = (value) => {
  const cleaned = value.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return value;
};

const isValidUSPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length === 10 && cleaned.match(/^[2-9]\d{2}[2-9]\d{6}$/);
};

const DesktopForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 fields
    name: '',
    phone: '',
    email: '',
    category: '',
    termsAccepted: false,
    // Step 2 fields
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    captchaEnabled: false
  });
  const [captchaValid, setCaptchaValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaResetTrigger, setCaptchaResetTrigger] = useState(0);
  const [errors, setErrors] = useState({});

  const handleChange = async (e) => {
    const { id, value, type, checked } = e.target;
    const fieldName = id.replace('-mobile', '');
    
    let processedValue = value;
    let newErrors = { ...errors };

    // Handle phone number formatting and validation
    if (fieldName === 'phone') {
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length <= 10) {
        processedValue = cleaned.length === 10 ? formatPhoneNumber(cleaned) : cleaned;
        if (cleaned.length === 10) {
          if (isValidUSPhone(cleaned)) {
            delete newErrors.phone;
          } else {
            newErrors.phone = 'Please enter a valid US phone number';
          }
        } else if (cleaned.length > 0) {
          newErrors.phone = 'Phone number must be 10 digits';
        } else {
          delete newErrors.phone;
        }
      } else {
        return; // Don't allow more than 10 digits
      }
    }

    // Handle email validation
    if (fieldName === 'email') {
      if (value.length > 0) {
        if (isValidEmail(value)) {
          delete newErrors.email;
        } else {
          newErrors.email = 'Please enter a valid email address';
        }
      } else {
        delete newErrors.email;
      }
    }

    // Handle ZIP code validation and auto-population
    if (fieldName === 'zipCode') {
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length <= 5) {
        processedValue = cleaned;
        if (cleaned.length === 0) {
          // Clear city and state when ZIP code is deleted
          setFormData(prevData => ({
            ...prevData,
            
            city: '',
            state: '',
            zipCode: '',
          }));
          setErrors(newErrors);
          return;
        }
      } else {
        return; // Don't allow more than 5 digits
      }
    }

    setFormData(prevData => ({
      ...prevData,
      [fieldName]: type === 'checkbox' ? checked : processedValue,
    }));

    setErrors(newErrors);

    // Handle ZIP code auto-population
    if (fieldName === 'zipCode' && processedValue.length === 5) {
      const locationData = await fetchLocationByZip(processedValue);
      if (locationData) {
        setFormData(prevData => ({
          ...prevData,
          city: locationData.city,
          state: locationData.state
        }));
      }
    }
  };

  const handleCaptchaChange = (isValid) => {
    setCaptchaValid(isValid);
  };

  const goToNextStep = () => {
    setCurrentStep(2);
    setCaptchaValid(false);
    setCaptchaResetTrigger(prev => prev + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep(1);
    setCaptchaValid(false);
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentStep === 1) {
      // Validate step 1 fields
      const stepErrors = {};
      if (!isValidEmail(formData.email)) {
        stepErrors.email = 'Please enter a valid email address';
      }
      if (!isValidUSPhone(formData.phone.replace(/\D/g, ''))) {
        stepErrors.phone = 'Please enter a valid US phone number';
      }
      
      if (Object.keys(stepErrors).length > 0) {
        setErrors(stepErrors);
        return;
      }
      
      goToNextStep();
      return;
    }

    if (!formData.captchaEnabled) {
      toast.error('Please enable CAPTCHA verification.');
      return;
    }

    if (!captchaValid) {
      toast.error('Please complete the CAPTCHA verification.');
      return;
    }
    setLoading(true);

    try {
      await sendAdminEmail(formData);
      await sendUserEmail(formData);
      toast.success('Your request has been submitted successfully.')
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        category: '',
        termsAccepted: false,
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        captchaEnabled: false
      });
      setCaptchaValid(false);
      setCaptchaResetTrigger(prev => prev + 1);
      setCurrentStep(1);
      setErrors({});
    } catch (error) {
      toast.error('There was an error submitting your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (currentStep === 1) {
    return (
      <form className="space-y-6 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full">
          <FloatingInput 
            type="text" 
            id="name" 
            label="Full Name" 
            value={formData.name} 
            onChange={handleChange}
            error={errors.name}
          />
          <FloatingInput 
            type="tel" 
            id="phone" 
            label="Phone Number" 
            value={formData.phone} 
            onChange={handleChange}
            error={errors.phone}
          />
          <FloatingInput 
            type="email" 
            id="email" 
            label="Email" 
            value={formData.email} 
            onChange={handleChange}
            error={errors.email}
          />
        </div>
   
        <div className="relative w-full">
          <select
            id="category"
            required
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-5 focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none bg-[#692D941A] text-[#692D94]"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            <option value="">Lawsuit Type</option>
            <option value="Drug Injury">Drug Injury</option>
            <option value="Medical Device">Medical Device</option>
            <option value="Toxic Exposure">Toxic Exposure</option>
            <option value="other">Other</option>
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">▼</span>
        </div>
   
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-start w-full md:w-auto">
            <input
              type="checkbox"
              id="termsAccepted"
              required
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2 mt-1"
              style={{ width: '1.25rem', height: '1.25rem' }}
            />
            <label htmlFor="termsAccepted" className="text-sm text-gray-700">
              I agree to the{' '}
              <a href="/PrivacyPolicy" className="text-[#EDC14A] underline" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/Disclaimer" className="text-[#EDC14A] underline" target="_blank" rel="noopener noreferrer">
                Disclaimer
              </a>{' '}
              and give my express written consent, affiliates and/or lawyer to contact you at the number provided above, even if this number is a wireless number or if I am presently listed on a Do Not Call list. I understand that I may be contacted by telephone, email, text message or mail regarding case options and that I may be called using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
            </label>
          </div>
          <div className="flex justify-end w-full md:w-auto">
            <button
              type="submit"
              className="flex items-center justify-center font-semibold min-w-[180px] md:min-w-[320px] px-8 md:px-32 py-4 rounded-lg shadow transition text-base md:text-lg hover:bg-blue-700"
              style={{
                backgroundColor: '#692D94',
                color: '#fff',
                fontFamily: 'Quicksand, sans-serif',
                whiteSpace: 'nowrap',
              }}
            >
              Start My Case Review<span className="text-[#EDC14A]">{' ->'}</span>
            </button>
          </div>
        </div>
      </form>
    );
  }

  return (
    <form className="space-y-6 w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full">
        
        <FloatingInput 
          type="text" 
          id="city" 
          label="City" 
          value={formData.city} 
          onChange={handleChange}
          error={errors.city}
        />
        <FloatingInput 
          type="text" 
          id="state" 
          label="State" 
          value={formData.state} 
          onChange={handleChange}
          error={errors.state}
        />
        <FloatingInput 
          type="text" 
          id="zipCode" 
          label="Zip Code" 
          value={formData.zipCode} 
          onChange={handleChange}
          error={errors.zipCode}
        />
      </div>

      <div className="w-full">
        <FloatingTextarea id="streetAddress" label="Street Address" value={formData.streetAddress} onChange={handleChange} />
      </div>

      <div className="w-full">
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="captchaEnabled"
            checked={formData.captchaEnabled}
            onChange={handleChange}
            className="mr-2"
            style={{ width: '1.25rem', height: '1.25rem' }}
          />
          <label htmlFor="captchaEnabled" className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            Verify you're human
          </label>
        </div>
        {formData.captchaEnabled && (
          <CustomCaptcha onCaptchaChange={handleCaptchaChange} resetTrigger={captchaResetTrigger} />
        )}
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={goToPreviousStep}
          className="flex items-center justify-center font-semibold min-w-[180px] md:min-w-[200px] px-8 py-4 rounded-lg shadow transition text-base md:text-lg border-2 border-gray-400 text-gray-700 hover:bg-gray-50"
          style={{
            fontFamily: 'Quicksand, sans-serif',
            whiteSpace: 'nowrap',
          }}
        >
          Back
        </button>
        {formData.captchaEnabled && captchaValid && (
          <button
            type="submit"
            disabled={loading}
            className={`flex items-center justify-center font-semibold min-w-[180px] md:min-w-[200px] px-8 py-4 rounded-lg shadow transition text-base md:text-lg ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
            }`}
            style={{
              backgroundColor: '#692D94',
              color: '#fff',
              fontFamily: 'Quicksand, sans-serif',
              whiteSpace: 'nowrap',
            }}
          >
            {loading ? 'Processing...' : 'Submit Now'}
          </button>
        )}
      </div>
    </form>
  );
};

const MobileForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 fields
    name: '',
    phone: '',
    email: '',
    category: '',
    termsAccepted: false,
    // Step 2 fields
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    captchaEnabled: false
  });
  const [captchaValid, setCaptchaValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaResetTrigger, setCaptchaResetTrigger] = useState(0);
  const [errors, setErrors] = useState({});

  const handleChange = async (e) => {
    const { id, value, type, checked } = e.target;
    const fieldName = id.replace('-mobile', '');
    
    let processedValue = value;
    let newErrors = { ...errors };

    // Handle phone number formatting and validation
    if (fieldName === 'phone') {
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length <= 10) {
        processedValue = cleaned.length === 10 ? formatPhoneNumber(cleaned) : cleaned;
        if (cleaned.length === 10) {
          if (isValidUSPhone(cleaned)) {
            delete newErrors.phone;
          } else {
            newErrors.phone = 'Please enter a valid US phone number';
          }
        } else if (cleaned.length > 0) {
          newErrors.phone = 'Phone number must be 10 digits';
        } else {
          delete newErrors.phone;
        }
      } else {
        return; // Don't allow more than 10 digits
      }
    }

    // Handle email validation
    if (fieldName === 'email') {
      if (value.length > 0) {
        if (isValidEmail(value)) {
          delete newErrors.email;
        } else {
          newErrors.email = 'Please enter a valid email address';
        }
      } else {
        delete newErrors.email;
      }
    }

    // Handle ZIP code validation and auto-population
    if (fieldName === 'zipCode') {
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length <= 5) {
        processedValue = cleaned;
        if (cleaned.length === 0) {
          // Clear city and state when ZIP code is deleted
          setFormData(prevData => ({
            ...prevData,
            
            city: '',
            state: '',
            zipCode: '',
          }));
          setErrors(newErrors);
          return;
        }
      } else {
        return; // Don't allow more than 5 digits
      }
    }

    setFormData(prevData => ({
      ...prevData,
      [fieldName]: type === 'checkbox' ? checked : processedValue,
    }));

    setErrors(newErrors);

    // Handle ZIP code auto-population
    if (fieldName === 'zipCode' && processedValue.length === 5) {
      const locationData = await fetchLocationByZip(processedValue);
      if (locationData) {
        setFormData(prevData => ({
          ...prevData,
          city: locationData.city,
          state: locationData.state
        }));
      }
    }
  };

  const handleCaptchaChange = (isValid) => {
    setCaptchaValid(isValid);
  };

  const goToNextStep = () => {
    setCurrentStep(2);
    setCaptchaValid(false);
    setCaptchaResetTrigger(prev => prev + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep(1);
    setCaptchaValid(false);
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentStep === 1) {
      // Validate step 1 fields
      const stepErrors = {};
      if (!isValidEmail(formData.email)) {
        stepErrors.email = 'Please enter a valid email address';
      }
      if (!isValidUSPhone(formData.phone.replace(/\D/g, ''))) {
        stepErrors.phone = 'Please enter a valid US phone number';
      }
      
      if (Object.keys(stepErrors).length > 0) {
        setErrors(stepErrors);
        return;
      }
      
      goToNextStep();
      return;
    }

    if (!formData.captchaEnabled) {
      toast.error('Please enable CAPTCHA verification.');
      return;
    }

    if (!captchaValid) {
      toast.error('Please complete the CAPTCHA verification.');
      return;
    }
    setLoading(true);

    try {
      await sendAdminEmail(formData);
      await sendUserEmail(formData);
      toast.success('Your request has been submitted successfully.')
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        category: '',
        termsAccepted: false,
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        captchaEnabled: false
      });
      setCaptchaValid(false);
      setCaptchaResetTrigger(prev => prev + 1);
      setCurrentStep(1);
      setErrors({});
    } catch (error) {
      toast.error('There was an error submitting your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (currentStep === 1) {
    return (
      <form className="space-y-4 w-full" onSubmit={handleSubmit}>
        <FloatingInput 
          type="text" 
          id="name" 
          label="Full Name" 
          value={formData.name} 
          onChange={handleChange}
          error={errors.name}
        />
        <FloatingInput 
          type="tel" 
          id="phone" 
          label="Phone Number" 
          value={formData.phone} 
          onChange={handleChange}
          error={errors.phone}
        />
        <FloatingInput 
          type="email" 
          id="email" 
          label="Email" 
          value={formData.email} 
          onChange={handleChange}
          error={errors.email}
        />
   
        <div className="relative w-full">
          <select
            id="category"
            required
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none bg-[#692D941A] text-[#692D94]"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            <option value="">Lawsuit Type</option>
            <option value="Drug Injury">Drug Injury</option>
            <option value="Medical Device">Medical Device</option>
            <option value="Toxic Exposure">Toxic Exposure</option>
            <option value="other">Other</option>
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">▼</span>
        </div>
   
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="termsAccepted"
            required
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="mt-1"
            style={{ width: '1.5rem', height: '1.5rem' }}
          />
          <label htmlFor="termsAccepted" className="text-xs text-gray-700">
            I agree to the <a href="/PrivacyPolicy" className="text-[#EDC14A] underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and
            <a href="/Disclaimer" className="text-[#EDC14A] underline ml-1" target="_blank" rel="noopener noreferrer">Disclaimer</a> and give my express written consent to be contacted by affiliates and/or lawyers.
          </label>
        </div>
   
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center justify-center font-semibold w-full py-4 rounded-lg shadow transition text-base hover:bg-blue-700"
            style={{
              backgroundColor: '#692D94',
              color: '#fff',
              fontFamily: 'Quicksand, sans-serif',
              whiteSpace: 'nowrap',
            }}
          >
            Start My Case Review
          </button>
        </div>
      </form>
    );
  }

  return (
    <form className="space-y-4 w-full" onSubmit={handleSubmit}>
     
      <FloatingInput 
        type="text" 
        id="city-mobile" 
        label="City" 
        value={formData.city} 
        onChange={handleChange}
        error={errors.city}
      />
      <FloatingInput 
        type="text" 
        id="state-mobile" 
        label="State" 
        value={formData.state} 
        onChange={handleChange}
        error={errors.state}
      />
       <FloatingInput 
        type="text" 
        id="zipCode-mobile" 
        label="Zip Code" 
        value={formData.zipCode} 
        onChange={handleChange}
        error={errors.zipCode}
      />
      
      <div className="w-full">
        <FloatingTextarea id="streetAddress-mobile" label="Street Address" value={formData.streetAddress} onChange={handleChange} />
      </div>

      <div className="w-full">
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="captchaEnabled"
            checked={formData.captchaEnabled}
            onChange={handleChange}
            className="mr-2"
            style={{ width: '1.25rem', height: '1.25rem' }}
          />
          <label htmlFor="captchaEnabled" className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            Verify you're human
          </label>
        </div>
        {formData.captchaEnabled && (
          <CustomCaptcha onCaptchaChange={handleCaptchaChange} resetTrigger={captchaResetTrigger} />
        )}
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={goToPreviousStep}
          className="flex items-center justify-center font-semibold flex-1 py-4 rounded-lg shadow transition text-base border-2 border-gray-400 text-gray-700 hover:bg-gray-50"
          style={{
            fontFamily: 'Quicksand, sans-serif',
            whiteSpace: 'nowrap',
          }}
        >
          Back
        </button>
        {formData.captchaEnabled && captchaValid && (
          <button
            type="submit"
            disabled={loading}
            className={`flex items-center justify-center font-semibold flex-1 py-4 rounded-lg shadow transition text-base ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
            }`}
            style={{
              backgroundColor: '#692D94',
              color: '#fff',
              fontFamily: 'Quicksand, sans-serif',
              whiteSpace: 'nowrap',
            }}
          >
            {loading ? 'Processing...' : 'Submit Now'}
          </button>
        )}
      </div>
    </form>
  );
};

const BabyFoodTwo = () => {
  return (
    <section
      id="contact-form"
      className="w-full bg-white py-10 flex justify-center px-4 sm:px-6 md:px-8 lg:px-10"
    >
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            fontFamily: 'Quicksand, sans-serif',
            fontSize: '16px',
          },
        }}
      />
      <div className="bg-white border border-gray-200 rounded-xl shadow-2xl p-4 sm:p-8 w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl min-h-[450px] flex flex-col justify-center">
        <h2
          className="text-3xl md:text-4xl font-semibold mb-6 text-left"
          style={{ color: '#692D94', fontFamily: 'Quicksand, sans-serif' }}
        >
          Get Your Free Case Review Today
        </h2>
        <div className="hidden md:block w-full mb-2 mt-4">
          <DesktopForm />
        </div>
        <div className="block md:hidden w-full mb-2 mt-4">
          <MobileForm />
        </div>
      </div>
    </section>
  );
};
 
export default BabyFoodTwo;