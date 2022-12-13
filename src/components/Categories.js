import React from 'react';
import {Icon} from "@rsuite/icons";
import {GiCherry, GiHorseHead} from "react-icons/gi";
import {SwiperSlide, Swiper} from "swiper/react";
import {Autoplay} from "swiper";
import {AiOutlineStock} from "react-icons/ai";
import {MdCasino, MdLiveTv, MdSportsFootball} from "react-icons/md";

const Categories = () => {
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
                    <div className="category">
                        <div className="category__icon">
                            <Icon as={GiCherry} size="4em" />
                        </div>
                        <div className="category__name">
                            Слоты
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category">
                        <div className="category__icon">
                            <Icon as={MdCasino} size="4em" />
                        </div>
                        <div className="category__name">
                            Все казино
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category">
                        <div className="category__icon">
                            <Icon as={GiHorseHead} size="4em" />
                        </div>
                        <div className="category__name">
                            Виртуальный спорт
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category">
                        <div className="category__icon">
                            <Icon as={AiOutlineStock} size="4em" />
                        </div>
                        <div className="category__name">
                            Акции
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category">
                        <div className="category__icon">
                            <Icon as={MdSportsFootball} size="4em" />
                        </div>
                        <div className="category__name">
                            Спорт
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category">
                        <div className="category__icon">
                            <Icon as={MdLiveTv} size="4em" />
                        </div>
                        <div className="category__name">
                            Live казино
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Categories;