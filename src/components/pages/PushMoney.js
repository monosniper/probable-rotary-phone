import React, {useState, useEffect, useContext, useRef} from 'react';
import {Col, Row} from "reactstrap";
import {Button, Form, IconButton, Input, MaskedInput, Modal, Notification, toaster} from "rsuite";
import Plus from "@rsuite/icons/Plus";
import Minus from "@rsuite/icons/Minus";
import {Helmet} from "react-helmet";
import {ERROR_PAY_ROUTE, SUCCESS_PAY_ROUTE} from "../../utils/routes";
import {PayPalButtons, usePayPalScriptReducer} from "@paypal/react-paypal-js";
import SuccessPay from "./SuccessPay";
import {Context} from "../../index";
import {observer} from 'mobx-react-lite';
import BonusImage from '../../assets/images/bonus2.png';
import BTCIcon from '../../assets/images/crypto/BTC.png';
import BnBIcon from '../../assets/images/crypto/BnB.png';
import BUSDIcon from '../../assets/images/crypto/BUSD.png';
import ETHIcon from '../../assets/images/crypto/ETH.png';
import USDTIcon from '../../assets/images/crypto/USDT.png';
import CryptoButton from "../CryptoButton";

const BonusButton = ({name, img, onClick, bonus}) => {
    const [isActive, setIsActive] = useState(name === bonus)

    useEffect(() => {
        setIsActive(name === bonus)
    }, [bonus])

    return <div onClick={() => onClick(name)} className={'bonus-btn ' + (isActive ? 'active' : '')}>
        {img && <div className={'bonus-btn__icon'}>
            <img src={img} alt={name}/>
        </div>}
        {!img && <div className={'bonus-btn__name'}>{name}</div>}
    </div>
}

