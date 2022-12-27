import React, {useContext, useRef} from 'react';
import {AiOutlineCaretLeft, AiOutlineCaretRight} from "react-icons/ai";
import {Icon} from "@rsuite/icons";
import {Autoplay, Navigation} from "swiper";
import {SwiperSlide, Swiper, useSwiper} from "swiper/react";
import {__GAME_DEMO_ROUTE} from "../utils/routes";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Context} from "../index";

const SlotsSlider = ({ games, label, id, active=false }) => {

    const {store} = useContext(Context);
    const handlePushOpen = () => store.setPushModal(true);
    const { t } = useTranslation();

    return (
        <div className={'slots-slider'}>
            <div className="slots-slider__header">
                <div className="slots-slider__label">{label}</div>
                {/*<div className="slots-slider__control">*/}
                {/*    <button className="slots-slider__btn" id={`slots-slider__prev-${id}`}>*/}
                {/*        <Icon as={AiOutlineCaretLeft} size={'1em'} />*/}
                {/*    </button>*/}
                {/*    <button className="slots-slider__btn" id={`slots-slider__next-${id}`}>*/}
                {/*        <Icon as={AiOutlineCaretRight} size={'1em'} />*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
            {active ? (
                <div className={"slots-slider__wrapper gamess"}>
                    {games.map(({ slug, name, launcher, image }) => (
                        <div className="slot" key={'game-'+slug}>
                            <div className="slot__overflow"></div>
                            <div className="slot__img"  style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/games/${image})`}}></div>
                            <div className="slot__card">
                                <div className="slot__title">{name}</div>
                                {store.isAuth ? (
                                    <button onClick={handlePushOpen} className="slot__btn">{t('play')}</button>
                                ) : (
                                    <button onClick={() => store.setLoginModel(true)} className="slot__btn">{t('play')}</button>
                                )}
                                <Link to={__GAME_DEMO_ROUTE + slug + '/' + launcher} className="slot__btn slot__btn_second">{t('demo')}</Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : <Swiper
                spaceBetween={50}
                modules={[Autoplay, Navigation]}
                autoplay={{
                    delay: 3000,
                }}
                navigation={true}
                className={"slots-slider__wrapper"}
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
            >
                {games.map(({ slug, name, launcher, image }) => (
                    <SwiperSlide key={'game-'+slug}>
                        <div className="slot">
                            <div className="slot__overflow"></div>
                            <div className="slot__img"  style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/games/${image})`}}></div>
                            <div className="slot__card">
                                <div className="slot__title">{name}</div>
                                {store.isAuth ? (
                                    <button onClick={handlePushOpen} className="slot__btn">{t('play')}</button>
                                ) : (
                                    <button onClick={() => store.setLoginModel(true)} className="slot__btn">{t('play')}</button>
                                )}
                                <Link to={__GAME_DEMO_ROUTE + slug + '/' + launcher} className="slot__btn slot__btn_second">{t('demo')}</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>}
        </div>
    );
};

export default SlotsSlider;