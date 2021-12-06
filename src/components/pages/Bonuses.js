import React from 'react';
import ContentBlock from "../ContentBlock";
import {Helmet} from "react-helmet";

const Bonuses = () => {
    return (
        <ContentBlock style={{display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center', fontSize: 20}}>
            <Helmet>
                <title>Бонусы | {process.env.REACT_APP_NAME}</title>
            </Helmet>
            В настоящее время никаких бонусов нет
        </ContentBlock>
    );
};

export default Bonuses;