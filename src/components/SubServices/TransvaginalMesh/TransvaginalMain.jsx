import React, { useEffect } from 'react';
import TransvaginalOne from './TransvaginalOne.jsx';
import SubServiceForm from '../SubServiceForm.jsx';
import Navbar from '../../Navbar/Navbar.jsx';
import Footer from '../../Footer/Footer.jsx';
import TransvaginalThree from './TransvaginalThree.jsx';
import TransvaginalFour from './TransvaginalFour.jsx';
import TransvaginalFive from './TransvaginalFive.jsx';
import TransvaginalSix from './TransvaginalSix.jsx';
import TransvaginalSeven from './TransvaginalSeven.jsx'; 
import TransvaginalEight from './TransvaginalEight.jsx';

const TransvaginalMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Navbar />
      <TransvaginalOne />
      <SubServiceForm />
      <TransvaginalThree />
      <TransvaginalFour />
      <TransvaginalFive />
      <TransvaginalSix />
      <TransvaginalSeven />
      <TransvaginalEight />
      <Footer />
    </div>
  );
};

export default TransvaginalMain;

