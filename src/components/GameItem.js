import React, {useContext} from 'react';
import {Button} from "rsuite";
import {Link} from "react-router-dom";
import {__GAME_DEMO_ROUTE, __GAME_ROUTE, GAME_DEMO_ROUTE, GAME_ROUTE} from "../utils/routes";
import {Context} from "../index";

const GameItem = (props) => {

    const {store} = useContext(Context);

    return (
        <div className='game-list-item'>
            <div className="game-list-item-bg" style={{backgroundImage: `url(${props.src})`}} />
            <div className="game-list-item-overflow">
                <span className="game-list-item-title">{props.title}</span>
                {store.isAuth ? (
                    <Link to={__GAME_ROUTE + props.slug} className="pink-btn rounded" size='sm'>Играть</Link>
                ) : (
                    <Button onClick={() => store.setLoginModel(true)} className="pink-btn rounded" size='sm'>Играть</Button>
                )}

                <Link to={__GAME_DEMO_ROUTE + props.slug} className="game-list-item-demo">Демо</Link>
            </div>
        </div>
    );
};

export default GameItem;