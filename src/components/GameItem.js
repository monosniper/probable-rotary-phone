import React, {useContext} from 'react';
import {Button, IconButton} from "rsuite";
import {Link} from "react-router-dom";
import {__GAME_DEMO_ROUTE} from "../utils/routes";
import {Context} from "../index";
import {AiTwotoneDelete} from "react-icons/all";
import {useTranslation} from "react-i18next";

const GameItem = (props) => {

    const {store} = useContext(Context);
    const handlePushOpen = () => store.setPushModal(true);
    const { t } = useTranslation();


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
                            <Button onClick={handlePushOpen} className="pink-btn rounded" size='sm'>{t('play')}</Button>
                        ) : (
                            <Button onClick={() => store.setLoginModel(true)} className="pink-btn rounded"
                                    size='sm'>{t('play')}</Button>
                        )}
                        <Link to={__GAME_DEMO_ROUTE + props.slug + '/' + props.launcher} className="game-list-item-demo">{t('demo')}</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default GameItem;