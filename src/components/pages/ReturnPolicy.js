import React from 'react';
import {useTranslation} from "react-i18next";
import ContentBlock from "../ContentBlock";
import {Helmet} from "react-helmet";

const ReturnPolicy = () => {
    const { t } = useTranslation();

    return (
        <ContentBlock style={{display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center', fontSize: 20}}>
            <Helmet>
                <title>{t('return_policy')} | {process.env.REACT_APP_NAME}</title>
            </Helmet>
            <p>
                {t('return_rules')}
            </p>
        </ContentBlock>
    );
};

export default ReturnPolicy;