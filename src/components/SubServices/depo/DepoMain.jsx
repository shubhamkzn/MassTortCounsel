import React, { useEffect } from 'react';
import DepoOne from './DepoOne.jsx';
import SubServiceForm from '../SubServiceForm.jsx'; 
import Navbar from '../../Navbar/Navbar.jsx';
import Footer from '../../Footer/Footer.jsx';
import DepoThree from './DepoThree.jsx';
import DepoFour from './DepoFour.jsx';
import DepoFive from './DepoFive.jsx';
import DepoSix from './DepoSix.jsx';
import DepoSeven from './DepoSeven.jsx';
import DepoEight from './DepoEight.jsx'; // Assuming you have a HomeEight component

const Depomain = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);





  return (
    <div>
      <Navbar />
      <DepoOne />
      <SubServiceForm />
      <DepoThree />
      <DepoFour />
      <DepoFive />
      <DepoSix />
      <DepoEight />
      <DepoSeven />
      <Footer />
    </div>
  );
};

export default Depomain;


// src\components\Home\HomeTwo.jsx