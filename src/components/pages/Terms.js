import React from 'react';
import {useTranslation} from "react-i18next";
import ContentBlock from "../ContentBlock";
import {Helmet} from "react-helmet";

const Terms = () => {
    const { t } = useTranslation();

    return (
        <ContentBlock style={{display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center', fontSize: 20}}>
            <Helmet>
                <title>{t('terms_conditions_')} | {process.env.REACT_APP_NAME}</title>
            </Helmet>
            <p>
                {t('terms_and_conditions')}
            </p>
        </ContentBlock>
    );
};

export default Terms;