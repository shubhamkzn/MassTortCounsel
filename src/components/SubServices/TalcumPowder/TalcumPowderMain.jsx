import React, { useEffect } from 'react';
import TalcumPowderOne from './TalcumPowderOne.jsx';
import SubServiceForm from '../SubServiceForm.jsx';
import Navbar from '../../Navbar/Navbar.jsx';
import Footer from '../../Footer/Footer.jsx';
import TalcumPowderThree from './TalcumPowderThree.jsx';
import TalcumPowderFour from './TalcumPowderFour.jsx';
import TalcumPowderFive from './TalcumPowderFive.jsx';
import TalcumPowderSix from './TalcumPowderSix.jsx';
import TalcumPowderSeven from './TalcumPowderSeven.jsx';
import TalcumPowderEight from './TalcumPowderEight.jsx'; 

const TalcumMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Navbar />
      <TalcumPowderOne />
      <SubServiceForm />
      <TalcumPowderThree />
      <TalcumPowderFour />
      <TalcumPowderFive />
      <TalcumPowderSix />
      <TalcumPowderEight />
      <TalcumPowderSeven />
      <Footer />
    </div>
  );
};

export default TalcumMain;


