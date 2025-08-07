import React, { useEffect } from 'react';
import BabyFoodOne from './BabyFoodOne.jsx';
import SubServiceForm from '../SubServiceForm.jsx';
import Navbar from '../../Navbar/Navbar.jsx';
import Footer from '../../Footer/Footer.jsx';
import BabyFoodThree from './BabyFoodThree.jsx';
import BabyFoodFour from './BabyFoodFour.jsx';
import BabyFoodFive from './BabyFoodFive.jsx';
import BabyFoodSix from './BabyFoodSix.jsx';
import BabyFoodSeven from './BabyFoodSeven.jsx';
import BabyFoodEight from './BabyFoodEight.jsx'; 

const BabyFoodMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Navbar />
      <BabyFoodOne />
      <SubServiceForm />
      <BabyFoodThree />
      <BabyFoodFour />
      <BabyFoodFive />
      <BabyFoodSix />
      <BabyFoodEight />
      <BabyFoodSeven />
      <Footer />
    </div>
  );
};

export default BabyFoodMain;
