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
                <img src="https://www.fkwallet.ru/assets/2017/images/btns/iconsmall_wallet7.png" title="Криптовалютный кошелек" />
            </div>
        </Container>
    );
};

export default Footer;