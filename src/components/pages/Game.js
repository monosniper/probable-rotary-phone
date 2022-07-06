import React, {useEffect, useState} from 'react';
import {Container} from "reactstrap";
import {HOME_ROUTE} from "../../utils/routes";
import {Link, useParams} from "react-router-dom";
import {Button} from "rsuite";
import {Helmet} from "react-helmet";
import axios from 'axios';

const Game = () => {

    const params = useParams();
    const game = params.name;
    const name = params.name.replaceAll("_", " ").replace(/\b\w/g, l => l.toUpperCase());
    // const [url, setUrl] = useState('');

    // const provider_prefixes = [
    //     'booongo': '',
    //     'playson': 'pls_',
    //     'champion': 'champion_',
    //     'relax': 'bgaming_relax_',
    // ]

    const url = `https://modelplat.com/gm/index.html?demo=true&gameName=${game}&partner=cosmo-pragmatic-prod&lang=ru&platform=desktop`

    return (
        <Container>
            <Helmet>
                <title>{name} | {process.env.REACT_APP_NAME}</title>
                <meta name={'description'} content={'Играть в игру "'+name+'" в нашем онлайн-казино Makao777!'} />
            </Helmet>
            <Link to={HOME_ROUTE}>
                <Button className="casino-btn" style={{margin: '1rem 0' }}>Назад</Button>
            </Link>
            <iframe
                src={url}
                frameBorder="0" allowFullScreen="" webkitallowfullscreen="" allow="autoplay" style={{width: '100%', height: '80vh'}}></iframe>
        </Container>
    );
};

export default Game;