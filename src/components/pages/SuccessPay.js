import React, {useEffect} from 'react';
import ContentBlock from "../ContentBlock";
import {AiFillCheckCircle} from "react-icons/all";
import {useTranslation} from "react-i18next";
import {useSearchParams} from "react-router-dom";

const SuccessPay = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    let [query, setQuery] = React.useState(
        searchParams.get("order_id")
    );
    const { t } = useTranslation();
    useEffect(() => {
        console.log(searchParams)
        console.log(searchParams.get("order_id"))
        console.log(query)
    }, [query])
    return (
        <ContentBlock style={{display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center', fontSize: 20, flexWrap: 'wrap', textAlign: 'center'}}>
            <AiFillCheckCircle style={{color: 'lightgreen', fontSize: 30}} />
            {/*{t('success_pay')}. Email for payment: accounting@market-advantage.net*/}
            <div style={{width: '100%'}}>
                Great! <br/>
                Your Order ID: <div style={{fontWeight: 'bold', color: '#f44336', width: '100%'}}>{query}</div>
            </div><br/>
            Use "Interac" and don't forget to include the order ID in the notes/memo field and make you payment to the email: <a href="mailto:accounting@market-advantage.net">accounting@market-advantage.net</a>
        </ContentBlock>
    );
};

export default SuccessPay;