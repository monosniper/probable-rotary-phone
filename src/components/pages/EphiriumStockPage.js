import React from 'react';
import {Helmet} from "react-helmet";
import {Button, Panel} from "rsuite";
import {Link} from "react-router-dom";
import ContentBlock from "../ContentBlock";
import {STOCKS_ROUTE} from '../../utils/routes'
import banner from '../../assets/images/banner.png';

const EphiriumStockPage = () => {
    return (
        <ContentBlock style={{fontSize: 20}}>
            <Helmet>
                <title>Розыгрыш 1 эфириума - Акции | {process.env.REACT_APP_NAME}</title>
            </Helmet>

            <div>
                <Link to={STOCKS_ROUTE}>
                    <Button className="pink-btn">Назад к акциям</Button>
                </Link>
            </div>

            <Panel>
                <h3 style={{marginBottom: '1rem'}}>Акция - Розыгрыш 1 эфириума</h3>
                {/*<div><img src={banner}/></div>*/}
                Команда makao777 решила провести розыгрыш 1 ETH, между пользователями сайта. Вам не нужно подписываться ни на какие социальные сети или ютуб каналы спонсоров. Принимают участие все пользователи которые пополнили баланс на сумму 15 USD. Обнародование победителя пройдёт 31.07.2022.
            </Panel>
        </ContentBlock>
    );
};

export default EphiriumStockPage;