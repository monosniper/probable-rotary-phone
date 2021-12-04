import React from 'react';
import {Container} from "reactstrap";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <Container className='footer-container'>
            <div className='footer'>
                @ {new Date().getFullYear()} tipa-cosmolot.ua Все права защищены.
                <img src="https://www.fkwallet.ru/assets/2017/images/btns/iconsmall_wallet7.png" title="Криптовалютный кошелек" />
            </div>
        </Container>
    );
};

export default Footer;