import React, { useEffect } from 'react';
import PraquatOne from './PraquatOne.jsx';
import SubServiceForm from '../SubServiceForm.jsx';
import Navbar from '../../Navbar/Navbar.jsx';
import Footer from '../../Footer/Footer.jsx';
import PraquatThree from './PraquatThree.jsx';
import PraquatFour from './PraquatFour.jsx';
import PraquatFive from './PraquatFive.jsx';
import PraquatSix from './PraquatSix.jsx';
import PraquatSeven from './PraquatSeven.jsx';
import PraquatEight from './PraquatEight.jsx'; 

const ParaquatMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Navbar />
      <PraquatOne />
      <SubServiceForm />
      <PraquatThree />
      <PraquatFour />
      <PraquatFive />
      <PraquatSix />
      <PraquatEight />
      <PraquatSeven />
      <Footer />
    </div>
  );
};

export default ParaquatMain;


// src\components\Home\HomeTwo.jsx