import React from 'react';
import ContentBlock from "../ContentBlock";
import {Helmet} from "react-helmet";
import {Button, Panel} from "rsuite";
import {Link} from "react-router-dom";
import banner from '../../assets/images/banner.png';

const Stocks = () => {
    return (
        <ContentBlock style={{fontSize: 20}}>
            <Helmet>
                <title>Акции | {process.env.REACT_APP_NAME}</title>
            </Helmet>

            <Panel className="stock" header="Розыгрыш 1 эфириума" style={{backgroundImage: `url(${banner})`}}>
                Для участия в розыгрыше вам нужно...
                <div style={{padding: '1rem 0'}}>
                    <Link to="/stocks/ephirium">
                        <Button className="pink-btn">Подробнее</Button>
                    </Link>
                </div>
            </Panel>
        </ContentBlock>
    );
};

export default Stocks;