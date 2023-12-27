import React, { useEffect, useState } from 'react';
import Herosection from '../Components/Herosection';
import Aboutus from '../Components/Aboutus'
import Topbar from '../Components/Topbar'
import Footer from "../Components/Footer"
import { scroller } from 'react-scroll';

const About = () => {
  const sections = ['herosection', 'aboutus', 'footer'];

  const [activeSection, setActiveSection] = useState(sections[0]);

  const handleWheelScroll = (event) => {
    // Check if the wheel is scrolled down or up
    const isScrollDown = event.deltaY > 0;

    // Find the index of the current active section
    const currentIndex = sections.indexOf(activeSection);

    if (isScrollDown) {
      // Scroll down logic
      if (currentIndex < sections.length - 1) {
        const nextSection = sections[currentIndex + 1];
        scroller.scrollTo(nextSection, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
        setActiveSection(nextSection);
      }
    } else {
      // Scroll up logic
      if (currentIndex > 0) {
        const prevSection = sections[currentIndex - 1];
        scroller.scrollTo(prevSection, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
        setActiveSection(prevSection);
      }
    }
  };

  useEffect(() => {
    // Initial scroll listener
    const handleScroll = () => {
      // Get the current scroll position
      const scrollPosition = window.scrollY;

      // Determine the active section based on the scroll position
      const currentSection = sections.find(
        (section) => {
          const element = document.getElementById(section);
          return element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight;
        }
      );

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]); // Re-run the effect when the activeSection changes
  return (
    <div onWheel={handleWheelScroll}>
    <Topbar/>
    <Herosection />
    <Aboutus/>
    <Footer/>
    

    </div>
  )
}

export default About