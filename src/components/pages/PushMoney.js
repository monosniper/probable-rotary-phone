import React, {useState, useContext} from 'react';
import {Col, Row} from "reactstrap";
import {Button, IconButton, Input, MaskedInput, Notification, toaster} from "rsuite";
import Plus from "@rsuite/icons/Plus";
import Minus from "@rsuite/icons/Minus";
import {Helmet} from "react-helmet";
import {ERROR_PAY_ROUTE, SUCCESS_PAY_ROUTE} from "../../utils/routes";
import {PayPalButtons} from "@paypal/react-paypal-js";
import SuccessPay from "./SuccessPay";
import {Context} from "../../index";

const PushMoney = () => {

    const {store} = useContext(Context);
    const [payButtonsShow, setPayButtonsShow] = useState(false);
    const [payCompleted, setPayCompleted] = useState(false);
    const [amount, setAmount] = useState(200);
    const [cardNumber, setCardNumber] = useState('');
    const [cardDate, setCardDate] = useState('');
    const [cvv, setCvv] = useState('');
    const cardMask = [
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/
    ];
    const cardDateMask = [/\d/,/\d/,'/',/\d/,/\d/];
    const cvvMask = [/\d/,/\d/,/\d/];

    const createOrder = (data, actions, err) => {
        return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
                {
                    description: 'Оплата',
                    amount: {
                        currency_code: 'RUB',
                        value: amount
                    }
                }
            ]
        })
    }

    const onApprove = async (data, actions) => {
        const order = await actions.order.capture();
        if(order.status === 'COMPLETED') {
            store.createPush(amount).then((rs) => {
                if(rs.data.status === 'success') {
                    setPayCompleted(true);
                }
            })
        }
    }

    const onError = (err) => {
        console.log(err)
    }

    // const submit = () => {
    //     if(amount > 0 && amount < 50000) {
    //         $form('https://wl.walletone.com/checkout/checkout/Index', 'POST', [
    //             { name: 'WMI_MERCHANT_ID', value: process.env.REACT_APP_WMI_MERCHANT_ID },
    //             { name: 'WMI_PAYMENT_AMOUNT', value: amount },
    //             { name: 'WMI_CURRENCY_ID', value: 840 },
    //             { name: 'WMI_DESCRIPTION', value: 'Пополнение счета' },
    //             { name: 'WMI_SUCCESS_URL', value: process.env.REACT_APP_URL + SUCCESS_PAY_ROUTE },
    //             { name: 'WMI_FAIL_URL', value: process.env.REACT_APP_URL + ERROR_PAY_ROUTE },
    //         ]);
    //         // if(cardNumber !== '' && cardDate !== '' && cvv !== '') {
    //         //     $form('https://wl.walletone.com/checkout/checkout/Index', 'POST', [
    //         //         { name: 'WMI_MERCHANT_ID', value: 189027238209 },
    //         //         { name: 'WMI_PAYMENT_AMOUNT', value: amount },
    //         //         { name: 'WMI_CURRENCY_ID', value: 840 },
    //         //         { name: 'WMI_DESCRIPTION', value: 'test' },
    //         //         { name: 'WMI_SUCCESS_URL', value: process.env.REACT_APP_URL + SUCCESS_PAY_ROUTE },
    //         //         { name: 'WMI_FAIL_URL', value: process.env.REACT_APP_URL + ERROR_PAY_ROUTE },
    //         //     ]);
    //         // } else {
    //         //     toaster.push(
    //         //         <Notification type="error" header="Ошибка">
    //         //             <p>Введите данные банковской карты</p>
    //         //         </Notification>
    //         //     )
    //         // }
    //     } else {
    //         toaster.push(
    //             <Notification type="error" header="Ошибка">
    //                 <p>Введите сумму</p>
    //             </Notification>
    //         )
    //     }
    // }

    return !payCompleted ? (
        <div>
            <Helmet>
                <title>Пополнение - Касса | {process.env.REACT_APP_NAME}</title>
            </Helmet>
            <div className="pushmoney-btn-toolbar">
                <Button onClick={() => setAmount(100)} className="pushmoney-btn">100</Button>
                <Button onClick={() => setAmount(200)} className="pushmoney-btn">200</Button>
                <Button onClick={() => setAmount(300)} className="pushmoney-btn">300</Button>
                <Button onClick={() => setAmount(500)} className="pushmoney-btn">500</Button>
                <Button onClick={() => setAmount(1000)} className="pushmoney-btn">1000</Button>
            </div>

            <div className="pushmoney-amount-group">
                <IconButton onClick={() => setAmount(amount - 100)} circle icon={<Minus />} />
                <Input className='field' type='number' min="200" max="50000" value={amount} onChange={setAmount} />
                <IconButton onClick={() => setAmount(amount + 100)} circle icon={<Plus />} />
            </div>

            {/*<div className='card-group'>*/}
            {/*    <div>*/}
            {/*        <div>*/}
            {/*            <p>Введите номер карты</p>*/}
            {/*            <MaskedInput*/}
            {/*                className='field'*/}
            {/*                value={cardNumber}*/}
            {/*                mask={cardMask}*/}
            {/*                keepCharPositions={true}*/}
            {/*                showMask={false}*/}
            {/*                style={{ width: 300 }}*/}
            {/*                onChange={setCardNumber}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*        <div style={{marginTop: '1rem'}}>*/}
            {/*            <Row>*/}
            {/*                <Col sm={12} md={6}>*/}
            {/*                    <p>Срок действия</p>*/}
            {/*                    <MaskedInput*/}
            {/*                        className='field'*/}
            {/*                        value={cardDate}*/}
            {/*                        mask={cardDateMask}*/}
            {/*                        keepCharPositions={true}*/}
            {/*                        showMask={false}*/}
            {/*                        style={{ width: 150 }}*/}
            {/*                        onChange={setCardDate}*/}
            {/*                    />*/}
            {/*                </Col>*/}
            {/*                <Col sm={12} md={6}>*/}
            {/*                    <p>CVV</p>*/}
            {/*                    <MaskedInput*/}
            {/*                        className='field'*/}
            {/*                        value={cvv}*/}
            {/*                        mask={cvvMask}*/}
            {/*                        keepCharPositions={true}*/}
            {/*                        showMask={false}*/}
            {/*                        style={{ width: 150 }}*/}
            {/*                        onChange={setCvv}*/}
            {/*                    />*/}
            {/*                </Col>*/}
            {/*            </Row>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div style={{textAlign: 'center', marginTop: '2rem'}}>
                {payButtonsShow ? (
                    <PayPalButtons createOrder={createOrder} onApprove={onApprove} onError={onError} />
                ) : (
                    <Button onClick={() => setPayButtonsShow(true)} className="pink-btn btn-lg rounded">Далее</Button>
                )}
            </div>

        </div>
    ) : <SuccessPay />;
};

export default PushMoney;