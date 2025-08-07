import React, { useEffect } from 'react';
import HomeOne from './HomeOne.jsx';
import SubServiceForm from '../SubServiceForm.jsx';
import Navbar from '../../Navbar/Navbar.jsx';
import Footer from '../../Footer/Footer.jsx';
import HomeThree from './HomeThree.jsx';
import HomeFour from './HomeFour.jsx';
import HomeFive from './HomeFive.jsx';
import HomeSix from './HomeSix.jsx';
import HomeSeven from './HomeSeven.jsx';
import HomeEight from './HomeEight.jsx'; // Assuming you have a HomeEight component

const UltraProcessedMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Navbar />
      <HomeOne />
      <SubServiceForm />
      <HomeThree />
      <HomeFour />
      <HomeFive />
      <HomeSix />
      <HomeEight />
      <HomeSeven />
      <Footer />
    </div>
  );
};

export default UltraProcessedMain;


