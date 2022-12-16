import React, {useContext, useEffect, useState} from 'react';
import Logo from '../../assets/images/logo.png';
import {Button, Checkbox, Dropdown, FlexboxGrid, Form, IconButton, Modal, Notification, toaster} from "rsuite";
import {Link} from "react-router-dom";
import {AiOutlineUser} from "react-icons/all";
import Player from "../Player";
import {
    BONUSES_ROUTE,
    FAQ_ROUTE,
    HOME_ROUTE,
    PROFILE_ROUTE,
    PUSH_MONEY_ROUTE,
    STOCKS_ROUTE, TERMS_CONDITIONS_ROUTE, TOURNAMENTS_ROUTE,
    USERS_ROUTE
} from "../../utils/routes";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import i18next from "i18next";
import {useCookies, withCookies} from "react-cookie";
import {useTranslation} from "react-i18next";

const Header = () => {
    const {store} = useContext(Context);
    const [cookies, setCookie] = useCookies(['locale']);
    const { t } = useTranslation();

    // const history = useHistory()
    const [email, setEmail] = useState('');
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerPasswordConfirmation, setRegisterPasswordConfirmation] = useState('');

    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [registerOpen, setRegisterOpen] = useState(false);
    const handleRegisterOpen = () => setRegisterOpen(true);
    const handleRegisterClose = () => setRegisterOpen(false);

    const handleLoginOpen = () => store.setLoginModel(true);
    const handleLoginClose = () => store.setLoginModel(false);

    const handleRegister = () => {
        if(registerPassword === registerPasswordConfirmation) {
            store.register(registerUsername, email, registerPassword, (rs) => {
                toaster.push(
                    <Notification type="success" header={t('success.login')} />, {placement: 'topEnd'}
                )
            }, (e) => {
                toaster.push(
                    <Notification type="error" header={t('error')} >
                        <p>{e.response.data.message}</p>
                    </Notification>, {placement: 'topEnd'}
                )
            })
        } else {
            toaster.push(
                <Notification type="error" header={t('error')} >
                    <p>{t('errors.password')}</p>
                </Notification>, {placement: 'topEnd'}
            )
        }
    }

    const handleLogin = () => {
        store.login(loginUsername, loginPassword, (rs) => {
            toaster.push(
                <Notification type="success" header={t('success.login')} />, {placement: 'topEnd'}
            )
        }, (e) => {
            toaster.push(
                <Notification type="error" header={t('error')} >
                    <p>{e.response.data.message}</p>
                </Notification>, {placement: 'topEnd'}
            )
        })
    }

    const handleForget = () => {
        if(!loginUsername) {
            toaster.push(
                <Notification type="info" header={t('reset')} >
                    <p>{t('enter_mail')}</p>
                </Notification>, {placement: 'topEnd'}
            )
        } else {
            store.forget(loginUsername).then(() => {
                toaster.push(
                    <Notification type="success" header={t('reset')} ><p>{t('messages.mail_send')+loginUsername}</p></Notification>, {placement: 'topEnd'}
                )
            })
        }
    }

    function toggleLang() {
        const lang = i18next.language === 'ru' ? 'en' : 'ru'
        i18next.changeLanguage(lang)
        setCookie('locale', lang)
    }

    return (
        <div className="header">
                <div className="header-left">
                    <Link className="header-logo" to={HOME_ROUTE}>
                        <img alt="Casino"
                            // onClick={history.push(HOME_ROUTE)}
                             src={Logo}/>
                    </Link>
                </div>
                <div className="header-center">
                    <div className="header-menu">
                        <div className="header-menu-item">
                            <Link to={TOURNAMENTS_ROUTE}>{t('tournaments')}</Link>
                        </div>
                        <div className="header-menu-item">
                            <Link to={STOCKS_ROUTE}>{t('stocks')}</Link>
                        </div>
                        <div className="header-menu-item">
                            <Link to={BONUSES_ROUTE}>{t('bonuses')}</Link>
                        </div>
                        {/*<div className="header-menu-item">*/}
                        {/*    <Link to={FAQ_ROUTE}>faq</Link>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="header-right">

                    {/*<Player />*/}
                    <div></div>

                    <div className="header-panel">
                        <div className="header-panel-item">
                            <Dropdown
                                renderToggle={(props, ref) => <Button {...props} ref={ref} className="casino-btn">{i18next.language.toUpperCase()}</Button>}
                            >
                                <Dropdown.Item className="casino-btn" onSelect={() => toggleLang()}>{i18next.language === 'en' ? 'RU' : 'EN'}</Dropdown.Item>
                            </Dropdown>
                        </div>
                        <div className="header-panel-item">

                            {store.user.isAdmin &&
                            <Link style={{margin: '0 .5rem'}} to={USERS_ROUTE}>
                                <Button className="casino-btn">Админка</Button>
                            </Link>
                            }
                            {store.isAuth &&
                            <>
                                <span className="balance">{Number.parseFloat(store.user.balance).toFixed(2)} ₽</span>
                                <Link to={PUSH_MONEY_ROUTE}>
                                    <Button className="casino-btn">{t('cassa')}</Button>
                                </Link>
                            </>
                            }
                        </div>
                        <div className="header-panel-item">
                            {store.isAuth ?  <Link to={PROFILE_ROUTE} >
                                <IconButton icon={<AiOutlineUser/>} className="casino-btn" circle />
                            </Link> : (
                                <>
                                    <Button className="casino-btn" style={{marginRight: '.5rem'}} onClick={handleRegisterOpen}>{t('register')}</Button>
                                    <Button className="casino-btn" onClick={handleLoginOpen}>{t('login')}</Button>

                                    <Modal className="sign-modal" size="xs" open={store.isLoginModalOpen} onClose={handleLoginClose}>
                                        <Modal.Header>
                                            <Modal.Title>{t('login')}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form fluid>
                                                <Form.Group controlId="login-username">
                                                    <Form.ControlLabel>{t('login_or_mail')}</Form.ControlLabel>
                                                    <Form.Control name="username" value={loginUsername} onChange={setLoginUsername} />
                                                </Form.Group>
                                                <Form.Group controlId="login-password">
                                                    <Form.ControlLabel>{t('password')}</Form.ControlLabel>
                                                    <Form.Control name="password" type="password" value={loginPassword} onChange={setLoginPassword} />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button className="calipso-btn pink-btn" onClick={handleForget}>{t('forget_password')}</Button>
                                            <Button className="calipso-btn pink-btn" onClick={handleLogin}>{t('to_login')}</Button>
                                            <Button className="calipso-btn pink-btn" onClick={handleLoginClose}>{t('cancel')}</Button>
                                        </Modal.Footer>
                                    </Modal>
                                    <Modal className="sign-modal" size="xs" open={registerOpen} onClose={handleRegisterClose}>
                                        <Modal.Header>
                                            <Modal.Title>{t('register')}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form fluid>
                                                <Form.Group controlId="email">
                                                    <Form.ControlLabel>E-mail</Form.ControlLabel>
                                                    <Form.Control name="email" value={email} onChange={setEmail} />
                                                </Form.Group>
                                                <Form.Group controlId="register-username">
                                                    <Form.ControlLabel>{t('username')}</Form.ControlLabel>
                                                    <Form.Control name="username" value={registerUsername} onChange={setRegisterUsername} />
                                                </Form.Group>
                                                <Form.Group controlId="register-password">
                                                    <Form.ControlLabel>{t('password')}</Form.ControlLabel>
                                                    <Form.Control name="password" type="password" value={registerPassword} onChange={setRegisterPassword} />
                                                </Form.Group>
                                                <Form.Group controlId="register-password">
                                                    <Form.ControlLabel>{t('password_again')}</Form.ControlLabel>
                                                    <Form.Control name="password" type="password" value={registerPasswordConfirmation} onChange={setRegisterPasswordConfirmation} />
                                                </Form.Group>
                                                <Checkbox>{t('agree_with')} <Link to={TERMS_CONDITIONS_ROUTE}>{t('terms_conditions')}</Link></Checkbox>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button className="calipso-btn pink-btn" onClick={handleRegister}>{t('register')}</Button>
                                            <Button className="calipso-btn pink-btn" onClick={handleRegisterClose}>{t('cancel')}</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default observer(Header);