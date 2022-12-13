import React, {useContext, useEffect, useState} from 'react';
import Carousel from 'react-elastic-carousel'
import {Col, Row} from "reactstrap";
import Game1 from '../assets/images/games/1.jpg';
import Game2 from '../assets/images/games/2.jpg';
import Game3 from '../assets/images/games/3.jpg';
import Game4 from '../assets/images/games/4.jpg';
import Game5 from '../assets/images/games/5.jpg';
import * as PropTypes from "prop-types";
import {Avatar} from "rsuite";
import {v4 as uuid} from 'uuid';
import moment from "moment";
import 'moment/locale/ru';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useTranslation} from "react-i18next";

function Winner(props) {
    return <div className="winner-card-winner">
        <Avatar circle src={props.src}/>
        <span className="winner-card-winner-id">ID: {props.id}</span>
        <span className="winner-card-winner-amount">- {props.amount} $</span>
    </div>
}

Winner.propTypes = {
    amount: PropTypes.number,
    id: PropTypes.string
};
const FakeSlider1 = (props) => {
    const { t } = useTranslation();

    const [items, setItems] = useState([
        generateWinner(),
        generateWinner(),
        generateWinner(),
        generateWinner(),
    ]);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function generateWinner() {
        const key = uuid();
        const id = getRandomInt(1000, 9999);
        const amount = getRandomInt(100, 4000);
        const src = `${process.env.REACT_APP_API_URL}/games/${props.games[Math.floor(Math.random() * props.games.length)].image}`;

        return <Winner key={key} src={src} id={id + '****'} amount={amount}/>
    }

    function getWidth() {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
        );
    }

    function getItemsToShowCount() {
        const width = getWidth();

        return width < 500 ? 2 : 3;
    }

    return (
        <Row className='winner-card'>
            <Col sm={12} md={2}>{t('now_winning')}:</Col>
            <Col sm={12} md={8}>
                <Carousel
                    children={items}
                    enableTilt={true}
                    itemsToShow={getItemsToShowCount()}
                    isRTL={false}
                    pagination={false}
                    showArrows={false}
                    enableAutoPlay={true}
                    onChange={(currentItem, pageIndex) => {
                        if (currentItem.index === items.length - 3) {
                            setItems([...items, generateWinner()]);
                        }
                    }
                    }>

                </Carousel>
            </Col>
            <Col sm={12} md={2}>{moment().locale('ru').format('DD MMMM yyyy')}</Col>
        </Row>
    );
};

export default observer(FakeSlider1);