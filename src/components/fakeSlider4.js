import React, {useContext, useEffect, useState} from 'react';
import Carousel from 'react-elastic-carousel'
import * as PropTypes from "prop-types";
import {Avatar} from "rsuite";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useTranslation} from "react-i18next";

const FakeSlider4 = (props) => {

    const [items, setItems] = useState(props.games.length ? [
        generateAward(),
        generateAward(),
        generateAward(),
        generateAward(),
        generateAward(),
        generateAward(),
    ] : []);

    function generateAward() {
        const game = props.games[Math.floor(Math.random() * props.games.length)];
        const id = getRandomInt(1000, 9999) + '****';
        const src = `${process.env.REACT_APP_API_URL}/games/${game.image}`;
        const amount = getRandomInt(1000, 9999);
        const title = game.name.replace(new RegExp('_', 'g'), ' ').substr(0, 20) + '...';

        return <Award key={id} src={src} id={id} amount={amount} game={title}/>
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
                <div className="winner-card-winner-title">{props.amount} $ в {props.game}</div>
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
            <h5 className="winner-card-title">{t('big_wins')}</h5>
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

export default FakeSlider4;