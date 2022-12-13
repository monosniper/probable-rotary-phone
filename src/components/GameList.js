import React, {useContext, useEffect, useState} from 'react';
import GameItem from "./GameItem";
import {Context} from "../index";
import {Button, Form, Modal} from "rsuite";

const GameList = (props) => {

    const {store} = useContext(Context);

    const [games, setGames] = useState([]);

    useEffect(() => {
        if (!props.games) {
            let isMounted = true;
            store.getGames().then((games) => isMounted && setGames(games));
            return () => {
                isMounted = false
            };
        }
    }, []);

    return (
        <div className={`game-list ${props.forAdmin && 'for-admin'}`}>
            {props.games ? (
                props.games.map((game, i) => <GameItem deleteGame={props.deleteGame} forAdmin={props.forAdmin}
                                                       key={game + '-' + i} {...game} />)
            ) : (
                games.map((game, i) => <GameItem key={game + '-' + i} {...game} />)
            )}
        </div>
    )
        ;
};

export default GameList;