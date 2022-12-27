import React, {useContext, useEffect} from 'react';
import {Icon} from "@rsuite/icons";
import {GiCherry, GiHorseHead} from "react-icons/gi";
import {SwiperSlide, Swiper} from "swiper/react";
import {Autoplay} from "swiper";
import {AiOutlineStock} from "react-icons/ai";
import {MdCasino, MdLiveTv, MdSportsFootball} from "react-icons/md";
import {Link} from "react-router-dom";
import store from '../store'
import {useTranslation} from "react-i18next";
import {Context} from "../index";
import {observer} from "mobx-react-lite";


const Categories = () => {
    const { t } = useTranslation();
    const {store} = useContext(Context);

    return (
        <div className={'categories-wrapper'}>
            <Swiper
                spaceBetween={50}
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                }}
                slidesPerView={1}
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                    },
                    400: {
                        slidesPerView: 2,
                    },
                    600: {
                        slidesPerView: 3,
                    },
                    800: {
                        slidesPerView: 4,
                    },
                    1000: {
                        slidesPerView: 5,
                    },
                    1350: {
                        slidesPerView: 6,
                    }
                }}
                loop={true}
            >
                <SwiperSlide>
                    <div onClick={() => store.setCategory('slots')} className={"category" + (store.category === 'slots' ? ' active' : '')}>
                        <div className="category__icon">
                            <Icon as={GiCherry} size="4em" />
                        </div>
                        <div className="category__name">
                            {t('categories.slots')}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div onClick={() => store.setCategory('all_casino')} className={"category" + (store.category === 'all_casino' ? ' active' : '')}>
                        <div className="category__icon">
                            <Icon as={MdCasino} size="4em" />
                        </div>
                        <div className="category__name">
                            {t('categories.all_casino')}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div onClick={() => store.setCategory('virtual_sport')} className={"category" + (store.category === 'virtual_sport' ? ' active' : '')}>
                        <div className="category__icon">
                            <Icon as={GiHorseHead} size="4em" />
                        </div>
                        <div className="category__name">
                            {t('categories.virtual_sport')}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div onClick={() => store.setCategory('drawings')} className={"category" + (store.category === 'drawings' ? ' active' : '')}>
                        <div className="category__icon">
                            <Icon as={AiOutlineStock} size="4em" />
                        </div>
                        <div className="category__name">
                            {t('categories.drawings')}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div onClick={() => store.setCategory('sport')} className={"category" + (store.category === 'sport' ? ' active' : '')}>
                        <div className="category__icon">
                            <Icon as={MdSportsFootball} size="4em" />
                        </div>
                        <div className="category__name">
                            {t('categories.sport')}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div onClick={() => store.setCategory('live_casino')} className={"category" + (store.category === 'live_casino' ? ' active' : '')}>
                        <div className="category__icon">
                            <Icon as={MdLiveTv} size="4em" />
                        </div>
                        <div className="category__name">
                            {t('categories.live_casino')}
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default observer(Categories);