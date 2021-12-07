import React, {useContext, useEffect, useState} from 'react';
import {BsCheckLg, IoCloseSharp, MdOutlinePendingActions} from "react-icons/all";
import {Helmet} from "react-helmet";
import {Context} from "../../index";
import moment from "moment";
import {observer} from "mobx-react-lite";

const PayHistory = () => {

    const {store} = useContext(Context);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        let isMounted = true;
        store.getTransactions().then(transactions => {
            isMounted && setTransactions(transactions[0])

        });
        return () => { isMounted = false };
    }, []);

    const icons = {
        success: <BsCheckLg/>,
        rejected: <IoCloseSharp/>,
        pending: <MdOutlinePendingActions/>,
    };

    const lang = {
        success: 'Успешно',
        rejected: 'Отклонено',
        pending: 'Ожидание',

        pull: 'Вывод',
        push: 'Пополнение',
    };

    return (
        <div>
            <Helmet>
                <title>История платежей - Касса | {process.env.REACT_APP_NAME}</title>
            </Helmet>
            <h6 className="cabinet-title">История транзакций</h6>
            {transactions.map((transaction, i) => {
                return (
                    <div className="transaction" key={i}>
                        <div className={`transaction-col transaction-status`}>
                            <span className={`transaction-icon ${transaction.status}`}>{icons[transaction.status]}</span>
                            <span>{lang[transaction.status]}</span>
                        </div>
                        <div className="transaction-col transaction-description">{lang[transaction.type]}</div>
                        <div className="transaction-col transaction-amount">{transaction.amount > 0 ? '+' : ''}{transaction.amount}</div>
                        <div className="transaction-col transaction-date">{moment(transaction.createdAt).format('DD MMMM yyyy')}</div>
                    </div>
                )
            })}
        </div>
    );
};

export default observer(PayHistory);