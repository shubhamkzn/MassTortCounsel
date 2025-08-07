import React, { useEffect } from 'react';
import RoundUpOne from './RoundUpOne.jsx';
import SubServiceForm from '../SubServiceForm.jsx'; 
import Navbar from '../../Navbar/Navbar.jsx';
import Footer from '../../Footer/Footer.jsx';
import RoundUpThree from './RoundUpThree.jsx';
import RoundUpFour from './RoundUpFour.jsx';
import RoundUpFive from './RoundUpFive.jsx';
import RoundUpSix from './RoundUpSix.jsx';
import RoundUpSeven from './RoundUpSeven.jsx';
import RoundUpEight from './RoundUpEight.jsx'; // Assuming you have a RoundUpEight component

const RoundUpupMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Navbar />
      <RoundUpOne />
      <SubServiceForm />
      <RoundUpThree />
      <RoundUpFour />
      <RoundUpFive />
      <RoundUpSix />
      <RoundUpEight />
      <RoundUpSeven />
      <Footer />
    </div>
  );
};

export default RoundUpupMain;


// src\components\RoundUp\RoundUpTwo.jsx