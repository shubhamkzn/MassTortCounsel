import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeMain from './components/Home/HomeMain';
import PrivacyPolicy from './components/PrivacyPolicy';
import Disclaimer from './components/Disclaimer';
import Depomain from './components/SubServices/depo/DepoMain.jsx'; 
import BabyfoodMain from './components/SubServices/babyfood/BabyFoodMain.jsx';
import ParaquatMain from './components/SubServices/paraquat/PraquatMain.jsx';
import RoundUpMain from './components/SubServices/roundup/RoundupMain.jsx';
import ServiceMain from './components/Service/ServiceMain.jsx';
import AboutUs from './components/AboutUs/AboutMain.jsx';
import ContactUs from './components/ContactUs/ContactMain.jsx'; 
import AFFFMain from './components/SubServices/AFFF/AFFFMain.jsx'; 
import BardPowerPortMain from './components/SubServices/BardPowerPort/BardPowerPortMain.jsx';
import TalcumMain from './components/SubServices/TalcumPowder/TalcumPowderMain.jsx';
import TransvaginalMain from './components/SubServices/TransvaginalMesh/TransvaginalMain.jsx';
import UltraProcessedMain from './components/SubServices/UltraProcessedFood/UltraProcessedMain.jsx';
import OxbrytaMain from './components/SubServices/Oxbryta/OxbrytaMain.jsx';
import PFASMain from './components/SubServices/PFAS/PFASMain.jsx';


const App = () => {
   const router = createBrowserRouter([
      {
        path: "/",
        element:<HomeMain/>,  
      },
      {
        path: "/PrivacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/Disclaimer",
        element: <Disclaimer />,
      },
      {
        path: "/Service/Depo-Provera-Lawsuit",
        element: <Depomain />,
      },
      {
        path: "/Service/Toxic-Baby-Food-Lawsuit",
        element: <BabyfoodMain />,
      },
      {
        path: "/Service/Paraquat-Lawsuit",
        element: <ParaquatMain />,
      },
      {
        path: "/Service/Roundup-Lawsuit",
        element: <RoundUpMain />,
      },
      {
        path: "/Services",
        element: <ServiceMain />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "/Service/AFFF-Firefighting-Foam-Lawsuit",
        element: <AFFFMain />,
      },
      {
        path: "/Service/Bard-PowerPort-Lawsuit",
        element: <BardPowerPortMain />,
      },
      {
        path: "/Service/Talcum-Powder-Lawsuit",
        element: <TalcumMain />,
      },
      {
        path: "/Service/Transvaginal-Mesh-Lawsuit",
        element: <TransvaginalMain />,
      },
      {
        path: "/UltraProcessedMain",
        element: <UltraProcessedMain />,
      },
      {
        path: "/Service/Oxbryta-Lawsuit",
        element: <OxbrytaMain />,
      },
      {
        path: "/Service/PFAS-Contamination-Lawsuit",
        element: <PFASMain />,
      }  

   ])
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  )
}

export default App