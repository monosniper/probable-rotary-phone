import React from 'react';
import {BsCheckLg, IoCloseSharp, MdOutlinePendingActions} from "react-icons/all";
import {Helmet} from "react-helmet";

const PayHistory = () => {

    const transactions = [
        {
            description: 'Пополнение',
            status: 'success',
            amount: 300,
            date: '22:10 24 ноября 2021',
        },
        {
            description: 'Вывод',
            status: 'success',
            amount: -450,
            date: '22:10 24 ноября 2021',
        },
        {
            description: 'Пополнение',
            status: 'rejected',
            amount: 300,
            date: '22:10 24 ноября 2021',
        },
        {
            description: 'Вывод',
            status: 'pending',
            amount: -500,
            date: '22:10 24 ноября 2021',
        },
        {
            description: 'Вывод',
            status: 'rejected',
            amount: -200,
            date: '22:10 24 ноября 2021',
        },
    ];

    const icons = {
        success: <BsCheckLg/>,
        rejected: <IoCloseSharp/>,
        pending: <MdOutlinePendingActions/>,
    };

    const lang = {
        success: 'Успешно',
        rejected: 'Отклонено',
        pending: 'Ожидание',
    };

    return (
        <div>
            <Helmet>
                <title>История платежей - Касса | Makao777</title>
            </Helmet>
            <h6 className="cabinet-title">История транзакций</h6>
            {transactions.map((transaction, index) => (
                <div className="transaction" key={index}>
                    <div className={`transaction-col transaction-status`}>
                        <span className={`transaction-icon ${transaction.status}`}>{icons[transaction.status]}</span>
                        <span>{lang[transaction.status]}</span>
                    </div>
                    <div className="transaction-col transaction-description">{transaction.description}</div>
                    <div className="transaction-col transaction-amount">{transaction.amount > 0 ? '+' : ''}{transaction.amount}</div>
                    <div className="transaction-col transaction-date">{transaction.date}</div>
                </div>
            ))}
        </div>
    );
};

export default PayHistory;