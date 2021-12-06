import React from 'react';
import ContentBlock from "../ContentBlock";
import {Helmet} from "react-helmet";

const Tournaments = () => {
    return (
        <ContentBlock style={{display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center', fontSize: 20}}>
            <Helmet>
                <title>Турниры | {process.env.REACT_APP_NAME}</title>
            </Helmet>
            В настоящее время никаких турниров не проводится
        </ContentBlock>
    );
};

export default Tournaments;