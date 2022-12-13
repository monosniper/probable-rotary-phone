import React, {useContext, useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {Context} from "../../index";

const GetPay = () => {

    const {store} = useContext(Context);
    const params = useParams();

    useEffect(() => {
        store.sendPay(params);
    }, []);

    return (
        <div>
            get pay
            {JSON.stringify(params)}
        </div>
    );
};

export default GetPay;