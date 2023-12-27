import React, { useEffect, useState } from 'react';
import Topbar from '../Components/Topbar';
import Footer from '../Components/Footer';
import Herosection from '../Components/Herosection';
import AboutHome from '../Components/AboutHome';
import Accordion from '../Components/Acordian';
import SliderText from '../Components/SliderText';
import Service from '../Components/Service';
import { scroller } from 'react-scroll';

const Home = () => {
  const sections = ['herosection', 'slidertext', 'abouthome', 'service', 'acordain', 'footer'];

  const [activeSection, setActiveSection] = useState(sections[0]);

  const handleWheelScroll = (event) => {
    const isScrollDown = event.deltaY > 0;
    const currentIndex = sections.indexOf(activeSection);

    if (isScrollDown) {
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
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const currentSection = sections.find(
        (section) => {
          const element = document.getElementById(section);
          return element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight;
        }
      );

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, sections]);

  return (
    <div onWheel={handleWheelScroll}>
      <Topbar />
      <Herosection name="herosection" />
      <SliderText name="slidertext" />
      <AboutHome name="abouthome" />
      <Service name="service" />
      <Accordion name="acordain" />
      <Footer name="footer" />
    </div>
  );
};
export default Home;
