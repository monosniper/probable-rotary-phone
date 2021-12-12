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
    const [url, setUrl] = useState('');

    const provider_prefixes = [
        '',
        'bgaming_relax_',
        'bgaming_relax_',
    ]

    useEffect(() => {
        provider_prefixes.forEach(prefix => {
            const src = `https://api-prod.infingame.com/bg-launch/cosmo-pragmatic/prod?gameName=${prefix}${game}&key=TEST1000&country=RUS&demo=true&shell=request&language=ru&segment=desktop`
            axios.get(src).then(rs => {
                console.log(rs.statusCode)
                rs.statusCode === 200 && setUrl(src)
            });
        })
    }, []);

    // const url = `https://api-prod.infingame.com/bg-launch/cosmo-pragmatic/prod?gameName=bgaming_relax_${game}&key=TEST1000&country=RUS&demo=true&shell=request&language=ru&segment=desktop`

    return (
        <Container>
            <Helmet>
                <title>{game} | {process.env.REACT_APP_NAME}</title>
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