import React, {useContext, useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {Context} from "../../index";

const GetPay = () => {

    const {store} = useContext(Context);
    const [searchParams, setSearchParams] = useParams();

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