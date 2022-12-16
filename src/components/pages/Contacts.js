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

        </ContentBlock>
    );
};

export default Contacts;