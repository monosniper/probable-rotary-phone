import React from 'react';
import ContentBlock from "../ContentBlock";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

const Bonuses = () => {
    const { t } = useTranslation();

    return (
        <ContentBlock style={{display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center', fontSize: 20}}>
            <Helmet>
                <title>{t('bonuses')} | {process.env.REACT_APP_NAME}</title>
            </Helmet>
            {t('no_bonuses')}
        </ContentBlock>
    );
};

export default Bonuses;