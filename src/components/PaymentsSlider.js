import React from 'react';
import {useTranslation} from "react-i18next";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";

import Visa from '../assets/images/payment/VISA.png'
import Bradesco from '../assets/images/payment/BRADESCO.png'
import RuPay from '../assets/images/payment/RuPay.png'
import Pix from '../assets/images/payment/PIX.png'
import AdvCash from '../assets/images/payment/adcash.png'
import PerfectMoney from '../assets/images/payment/perfectmoney.png'
import USDT from '../assets/images/payment/USDT.png'
import Santander from '../assets/images/payment/SANTANDER.png'
import AstroPay from '../assets/images/payment/AstroPay.png'
import Caixa from '../assets/images/payment/CAIXA.png'
import BancoDoBrasil from '../assets/images/payment/BANCODOBRASIL.png'
import Neosurf from '../assets/images/payment/NEO.png'
import Bitcoin from '../assets/images/payment/BTC.png'
import MasterCard from '../assets/images/payment/MasterCard.png'
import Bnb from '../assets/images/payment/BNB.png'
import FlutterWave from '../assets/images/payment/FLUTTERWAVE.png'
import MyBux from '../assets/images/payment/myBux.png'

const PaymentsSlider = () => {
    const { t } = useTranslation();
    const payments = [
        Visa,
        Bradesco,
        RuPay,
        Pix,
        AdvCash,
        PerfectMoney,
        USDT,
        Santander,
        AstroPay,
        Caixa,
        BancoDoBrasil,
        Neosurf,
        Bitcoin,
        MasterCard,
        Bnb,
        FlutterWave,
        MyBux,
    ]

    return (
        <div className={'payments'}>
            <div className="payments__header">
                <div className="payments__label">{t('payments')}</div>
            </div>
            <Swiper
                spaceBetween={50}
                loop={true}
                className={"payments__wrapper"}
                slidesPerView={1}
                breakpoints={{
                    200: {
                        slidesPerView: 2,
                    },
                    400: {
                        slidesPerView: 3,
                    },
                    600: {
                        slidesPerView: 4,
                    },
                    800: {
                        slidesPerView: 5,
                    },
                    1000: {
                        slidesPerView: 6,
                    },
                    1350: {
                        slidesPerView: 7,
                    }
                }}
            >
                {payments.map((src, i) => (
                    <SwiperSlide key={'payment-'+i}>
                        <div className="payment">
                            <img className="payment__img" src={src} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PaymentsSlider;