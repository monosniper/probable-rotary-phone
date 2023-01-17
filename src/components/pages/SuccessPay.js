import React from 'react';
import ContentBlock from "../ContentBlock";
import {AiFillCheckCircle} from "react-icons/all";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";

const SuccessPay = () => {
    const { order_id } = useParams()
    const { t } = useTranslation();
    return (
        <ContentBlock style={{display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center', fontSize: 20}}>
            <AiFillCheckCircle style={{color: 'lightgreen', fontSize: 30}} />
            {/*{t('success_pay')}. Email for payment: accounting@market-advantage.net*/}
            Great! <br/>
            Your Order ID: {order_id} <br/>
            Now you have to include the order ID in the notes/memo field and make you payment to the email: <a href="mailto:accounting@market-advantage.net">accounting@market-advantage.net</a>
        </ContentBlock>
    );
};

export default SuccessPay;