const PushMoney = () => {

    const {store} = useContext(Context);
    const [payButtonsShow, setPayButtonsShow] = useState(false);
    const [transactionDetailsShow, setTransactionDetailsShow] = useState(false);
    const [payCompleted, setPayCompleted] = useState(false);
    const [amount, setAmount] = useState(10);
    const [cardNumber, setCardNumber] = useState('');
    const [cardDate, setCardDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [{ options }, dispatch] = usePayPalScriptReducer();
    const [transactionNumber, setTransactionNumber] = useState('');
    const [crypto, setCrypto] = useState('');
    const [bonus, setBonus] = useState('Бонус выходного дня');

    const bonuses = [
        {
            name: 'Бонус выходного дня',
            img: BonusImage
        },
        {
            name: 'Без бонуса'
        }
    ]

    const cryptos = [
        {
            name: 'BTC',
            icon: BTCIcon,
            number: '0x214d56e78863ed56ff750c4fc92b672a080062a5'
        },
        {
            name: 'BnB',
            icon: BnBIcon,
            number: '0x214d56e78863ed56ff750c4fc92b672a080062a5'
        },
        {
            name: 'BUSD',
            icon: BUSDIcon,
            number: '0x214d56e78863ed56ff750c4fc92b672a080062a5'
        },
        {
            name: 'ETH',
            icon: ETHIcon,
            number: '0x214d56e78863ed56ff750c4fc92b672a080062a5'
        },
        {
            name: 'USDT',
            icon: USDTIcon,
            number: '0x214d56e78863ed56ff750c4fc92b672a080062a5'
        },
    ]

    const handleSecondNextClick = () => {
        store.createCryptoTransaction(crypto, bonus, transactionNumber, amount).then(() => {
            setPayCompleted(true);
        })
    }

    const createOrder = (data, actions, err) => {
        return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
                {
                    description: 'Пополнение баланса',
                    amount: {
                        currency_code: 'USD',
                        value: amount
                    }
                }
            ],
            application_context: {
              shipping_preference: 'NO_SHIPPING'
            }
        })
    }

    const onApprove = async (data, actions) => {
        const order = await actions.order.capture();
        if(order.status === 'COMPLETED') {
            store.createPush(amount).then((rs) => {
                if(rs.data[0].status === 'success') {
                    setPayCompleted(true);
                }
            })
        }
    }

    const onError = (err) => {
        console.log(err)
    }

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: options,
        });
    }, [amount]);

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

    const handleNextClick = () => {
        // setPayButtonsShow(true)

        if(crypto === '') {
            toaster.push(
                <Notification type="error" header="Выберите монету" />, {placement: 'topEnd'}
            )
        } else if(bonus === '') {
            toaster.push(
                <Notification type="error" header="Выберите бонус" />, {placement: 'topEnd'}
            )
        } else {
            setTransactionDetailsShow(true)
        }
    }

    const handleCryptoClick = (name) => setCrypto(name)
    const handleBonusClick = (name) => setBonus(name)

    return !payCompleted ? (
        <div>
            <Helmet>
                <title>Пополнение - Касса | {process.env.REACT_APP_NAME}</title>
            </Helmet>

            <div className="bonus-btns">
                {bonuses.map(item => <BonusButton bonus={bonus} {...item} onClick={handleBonusClick} />)}
            </div>

            <div className="alert">
                Минимальная сумма для депозита - $10
                <br/>

                Сеть BEP20
            </div>

            <div className="pushmoney-btn-toolbar">
                <Button onClick={() => setAmount(10)} className="pushmoney-btn">$10</Button>
                <Button onClick={() => setAmount(20)} className="pushmoney-btn">$20</Button>
                <Button onClick={() => setAmount(50)} className="pushmoney-btn">$50</Button>
                <Button onClick={() => setAmount(100)} className="pushmoney-btn">$100</Button>
                <Button onClick={() => setAmount(200)} className="pushmoney-btn">$200</Button>
            </div>

            <div className="pushmoney-amount-group">
                <IconButton onClick={() => setAmount(amount - 1)} circle icon={<Minus />} />
                <Input className='field' type='number' min="10" max="50000" value={amount} onChange={setAmount} />
                <IconButton onClick={() => setAmount(amount + 1)} circle icon={<Plus />} />
            </div>


                {/*<label htmlFor="card-number">*/}
                {/*    Card Number*/}
                {/*    <span style={INVALID_COLOR}>*</span>*/}
                {/*</label>*/}
                {/*<PayPalHostedField*/}
                {/*    id="card-number"*/}
                {/*    className="card-field"*/}
                {/*    style={CUSTOM_FIELD_STYLE}*/}
                {/*    hostedFieldType="number"*/}
                {/*    options={{*/}
                {/*        selector: "#card-number",*/}
                {/*        placeholder: "4111 1111 1111 1111",*/}
                {/*    }}*/}
                {/*/>*/}
                {/*<label htmlFor="cvv">*/}
                {/*    CVV<span style={INVALID_COLOR}>*</span>*/}
                {/*</label>*/}
                {/*<PayPalHostedField*/}
                {/*    id="cvv"*/}
                {/*    className="card-field"*/}
                {/*    style={CUSTOM_FIELD_STYLE}*/}
                {/*    hostedFieldType="cvv"*/}
                {/*    options={{*/}
                {/*        selector: "#cvv",*/}
                {/*        placeholder: "123",*/}
                {/*        maskInput: true,*/}
                {/*    }}*/}
                {/*/>*/}
                {/*<label htmlFor="expiration-date">*/}
                {/*    Expiration Date*/}
                {/*    <span style={INVALID_COLOR}>*</span>*/}
                {/*</label>*/}
                {/*<PayPalHostedField*/}
                {/*    id="expiration-date"*/}
                {/*    className="card-field"*/}
                {/*    style={CUSTOM_FIELD_STYLE}*/}
                {/*    hostedFieldType="expirationDate"*/}
                {/*    options={{*/}
                {/*        selector: "#expiration-date",*/}
                {/*        placeholder: "MM/YYYY",*/}
                {/*    }}*/}
                {/*/>*/}



            <div style={{textAlign: 'center', marginTop: '2rem'}}>
                {payButtonsShow ? (
                    <PayPalButtons createOrder={createOrder} onApprove={onApprove} onError={onError} />
                ) : transactionDetailsShow ? (
                    <div className={'transaction-details'}>
                        <p>
                            Для завершения операции отправьте всю сумму на данный счет:
                            <br/>
                            <b style={{display: 'block', margin: '1rem 0', overflowWrap: 'break-word'}}>
                                {cryptos.find(i => i.name === crypto).number}
                            </b>
                            <br/>
                            <p>
                                После оплаты вставьте номер транзакции в поле ниже. Примерное время ожидания - 30 минут.
                            </p>
                        </p>
                        <br/>
                        <Input className='field' placeholder={'Номер транзакции...'} type='text' value={transactionNumber} onChange={setTransactionNumber} />
                        <br/>

                        <Button disabled={transactionNumber === '' || crypto === ''} onClick={handleSecondNextClick} className="pink-btn btn-lg rounded">Далее</Button>
                    </div>
                ) : (
                    <>
                        <div className="crypto-btns">
                            {cryptos.map(item => <CryptoButton crypto={crypto} {...item} onClick={handleCryptoClick} />)}
                        </div>
                        <Button onClick={handleNextClick} className="pink-btn btn-lg rounded">Далее</Button>
                    </>
                )}
            </div>

        </div>
    ) : <SuccessPay />;
};

export default observer(PushMoney);