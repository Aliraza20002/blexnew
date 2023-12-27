import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import About from './Pages/Aboutus';
import Contact from './Pages/Contact';

import ServiceMain from './Pages/ServiceMain';
import AboutHome from './Components/AboutHome';
import Accordion from './Components/Acordian';
import Footer from './Components/Footer';
import Herosection from './Components/Herosection';
import SliderText from './Components/SliderText';

const AllRoutes = () => {
  return (
    <Routes>
    {/* Define your routes using the Route component */}

    {/* My three menu pages routes start here  */}
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contactus" element={<Contact/>} />
    {/* Menu pages routes end here  */}
    
     
     {/* My homepage section rutes start here  */}
    <Route path="/herosection" element={<Herosection/>} />
    <Route path="/slidertext" element={<SliderText/>} />
    <Route path="/abouthome" element={<AboutHome/>} />
    <Route path="/service" element={<ServiceMain/>} />
    <Route path="/acordain" element={<Accordion/>} />
    <Route path="/footer" element={<Footer/>} />
     {/* and End here  */}
    

  </Routes>
  )
}

export default AllRoutes