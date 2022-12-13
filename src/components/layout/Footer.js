import React from 'react';
import {Container} from "reactstrap";
import Providers from '../../assets/images/providers.png';
import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <Container className='footer-container'>
            <div className='footer'>
                <img style={{margin: '1rem auto', display: 'block', maxWidth: '100%'}} src={Providers} alt="Providers" />
                @ 2017 - {new Date().getFullYear()} {process.env.REACT_APP_URL} { t('rights') }
            </div>
        </Container>
    );
};

export default Footer;