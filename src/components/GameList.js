import React, {useContext, useEffect, useState} from 'react';
import GameItem from "./GameItem";
import {Context} from "../index";

const GameList = (props) => {

    const {store} = useContext(Context);

    const [games, setGames] = useState([]);

    // const games = [
    //     {src: Game1, title: 'Helios Fury', slug: 'helios_fury'},
    //     {src: Game2, title: 'Santa\'s Stack', slug: 'santas_stack'},
    //     {src: Game3, title: 'Royal Potato', slug: 'royal_potato'},
    //     {src: Game4, title: 'Cluster Tumble', slug: 'cluster_tumble'},
    //     {src: Game5, title: 'Wildchemy', slug: 'wildchemy'},
    //     {src: Game1, title: 'Zodiac Infinity Reels', slug: 'zodiac_infinity_reels'},
    //     {src: Game2, title: 'Zombie Circus', slug: 'zombiecircus'},
    //     {src: Game3, title: 'Wild Chapo', slug: 'wild_chapo'},
    //     {src: Game4, title: 'Wild Joker Stacks', slug: 'wild_joker_stacks'},
    //     {src: Game5, title: 'Valkyrie Wild Storm', slug: 'valkyrie_wild_storm'},
    //     {src: Game1, title: 'Spirits Of The Storm', slug: 'spirits_of_the_storm'},
    //     {src: Game2, title: 'Money train', slug: 'moneytrain'},
    //     {src: Game3, title: 'Money train 2', slug: 'moneytrain2'},
    //     {src: Game4, title: 'Not now norman', slug: 'not_now_norman'},
    //     {src: Game5, title: 'Odin Infinity Reels Megaways', slug: 'odin_infinity_reels_megaways'},
    //     {src: Game1, title: 'PowerSpin', slug: 'powerspin'},
    //     {src: Game2, title: 'Ramses Revenge', slug: 'ramses_revenge'},
    //     {src: Game3, title: 'Royal dragon Infinity Reels', slug: 'royal_dragon_infinity_reels'},
    //     {src: Game4, title: 'Sails of fortune', slug: 'sails_of_fortune'},
    //     {src: Game5, title: 'Snake arena', slug: 'snakearena'},
    //     {src: Game1, title: 'Spirit of the beast', slug: 'spirit_of_the_beast'},
    //     {src: Game2, title: 'Super boost', slug: 'superboost'},
    //     {src: Game3, title: 'Trolls gold', slug: 'trolls_gold'},
    //     {src: Game4, title: 'Templar tumble', slug: 'templar_tumble'},
    //     {src: Game5, title: 'Temple tumble', slug: 'templetumble'},
    // ]

    useEffect(() => {
        if(!props.games) {
            let isMounted = true;
            store.getGames().then((games) => isMounted && setGames(games));
            return () => { isMounted = false };
        }
    }, []);

    return (
        <div className={`game-list ${props.forAdmin && 'for-admin'}`}>
            {props.games ? (
                props.games.map((game, i) => <GameItem deleteGame={props.deleteGame} forAdmin={props.forAdmin} key={game + '-' + i} {...game} />)
            ) : (
                games.map((game, i) => <GameItem key={game + '-' + i} {...game} />)
            )}
        </div>
    );
};

export default GameList;