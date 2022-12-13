import React from 'react';
import {Helmet} from "react-helmet";
import {Button, Panel} from "rsuite";
import {Link} from "react-router-dom";
import ContentBlock from "../ContentBlock";
import {STOCKS_ROUTE} from '../../utils/routes'
import banner from '../../assets/images/banner.png';
import {useTranslation} from "react-i18next";

const EphiriumStockPage = () => {
    const { t } = useTranslation();

    return (
        <ContentBlock style={{fontSize: 20}}>
            <Helmet>
                <title>{t('eph_title')} - {t('stocks')}| {process.env.REACT_APP_NAME}</title>
            </Helmet>

            <div>
                <Link to={STOCKS_ROUTE}>
                    <Button className="pink-btn">{t('back_to_stocks')}</Button>
                </Link>
            </div>

            <Panel>
                <h3 style={{marginBottom: '1rem'}}>{t('eph_title')}</h3>
                {/*<div><img src={banner}/></div>*/}
                {t('eph_desc')}
            </Panel>
        </ContentBlock>
    );
};

export default EphiriumStockPage;