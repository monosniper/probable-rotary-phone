import React from 'react';
import {AiFillCloseCircle} from "react-icons/all";
import ContentBlock from "../ContentBlock";

const ErrorPay = () => {
    return (
        <ContentBlock style={{display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center', fontSize: 20}}>
            <AiFillCloseCircle style={{color: 'red', fontSize: 30}} />
            Произошла какая то ошибка и оплата не прошла.
        </ContentBlock>
    );
};

export default ErrorPay;