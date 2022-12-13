import React from 'react';
import ContentBlock from "../ContentBlock";
import {AiFillCheckCircle} from "react-icons/all";
import {useTranslation} from "react-i18next";

const SuccessPay = () => {
    const { t } = useTranslation();
    return (
        <ContentBlock style={{display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center', fontSize: 20}}>
            <AiFillCheckCircle style={{color: 'lightgreen', fontSize: 30}} />
            {t('success_pay')}
        </ContentBlock>
    );
};

export default SuccessPay;