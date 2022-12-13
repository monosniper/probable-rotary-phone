import React, {useContext, useEffect, useState} from 'react';
import Carousel from 'react-elastic-carousel'
import SamsungImage from '../assets/images/awards/samsung.png';
import IphoneImage from '../assets/images/awards/iphone.png';
import PlayStationImage from '../assets/images/awards/playstation.png';
import OculusImage from '../assets/images/awards/oculus.png';
import TeslaImage from '../assets/images/awards/tesla.png';
import WatchImage from '../assets/images/awards/watch.png';
import FordImage from '../assets/images/awards/ford.png';
import * as PropTypes from "prop-types";
import {Avatar} from "rsuite";
import {v4 as uuid} from 'uuid';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useTranslation} from "react-i18next";

const FakeSlider2 = (props) => {

    const awards = [
        {
            title: 'Мустанг квест',
            items: [
                'Ford Mustang',
                'Iphone 11 64gb',
                'Apple Watch Series 4',
            ]
        },
        {
            title: 'Онлайн днюшка',
            items: [
                'Tesla Model 3',
                'Oculus Rift (Black)',
                'Sony PlayStation 4',
            ]
        },
        {
            title: 'Турнир "Сокровища драконов',
            items: [
                'Samsung 55" 4K',
                'Samsung Galaxy Tab',
                'Iphone 11 64gb',
            ]
        },
    ]

    const item_images = {
        'Samsung 55" 4K': SamsungImage,
        'Samsung Galaxy Tab': SamsungImage,
        'Iphone 11 64gb': IphoneImage,
        'Sony PlayStation 4': PlayStationImage,
        'Oculus Rift (Black)': OculusImage,
        'Tesla Model 3': TeslaImage,
        'Apple Watch Series 4': WatchImage,
        'Ford Mustang': FordImage,
    }

    const [items] = useState(generateAwardGroups());

    function generateAwardGroups() {
        return awards.map(award => {
            const children = award.items.map(item => {
                const key = uuid();
                const id = getRandomInt(1000, 9999) + '****';
                // const src = `${process.env.REACT_APP_API_URL}/games/${props.games[Math.floor(Math.random() * props.games.length)].image}`;
                const src = item_images[item]

                return <Award src={src} id={id} title={item} key={key}/>
            })

            return <AwardGroup key={uuid()} children={children} title={award.title}/>
        });
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
                <div className="winner-card-winner-title">{props.title}</div>
            </div>
        </div>
    }

    Award.propTypes = {
        title: PropTypes.number,
        id: PropTypes.string,
        src: PropTypes.string
    };

    function AwardGroup(props) {
        return <div className="winner-card-group">
            <div className="winner-card-group-title">{props.title}</div>
            <div className="winner-card-group-items">
                {props.children}
            </div>
        </div>
    }

    AwardGroup.propTypes = {
        src: PropTypes.any,
        items: PropTypes.any,
        id: PropTypes.string,
        title: PropTypes.any
    };

    const { t } = useTranslation();

    return (
        <div className="winner-card winner-card-vertical">
            <h5 className="winner-card-title">{t('top_prices')}</h5>
            <Carousel
                children={items}
                enableTilt={true}
                itemsToShow={1}
                isRTL={false}
                pagination={false}
                showArrows={false}
                enableAutoPlay={true}
                verticalMode={true}
                // onChange={(currentItem, pageIndex) => {
                //     if(currentItem.index === items.length - 1) {
                //         console.log(items[currentItem.index - 2].props)
                //         setItems([...items, generateAwardGroup(items[currentItem.index - 2].props)]);
                //     }
                // }}
            />
        </div>
    );
};

export default observer(FakeSlider2);