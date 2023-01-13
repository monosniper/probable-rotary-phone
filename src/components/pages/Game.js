import React, {useEffect, useState} from 'react';
import {Container} from "reactstrap";
import {HOME_ROUTE} from "../../utils/routes";
import {Link, useParams} from "react-router-dom";
import {Button} from "rsuite";
import {Helmet} from "react-helmet";
import axios from 'axios';
import {useTranslation} from "react-i18next";

const Game = () => {
    const { t } = useTranslation();

    const params = useParams();
    const launcher = params.launcher;
    const game = params.name;
    const name = params.name.replaceAll("_", " ").replace(/\b\w/g, l => l.toUpperCase());
    // const [url, setUrl] = useState('');

    const url = `https://srv.cosmogs.com/${launcher}-launch/cosmo/prod?gameName=${game}&key=TEST1000&country=RUS&demo=true&shell=request&exitURL=https%3A%2F%2Fmakao777.com%2F&language=cad&segment=desktop`
    // const url = `https://modelplat.com/gm/index.html?demo=true&gameName=${game}&partner=cosmo-pragmatic-prod&lang=ru&platform=desktop`

    return (
        <Container>
            <Helmet>
                <title>{name} | {process.env.REACT_APP_NAME}</title>
                <meta name={'description'} content={t('play_game')+name} />
            </Helmet>
            <Link to={HOME_ROUTE}>
                <Button className="casino-btn" style={{margin: '1rem 0' }}>{t('back')}</Button>
            </Link>
            <iframe
                src={url}
                frameBorder="0" allowFullScreen="" webkitallowfullscreen="" allow="autoplay" style={{width: '100%', height: '80vh'}}></iframe>
        </Container>
    );
};

export default Game;