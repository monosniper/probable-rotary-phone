import React from 'react';
import {Helmet} from "react-helmet";
import {Button, Panel} from "rsuite";
import {Link} from "react-router-dom";
import ContentBlock from "../ContentBlock";
import {STOCKS_ROUTE} from '../../utils/routes'

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
                Для участия в розыгрыше вам нужно пополнить свой баланс на любую сумму, вы станете автоматически
                участвовать в конкурсе на 1 эфир. Результаты будут 31.12.2021
            </Panel>
        </ContentBlock>
    );
};

export default EphiriumStockPage;