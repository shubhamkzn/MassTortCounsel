import React, { useEffect } from 'react';
import PFASOne from './PFASOne.jsx';
import SubServiceForm from '../SubServiceForm.jsx';
import Navbar from '../../Navbar/Navbar.jsx';
import Footer from '../../Footer/Footer.jsx';
import PFASThree from './PFASThree.jsx';
import PFASFour from './PFASFour.jsx';
import PFASFive from './PFASFive.jsx';
import PFASSIX from './PFASSIX.jsx';
import PFASSeven from './PFASSeven.jsx'; 
import PFASEight from './PFASEight.jsx';

const PFASMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Navbar />
      <PFASOne />
      <SubServiceForm />
      <PFASThree />
      <PFASFour />
      <PFASFive />
      <PFASSIX />
      <PFASSeven />
      <PFASEight />
      <Footer />
    </div>
  );
};

export default PFASMain;

