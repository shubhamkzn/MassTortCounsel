import React, { useEffect } from 'react';
import BardPowerOne from './BardPowerOne.jsx';
import SubServiceForm from '../SubServiceForm.jsx';
import Navbar from '../../Navbar/Navbar.jsx';
import Footer from '../../Footer/Footer.jsx';
import BardPowerThree from './BardPowerThree.jsx';
import BardPowerFour from './BardPowerFour.jsx';
import BardPowerFive from './BardPowerFive.jsx';
import BardPowerSix from './BardPowerSix.jsx';
import BardPowerSeven from './BardPowerSeven.jsx';
import BardPowerEight from './BardPowerEight.jsx'; // Assuming you have a HomeEight component

const BardPowerMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Navbar />
      <BardPowerOne />
      <SubServiceForm />
      <BardPowerThree />
      <BardPowerFour />
      <BardPowerFive />
      <BardPowerSix />
      <BardPowerEight />
      <BardPowerSeven />
      <Footer />
    </div>
  );
};

export default BardPowerMain;


