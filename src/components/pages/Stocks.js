import React from 'react';
import ContentBlock from "../ContentBlock";
import {Helmet} from "react-helmet";
import {Button, Panel} from "rsuite";
import {Link} from "react-router-dom";
import banner from '../../assets/images/banner.png';
import {useTranslation} from "react-i18next";

const Stocks = () => {
    const { t } = useTranslation();


    return (
        <ContentBlock style={{fontSize: 20}}>
            <Helmet>
                <title>{t('stocks')} | {process.env.REACT_APP_NAME}</title>
            </Helmet>

            <Panel className="stock" header={t('stocks_1_title')} style={{backgroundImage: `url(${banner})`}}>
                {t('stocks_1')}
                <div style={{padding: '1rem 0'}}>
                    <Link to="/stocks/ephirium">
                        <Button className="pink-btn">{t('details')}</Button>
                    </Link>
                </div>
            </Panel>
        </ContentBlock>
    );
};

export default Stocks;