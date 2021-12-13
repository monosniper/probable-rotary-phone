import React from 'react';
import ContentBlock from "../ContentBlock";
import {AiFillCheckCircle} from "react-icons/all";

const SuccessPay = () => {
    return (
        <ContentBlock style={{display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center', fontSize: 20}}>
            <AiFillCheckCircle style={{color: 'lightgreen', fontSize: 30}} />
            Оплата прошла успешно, скоро на вашем счету появятся пополненные средства.
        </ContentBlock>
    );
};

export default SuccessPay;