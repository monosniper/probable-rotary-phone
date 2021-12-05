import React from 'react';
import GameItem from "./GameItem";
import Game1 from '../assets/images/games/1.jpg';
import Game2 from '../assets/images/games/2.jpg';
import Game3 from '../assets/images/games/3.jpg';
import Game4 from '../assets/images/games/4.jpg';
import Game5 from '../assets/images/games/5.jpg';

const GameList = () => {

    const games = [
        {id: 1, src: Game1, title: 'Helios Fury', slug: 'helios_fury'},
        {id: 2, src: Game2, title: 'Santa\'s Stack', slug: 'santas_stack'},
        {id: 3, src: Game3, title: 'Royal Potato', slug: 'royal_potato'},
        {id: 4, src: Game4, title: 'Cluster Tumble', slug: 'cluster_tumble'},
        {id: 5, src: Game5, title: 'Wildchemy', slug: 'wildchemy'},
        {id: 6, src: Game1, title: 'Zodiac Infinity Reels', slug: 'zodiac_infinity_reels'},
        {id: 7, src: Game2, title: 'Zombie Circus', slug: 'zombiecircus'},
        {id: 8, src: Game3, title: 'Wild Chapo', slug: 'wild_chapo'},
        {id: 9, src: Game4, title: 'Wild Joker Stacks', slug: 'wild_joker_stacks'},
        {id: 10, src: Game5, title: 'Valkyrie Wild Storm', slug: 'valkyrie_wild_storm'},
        {id: 11, src: Game1, title: 'Spirits Of The Storm', slug: 'spirits_of_the_storm'},
        {id: 12, src: Game2, title: 'Money train', slug: 'moneytrain'},
        {id: 13, src: Game3, title: 'Money train 2', slug: 'moneytrain2'},
        {id: 14, src: Game4, title: 'Not now norman', slug: 'not_now_norman'},
        {id: 15, src: Game5, title: 'Odin Infinity Reels Megaways', slug: 'odin_infinity_reels_megaways'},
        {id: 16, src: Game1, title: 'PowerSpin', slug: 'powerspin'},
        {id: 17, src: Game2, title: 'Ramses Revenge', slug: 'ramses_revenge'},
        {id: 18, src: Game3, title: 'Royal dragon Infinity Reels', slug: 'royal_dragon_infinity_reels'},
        {id: 19, src: Game4, title: 'Sails of fortune', slug: 'sails_of_fortune'},
        {id: 20, src: Game5, title: 'Snake arena', slug: 'snakearena'},
        {id: 21, src: Game1, title: 'Spirit of the beast', slug: 'spirit_of_the_beast'},
        {id: 22, src: Game2, title: 'Super boost', slug: 'superboost'},
        {id: 23, src: Game3, title: 'Trolls gold', slug: 'trolls_gold'},
        {id: 24, src: Game4, title: 'Templar tumble', slug: 'templar_tumble'},
        {id: 25, src: Game5, title: 'Temple tumble', slug: 'templetumble'},
    ]

    return (
        <div className="game-list">
            {games.map((game) => <GameItem key={game.id} {...game} />)}
        </div>
    );
};

export default GameList;