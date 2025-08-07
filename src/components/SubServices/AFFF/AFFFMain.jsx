import React, { useEffect } from 'react';
import AFFOne from './AFFOne.jsx';

import SubServiceForm from '../SubServiceForm.jsx';
import Navbar from '../../Navbar/Navbar.jsx';
import Footer from '../../Footer/Footer.jsx';
import AFFThree from './AFFThree.jsx';
import AFFFour from './AFFFour.jsx';
import AFFFive from './AFFFive.jsx';
import AFFSix from './AFFSix.jsx';
import AFFSeven from './AFFSeven.jsx';
import AFFEight from './AFFEight.jsx'; // Assuming you have a HomeEight component

const AFFFMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Navbar />
      <AFFOne />
      <SubServiceForm />
<AFFThree />
      <AFFFour />
      <AFFFive />
      <AFFSix />
      <AFFEight />
      <AFFSeven />
      <Footer />
    </div>
  );
};

export default AFFFMain;

