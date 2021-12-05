import React, {useContext, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {Context} from "../../index";

const GetPay = () => {

    const {store} = useContext(Context);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        store.sendPay(searchParams);
    }, []);

    return (
        <div>
            get pay
            {JSON.stringify(searchParams)}
        </div>
    );
};

export default GetPay;