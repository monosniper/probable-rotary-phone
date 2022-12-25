import React from 'react';
import 'react-awesome-slider/dist/styles.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import {useTranslation} from "react-i18next";

import banner1 from '../assets/images/banners/1.png'
import banner2 from '../assets/images/banners/2.png'
import banner3 from '../assets/images/banners/3.png'
import banner4 from '../assets/images/banners/4.png'
import banner5 from '../assets/images/banners/5.png'
import {Autoplay} from "swiper";

const Slider = () => {
    const { t } = useTranslation();

    return (
        // <div className="banner" style={{backgroundImage: `url(${banner})`}}>
        //     <div>
        //         <h3 style={{marginBottom: '1rem'}} className="banner-title">{t('stock_eph')}</h3>
        //         <div className="banner-body">
        //             <Link to={STOCKS_ROUTE}>
        //                 <Button className="pink-btn">{t('details')}</Button>
        //             </Link>
        //         </div>
        //     </div>
        // </div>
        // <AwesomeSlider>
        //     <div data-src={banner} />
        // </AwesomeSlider>

        <Swiper
            spaceBetween={50}
            modules={[Autoplay]}
            autoplay={{
                delay: 3000,
            }}
            slidesPerView={1}
            loop={true}
            breakpoints={{
                500: {
                    slidesPerView: 2,
                },
                1000: {
                    slidesPerView: 3,
                },
            }}
        >
            <SwiperSlide>
                <a
                    href={'#'}
                    className="slide"
                    style={{backgroundImage: `url('${banner1}')`}}
                />
            </SwiperSlide>
            <SwiperSlide>
                <a
                    href={'#'}
                    className="slide"
                    style={{backgroundImage: `url('${banner2}')`}}
                />
            </SwiperSlide>
            <SwiperSlide>
                <a
                    href={'#'}
                    className="slide"
                    style={{backgroundImage: `url('${banner3}')`}}
                />
            </SwiperSlide>
            <SwiperSlide>
                <a
                    href={'#'}
                    className="slide"
                    style={{backgroundImage: `url('${banner4}')`}}
                />
            </SwiperSlide>
            <SwiperSlide>
                <a
                    href={'#'}
                    className="slide"
                    style={{backgroundImage: `url('${banner5}')`}}
                />
            </SwiperSlide>
            <SwiperSlide>
                <a
                    href={'#'}
                    className="slide"
                    style={{backgroundImage: `url('${banner1}')`}}
                />
            </SwiperSlide>
            <SwiperSlide>
                <a
                    href={'#'}
                    className="slide"
                    style={{backgroundImage: `url('${banner2}')`}}
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;