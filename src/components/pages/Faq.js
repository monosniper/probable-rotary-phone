import React from 'react';
import {Helmet} from "react-helmet";

const Faq = () => {
    return (
        <div>
            <Helmet>
                <title>FAQ | {process.env.REACT_APP_NAME}</title>
            </Helmet>
        </div>
    );
};

export default Faq;