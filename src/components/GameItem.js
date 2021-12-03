import React from 'react';
import {Button} from "rsuite";
import {Link} from "react-router-dom";
import {GAME_ROUTE} from "../utils/routes";

const GameItem = (props) => {
    return (
        <div className='game-list-item'>
            <div className="game-list-item-bg" style={{backgroundImage: `url(${props.src})`}} />
            <div className="game-list-item-overflow">
                <span className="game-list-item-title">{props.title}</span>
                <Link to={GAME_ROUTE} className="pink-btn rounded" size='sm'>Играть</Link>
                <Link to={GAME_ROUTE} className="game-list-item-demo">Демо</Link>
            </div>
        </div>
    );
};

export default GameItem;