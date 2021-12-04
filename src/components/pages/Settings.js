import React, {useContext} from 'react';
import {Context} from "../../index";
import {Helmet} from "react-helmet";
import {Col, Row} from "reactstrap";
import ContentBlock from "../ContentBlock";

const Settings = () => {
    const {store} = useContext(Context);

    return (
        <ContentBlock>
            <Helmet>
                <title>Настройки - Админка | Makao777</title>
            </Helmet>

            <Row>
                <Col sm={12} md={6}>
                    <h6 className="cabinet-title">Плеер</h6>
                </Col>
                <Col sm={12} md={6}></Col>
            </Row>
        </ContentBlock>
    );
};

export default Settings;