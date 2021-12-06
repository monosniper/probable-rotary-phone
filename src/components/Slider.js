import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import bg from "../assets/images/bg.jpg";
import bg2 from "../assets/images/bg2.jpg";
import bg3 from "../assets/images/bg3.jpeg";
import banner from "../assets/images/banner.jpg";

const Slider = () => {
    return (
        <AwesomeSlider>
            <div data-src={banner} />
        </AwesomeSlider>
    );
};

export default Slider;