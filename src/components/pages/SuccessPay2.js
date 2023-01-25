import React, {useEffect} from 'react';
import ContentBlock from "../ContentBlock";
import {AiFillCheckCircle} from "react-icons/all";
import {useTranslation} from "react-i18next";
import {useSearchParams} from "react-router-dom";
const SuccessPay2 = () => {
    const { t } = useTranslation();

    return (
        <ContentBlock style={{display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center', fontSize: 20, flexWrap: 'wrap', textAlign: 'center'}}>
            <AiFillCheckCircle style={{color: 'lightgreen', fontSize: 30}} />
            {t('success_pay')}
        </ContentBlock>
    );
};

export default SuccessPay2;