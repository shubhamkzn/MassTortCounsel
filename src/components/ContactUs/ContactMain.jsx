import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ContactOne from './ContactOne'
import HomeTwo from "../Home/HomeTwo"
import ContactThree from './ContactThree'
const ContactMain = () => {
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