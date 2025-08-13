import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ContactOne from './ContactOne'
import HomeTwo from "../Home/HomeTwo"
import ContactThree from './ContactThree'
import { useEffect } from 'react'
const ContactMain = () => {
      useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', 
    });
  }, []);
  return (
    <div>
        <Navbar />
        <ContactOne />
      <HomeTwo/>
        <ContactThree />    
        <Footer />
    </div>
  )
}

export default ContactMain