import React from 'react';
import ContentBlock from "../ContentBlock";
import {Helmet} from "react-helmet";
import {Button, Panel} from "rsuite";
import {Link} from "react-router-dom";

const Stocks = () => {
    return (
        <ContentBlock style={{fontSize: 20}}>
            <Helmet>
                <title>Акции | {process.env.REACT_APP_NAME}</title>
            </Helmet>

            <Panel header="Розыгрыш 1 эфириума">
                Для участия в розыгрыше вам нужно...
                <div style={{textAlign: 'end', padding: '1rem 0'}}>
                    <Link to="/stocks/ephirium">
                        <Button className="pink-btn">Подробнее</Button>
                    </Link>
                </div>
            </Panel>
        </ContentBlock>
    );
};

export default Stocks;