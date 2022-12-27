import React from 'react';
import {useTranslation} from "react-i18next";
import ContentBlock from "../ContentBlock";
import {Helmet} from "react-helmet";

const Contacts = () => {
    const { t } = useTranslation();

    return (
        <ContentBlock style={{display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center', fontSize: 20}}>
            <Helmet>
                <title>{t('contacts')} | {process.env.REACT_APP_NAME}</title>
            </Helmet>
            <ul>
               <li>Email: <a href="mailto:support@makao777.com">support@makao777.com</a></li>
               <li>Telegram: <a href="https://t.me/sherbetld">@sherbetld</a></li>
            </ul>
        </ContentBlock>
    );
};

export default Contacts;