import React from 'react';
import {useTranslation} from "react-i18next";
import ContentBlock from "../ContentBlock";
import {Helmet} from "react-helmet";

const Policy = () => {
    const { t } = useTranslation();

    return (
        <ContentBlock style={{display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center', fontSize: 20}}>
            <Helmet>
                <title>{t('policy')} | {process.env.REACT_APP_NAME}</title>
            </Helmet>
            <p>
                {t('privacy')}
            </p>
        </ContentBlock>
    );
};

export default Policy;