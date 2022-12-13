import React, {useContext, useEffect, useState} from 'react';
import Carousel from 'react-elastic-carousel'
import Game1 from '../assets/images/games/1.jpg';
import Game2 from '../assets/images/games/2.jpg';
import Game3 from '../assets/images/games/3.jpg';
import Game4 from '../assets/images/games/4.jpg';
import Game5 from '../assets/images/games/5.jpg';
import * as PropTypes from "prop-types";
import {Avatar} from "rsuite";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useTranslation} from "react-i18next";

const FakeSlider3 = (props) => {

    const [items, setItems] = useState([
        generateAward(),
        generateAward(),
        generateAward(),
        generateAward(),
        generateAward(),
    ]);

    function generateAward() {
        const id = getRandomInt(1000, 9999) + '****';
        const src = `${process.env.REACT_APP_API_URL}/games/${props.games[Math.floor(Math.random() * props.games.length)].image}`;
        const bonus = getRandomInt(100, 1000);

        return <Award key={id} src={src} id={id} bonus={bonus}/>
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function Award(props) {
        return <div className="winner-card-winner">
            <Avatar circle src={props.src}/>
            <div className='winner-card-winner-right'>
                <div className="winner-card-winner-id">ID: {props.id}</div>
                <div className="winner-card-winner-title">БОНУС: {props.bonus} $</div>
            </div>
        </div>
    }

    Award.propTypes = {
        title: PropTypes.number,
        id: PropTypes.string,
        src: PropTypes.string
    };

    const { t } = useTranslation();


    return (
        <div className="winner-card winner-card-vertical">
            <h5 className="winner-card-title">{t('given_stocks')}</h5>
            <Carousel
                children={items}
                enableTilt={true}
                itemsToShow={4}
                isRTL={false}
                pagination={false}
                showArrows={false}
                enableAutoPlay={true}
                verticalMode={true}
                onChange={(currentItem, pageIndex) => {
                    if (currentItem.index === items.length - 4) {
                        setItems([...items, generateAward()]);
                    }
                }}
            />
        </div>
    );
};

export default observer(FakeSlider3);