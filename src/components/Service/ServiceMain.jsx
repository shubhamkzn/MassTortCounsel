import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import ServiceOne from './ServiceOne';
import ServiceTwo from './ServiceTwo';
import ServiceThree from './ServiceThree';
import ServiceFour from './ServiceFour';
import ServiceFive from './ServiceFive';
import Footer from '../Footer/Footer';

const ServiceMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Navbar />
      <ServiceOne />
      <ServiceTwo />
      <ServiceThree />
      <ServiceFour />
      <ServiceFive />
      <Footer />
    </div>
  );
};

export default ServiceMain;
