import React, {useContext} from 'react';
import {Button, IconButton} from "rsuite";
import {Link} from "react-router-dom";
import {__GAME_DEMO_ROUTE, __GAME_ROUTE, GAME_DEMO_ROUTE, GAME_ROUTE} from "../utils/routes";
import {Context} from "../index";
import {AiTwotoneDelete} from "react-icons/all";

const GameItem = (props) => {

    const {store} = useContext(Context);
    const handlePushOpen = () => store.setPushModal(true);

    return (
        <div className='game-list-item'>
            <div className="game-list-item-bg"
                 style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}/games/${props.image})`}}/>
            <div className="game-list-item-overflow">
                <span className="game-list-item-title">{props.name}</span>
                {props.forAdmin ? (
                    <IconButton circle icon={<AiTwotoneDelete/>} onClick={() => props.deleteGame(props.slug)}
                                size='xs'/>
                ) : (
                    <>
                        {store.isAuth ? (
                            <Button onClick={handlePushOpen} className="pink-btn rounded" size='sm'>Играть</Button>
                        ) : (
                            <Button onClick={() => store.setLoginModel(true)} className="pink-btn rounded"
                                    size='sm'>Играть</Button>
                        )}
                        <Link to={__GAME_DEMO_ROUTE + props.slug} className="game-list-item-demo">Демо</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default GameItem;