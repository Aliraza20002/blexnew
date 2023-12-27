import React from 'react';
import { Element } from 'react-scroll';
import Slider from '../Components/Slider';
import '../Style/All.css';
import '../Style/Responsive.css';

const Herosection = () => {
  return (
    <Element name="hero">
      <div id="herosection" className="hero_area" style={{minHeight:'942px'}}>
        <Slider />
      </div>
    </Element>
  );
};

export default Herosection;
