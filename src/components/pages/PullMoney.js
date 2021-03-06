import React, {useContext, useState} from 'react';
import {PROFILE_ROUTE} from "../../utils/routes";
import {Link} from "react-router-dom";
import {Button, IconButton, Input, MaskedInput, Notification, toaster} from "rsuite";
import Minus from "@rsuite/icons/Minus";
import Plus from "@rsuite/icons/Plus";
import {Helmet} from "react-helmet";
import {Context} from "../../index";
import BTCIcon from "../../assets/images/crypto/BTC.png";
import BnBIcon from "../../assets/images/crypto/BnB.png";
import BUSDIcon from "../../assets/images/crypto/BUSD.png";
import ETHIcon from "../../assets/images/crypto/ETH.png";
import USDTIcon from "../../assets/images/crypto/USDT.png";
import CryptoButton from "../CryptoButton";

const PullMoney = () => {

    const {store} = useContext(Context);

    const verified = true;
    const [amount, setAmount] = useState(10);
    const [cardNumber, setCardNumber] = useState('');
    const [cryptoNumber, setCryptoNumber] = useState('');
    const [crypto, setCrypto] = useState('');
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

    const submit = () => {
        if(amount > 10 && amount < 50000) {
            if(cryptoNumber !== '') {
                store.createPull(cryptoNumber, crypto, amount, (rs) => {
                    toaster.push(
                        <Notification type="success" header="???????????? ???? ?????????? ???????????????? ??????????????" />, {placement: 'topEnd'}
                    )

                    setAmount(10);
                    setCryptoNumber('');
                }, (e) => {
                    toaster.push(
                        <Notification type="error" header="????????????!" >
                            <p>{e.response.data.message}</p>
                        </Notification>, {placement: 'topEnd'}
                    )
                });
            } else {
                toaster.push(
                    <Notification type="error" header="????????????">
                        <p>?????????????? ???????? ????????????????</p>
                    </Notification>
                )
            }
        } else {
            toaster.push(
                <Notification type="error" header="????????????">
                    <p>?????????????? ??????????</p>
                </Notification>
            )
        }
    }

    const handleCryptoClick = (name) => setCrypto(name)

    return verified ? (
        <div>
            <Helmet>
                <title>?????????? ?????????? - ?????????? | {process.env.REACT_APP_NAME}</title>
            </Helmet>
            <h6><b>???????????????? ?????? ????????????: {store.user.balance} $</b></h6>

            <div className="alert">
                ?????????????????????? ?????????? ?????? ???????????? - $10
                <br/>
                ???????? BEP20
            </div>

            <div className="pushmoney-btn-toolbar">
                <Button onClick={() => setAmount(10)} className="pushmoney-btn">10</Button>
                <Button onClick={() => setAmount(20)} className="pushmoney-btn">20</Button>
                <Button onClick={() => setAmount(50)} className="pushmoney-btn">50</Button>
                <Button onClick={() => setAmount(100)} className="pushmoney-btn">100</Button>
                <Button onClick={() => setAmount(200)} className="pushmoney-btn">200</Button>
            </div>

            <div className="pushmoney-amount-group">
                <IconButton onClick={() => setAmount(amount - 1)} circle icon={<Minus />} />
                <Input className='field' type='number' min="10" max="50000" value={amount} onChange={setAmount} />
                <IconButton onClick={() => setAmount(amount + 1)} circle icon={<Plus />} />
            </div>

            <div className="crypto-btns">
                {cryptos.map(item => <CryptoButton crypto={crypto} {...item} onClick={handleCryptoClick} />)}
            </div>

            <div className='card-group'>
                <div>
                    {/*<p>?????????????? ?????????? ??????????</p>*/}
                    {/*<MaskedInput*/}
                    {/*    className='field'*/}
                    {/*    value={cardNumber}*/}
                    {/*    mask={cardMask}*/}
                    {/*    keepCharPositions={true}*/}
                    {/*    showMask={false}*/}
                    {/*    style={{ width: 300 }}*/}
                    {/*    onChange={setCardNumber}*/}
                    {/*/>*/}
                    <br/>
                    <p style={{textAlign: 'center'}}>?????????????? ?????????? ??????????</p>
                    <br/>
                    <Input
                        className='field'
                        placeholder={'?????????? ????????????????...'}
                        type='text'
                        value={cryptoNumber}
                        onChange={setCryptoNumber} />
                </div>
            </div>

            <div style={{textAlign: 'center', marginTop: '2rem'}}>
                <Button onClick={submit} className="pink-btn btn-lg rounded">??????????</Button>
            </div>
        </div>
    ) : <p style={{margin: '2rem 0', textAlign: 'center'}}><Helmet>
        <title>?????????? ?????????? - ?????????? | Makao777</title>
    </Helmet>?????? ?????????????????????? ???????????????????? ???????????? ?????????????????????? ???????? ?????????? ???????????????? ?? ?????????? ?? <Link to={PROFILE_ROUTE}>??????????????</Link></p>;
};

export default PullMoney;