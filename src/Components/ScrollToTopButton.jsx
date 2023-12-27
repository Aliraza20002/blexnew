import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // You can use any icon library

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    setIsVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    // Smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      style={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#1d2836',width:'3rem',height:'3rem',borderRadius:'7px',cursor:'pointer'}}
    >
      <FaArrowUp />
    </div>
  );
};

export default ScrollToTopButton;
