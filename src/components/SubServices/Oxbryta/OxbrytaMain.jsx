import React, { useEffect } from 'react';
import OxbrytaOne from './OxbrytaOne.jsx';
import SubServiceForm from '../SubServiceForm.jsx';
import Navbar from '../../Navbar/Navbar.jsx';
import Footer from '../../Footer/Footer.jsx';
import OxbrytaThree from './OxbrytaThree.jsx';
import OxbrytaFour from './OxbrytaFour.jsx';
import OxbrytaFive from './OxbrytaFive.jsx';
import OxbrytaSix from './OxbrytaSix.jsx';
import OxbrytaSeven from './OxbrytaSeven.jsx';
import OxbrytaEight from './OxbrytaEight.jsx'; // Assuming you have a OxbrytaEight component

const OxbrytaMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Navbar />
      <OxbrytaOne />
      <SubServiceForm />
      <OxbrytaThree />
      <OxbrytaFour />
      <OxbrytaFive />
      <OxbrytaSix />
      <OxbrytaEight />
      <OxbrytaSeven />
      <Footer />
    </div>
  );
};

export default OxbrytaMain;

