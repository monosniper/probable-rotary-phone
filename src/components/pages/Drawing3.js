import React from 'react';
import {useTranslation} from "react-i18next";
import ContentBlock from "../ContentBlock";
import {Helmet} from "react-helmet";
import {Button, Panel} from "rsuite";

const Drawing3 = () => {
    const { t } = useTranslation();

    return (
        <ContentBlock style={{fontSize: 20}}>
            <Helmet>
                <title>{process.env.REACT_APP_NAME}</title>
            </Helmet>

            <Panel>
                {t('drawings.3')}
            </Panel>
        </ContentBlock>
    );
};

export default Drawing3;