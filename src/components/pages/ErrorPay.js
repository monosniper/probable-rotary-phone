import React from 'react';
import {AiFillCloseCircle} from "react-icons/all";
import ContentBlock from "../ContentBlock";
import {useTranslation} from "react-i18next";

const ErrorPay = () => {
    const { t } = useTranslation();

    return (
        <ContentBlock style={{display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center', fontSize: 20}}>
            <AiFillCloseCircle style={{color: 'red', fontSize: 30}} />
            {t('pay_err')}
        </ContentBlock>
    );
};

export default ErrorPay;