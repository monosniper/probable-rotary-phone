import React from 'react';
import {Container} from "reactstrap";
import Providers from '../../assets/images/providers.png';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {CONTACTS_ROUTE, POLICY_ROUTE, RETURN_POLICY_ROUTE, TERMS_CONDITIONS_ROUTE} from "../../utils/routes";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <Container className='footer-container'>
            <div className='footer'>
                <div className="footer__menu">
                    <Link to={TERMS_CONDITIONS_ROUTE} className="footer__item">{t('terms_conditions_')}</Link>
                    <Link to={RETURN_POLICY_ROUTE} className="footer__item">{t('return_policy')}</Link>
                    <Link to={POLICY_ROUTE} className="footer__item">{t('policy')}</Link>
                    <Link to={CONTACTS_ROUTE} className="footer__item">{t('contacts')}</Link>
                </div>
                {/*<img style={{margin: '1rem auto', display: 'block', maxWidth: '100%'}} src={Providers} alt="Providers" />*/}
                @ 2017 - {new Date().getFullYear()} {process.env.REACT_APP_URL} { t('rights') }
            </div>
        </Container>
    );
};

export default Footer;