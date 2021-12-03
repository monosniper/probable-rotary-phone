import React from 'react';
import {Container} from "reactstrap";
import {HOME_ROUTE} from "../../utils/routes";
import {Link} from "react-router-dom";
import {Button} from "rsuite";

const Game = () => {
    return (
        <Container>
            <Link to={HOME_ROUTE}>
                <Button className="casino-btn" style={{margin: '1rem 0' }}>Назад</Button>
            </Link>
            <iframe
                src="https://api-prod.infingame.com/op-launch/cosmo-pragmatic/prod?gameName=op_jackpotter&amp;key=TEST1000&amp;country=RUS&amp;demo=true&amp;shell=request&amp;language=ru&amp;segment=desktop"
                frameBorder="0" allowFullScreen="" webkitallowfullscreen="" allow="autoplay" style={{width: '100%', height: '80vh'}}></iframe>
        </Container>
    );
};

export default Game;