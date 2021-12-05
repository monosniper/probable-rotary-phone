import React from 'react';
import {Container} from "reactstrap";
import {Link} from "react-router-dom";
import Providers from '../../assets/images/providers.png';

const Footer = () => {
    return (
        <Container className='footer-container'>
            <div className='footer'>
                <img style={{margin: '1rem auto', display: 'block', maxWidth: '100%'}} src={Providers} alt="Providers" />
                @ {new Date().getFullYear()} {process.env.REACT_APP_URL} Все права защищены.
            </div>
        </Container>
    );
};

export default Footer;