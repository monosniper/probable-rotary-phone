import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import bg from "../assets/images/bg.jpg";
import bg2 from "../assets/images/bg2.jpg";
import bg3 from "../assets/images/bg3.jpeg";
import banner from "../assets/images/banner.png";
import {STOCKS_ROUTE} from "../utils/routes";
import {Button} from "rsuite";
import {Link} from "react-router-dom";

const Slider = () => {
    return (
        <div className="banner" style={{backgroundImage: `url(${banner})`}}>
            <div>
                <h3 style={{marginBottom: '1rem'}} className="banner-title">Розыгрыш 1 эфириума</h3>
                <div className="banner-body">
                    <Link to={STOCKS_ROUTE}>
                        <Button className="pink-btn">Подробнее</Button>
                    </Link>
                </div>
            </div>
        </div>
        // <AwesomeSlider>
        //     <div data-src={banner} />
        // </AwesomeSlider>
    );
};

export default Slider;