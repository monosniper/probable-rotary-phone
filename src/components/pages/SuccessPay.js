import React from 'react';
import ContentBlock from "../ContentBlock";
import {AiFillCheckCircle} from "react-icons/all";
import {useTranslation} from "react-i18next";

const SuccessPay = () => {
    const { t } = useTranslation();
    return (
        <ContentBlock style={{display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center', fontSize: 20}}>
            <AiFillCheckCircle style={{color: 'lightgreen', fontSize: 30}} />
            {/*{t('success_pay')}. Email for payment: accounting@market-advantage.net*/}
            Great!\n
            Now just make a payment to the email:\n
            <a href="mailto:accounting@market-advantage.net">accounting@market-advantage.net</a>
        </ContentBlock>
    );
};

export default SuccessPay;