import React, {useContext, useEffect, useState} from 'react';
import Logo from '../../assets/images/logo.png';
import {Button, Dropdown, FlexboxGrid, Form, IconButton, Modal, Notification, toaster} from "rsuite";
import {Link} from "react-router-dom";
import {AiOutlineUser} from "react-icons/all";
import Player from "../Player";
import {
    BONUSES_ROUTE,
    FAQ_ROUTE,
    HOME_ROUTE,
    PROFILE_ROUTE,
    PUSH_MONEY_ROUTE,
    STOCKS_ROUTE, TOURNAMENTS_ROUTE,
    USERS_ROUTE
} from "../../utils/routes";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {Container} from "reactstrap";
// import {useHistory} from 'react-router';

const Header = () => {

    const {store} = useContext(Context);

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
                    <Notification type="success" header="Вход выполнен успешно" />, {placement: 'topEnd'}
                )
            }, (e) => {
                toaster.push(
                    <Notification type="error" header="Ошибка!" >
                        <p>{e.response.data.message}</p>
                    </Notification>, {placement: 'topEnd'}
                )
            })
        } else {
            toaster.push(
                <Notification type="error" header="Ошибка!" >
                    <p>Пароли не совпадают</p>
                </Notification>, {placement: 'topEnd'}
            )
        }
    }

    const handleLogin = () => {
        store.login(loginUsername, loginPassword, (rs) => {
            toaster.push(
                <Notification type="success" header="Вход выполнен успешно" />, {placement: 'topEnd'}
            )
        }, (e) => {
            toaster.push(
                <Notification type="error" header="Ошибка!" >
                    <p>{e.response.data.message}</p>
                </Notification>, {placement: 'topEnd'}
            )
        })
    }

    const handleForget = () => {
        if(!loginUsername) {
            toaster.push(
                <Notification type="info" header="Восстановление" >
                    <p>Введите почту</p>
                </Notification>, {placement: 'topEnd'}
            )
        } else {
            store.forget(loginUsername).then(() => {
                toaster.push(
                    <Notification type="success" header="Восстановление" ><p>{"Письмо с дальнейшей инструкцией было отправлено на почту "+loginUsername}</p></Notification>, {placement: 'topEnd'}
                )
            })
        }
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
                            <Link to={TOURNAMENTS_ROUTE}>Турниры</Link>
                        </div>
                        <div className="header-menu-item">
                            <Link to={STOCKS_ROUTE}>Акции</Link>
                        </div>
                        <div className="header-menu-item">
                            <Link to={BONUSES_ROUTE}>Бонусы</Link>
                        </div>
                        <div className="header-menu-item">
                            <Link to={FAQ_ROUTE}>faq</Link>
                        </div>
                    </div>
                </div>
                <div className="header-right">

                    {/*<Player />*/}
                    <div></div>

                    <div className="header-panel">
                        <div className="header-panel-item">
                            <Dropdown renderToggle={(props, ref) => <Button {...props} ref={ref} className="casino-btn">RU</Button>}>
                                <Dropdown.Item className="casino-btn">En</Dropdown.Item>
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
                                <span className="balance">{Number.parseFloat(store.user.balance).toFixed(2)} $</span>
                                <Link to={PUSH_MONEY_ROUTE}>
                                    <Button className="casino-btn">Касса</Button>
                                </Link>
                            </>
                            }
                        </div>
                        <div className="header-panel-item">
                            {store.isAuth ?  <Link to={PROFILE_ROUTE} >
                                <IconButton icon={<AiOutlineUser/>} className="casino-btn" circle />
                            </Link> : (
                                <>
                                    <Button className="casino-btn" style={{marginRight: '.5rem'}} onClick={handleRegisterOpen}>Регистрация</Button>
                                    <Button className="casino-btn" onClick={handleLoginOpen}>Вход</Button>

                                    <Modal className="sign-modal" size="xs" open={store.isLoginModalOpen} onClose={handleLoginClose}>
                                        <Modal.Header>
                                            <Modal.Title>Вход</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form fluid>
                                                <Form.Group controlId="login-username">
                                                    <Form.ControlLabel>Логин или почта</Form.ControlLabel>
                                                    <Form.Control name="username" value={loginUsername} onChange={setLoginUsername} />
                                                </Form.Group>
                                                <Form.Group controlId="login-password">
                                                    <Form.ControlLabel>Пароль</Form.ControlLabel>
                                                    <Form.Control name="password" type="password" value={loginPassword} onChange={setLoginPassword} />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button className="calipso-btn pink-btn" onClick={handleForget}>Забыли пароль?</Button>
                                            <Button className="calipso-btn pink-btn" onClick={handleLogin}>Войти</Button>
                                            <Button className="calipso-btn pink-btn" onClick={handleLoginClose}>Отмена</Button>
                                        </Modal.Footer>
                                    </Modal>
                                    <Modal className="sign-modal" size="xs" open={registerOpen} onClose={handleRegisterClose}>
                                        <Modal.Header>
                                            <Modal.Title>Регистрация</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form fluid>
                                                <Form.Group controlId="email">
                                                    <Form.ControlLabel>E-mail</Form.ControlLabel>
                                                    <Form.Control name="email" value={email} onChange={setEmail} />
                                                </Form.Group>
                                                <Form.Group controlId="register-username">
                                                    <Form.ControlLabel>Логин</Form.ControlLabel>
                                                    <Form.Control name="username" value={registerUsername} onChange={setRegisterUsername} />
                                                </Form.Group>
                                                <Form.Group controlId="register-password">
                                                    <Form.ControlLabel>Пароль</Form.ControlLabel>
                                                    <Form.Control name="password" type="password" value={registerPassword} onChange={setRegisterPassword} />
                                                </Form.Group>
                                                <Form.Group controlId="register-password">
                                                    <Form.ControlLabel>Пароль еще раз</Form.ControlLabel>
                                                    <Form.Control name="password" type="password" value={registerPasswordConfirmation} onChange={setRegisterPasswordConfirmation} />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button className="calipso-btn pink-btn" onClick={handleRegister}>Регистрация</Button>
                                            <Button className="calipso-btn pink-btn" onClick={handleRegisterClose}>Отмена</Button>
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