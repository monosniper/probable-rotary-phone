import React, {useContext, useEffect, useState} from 'react';
import Logo from '../../assets/images/logo.png';
import {Button, Dropdown, Form, IconButton, Modal, Notification, toaster} from "rsuite";
import {Link} from "react-router-dom";
import {AiOutlineUser} from "react-icons/all";
import Player from "../Player";
import { PROFILE_ROUTE, PUSH_MONEY_ROUTE, USERS_ROUTE} from "../../utils/routes";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
// import {useHistory} from 'react-router';

const Header = () => {

    const {store} = useContext(Context);

    // const history = useHistory()
    console.log(store.user)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginOpen, setLoginOpen] = useState(false);
    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => setLoginOpen(false);

    const handleLogin = () => {
        store.login(username, password, (rs) => {
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

    return (
        <div className="header">
                <div className="header-left">
                    <img alt="Casino"
                         // onClick={history.push(HOME_ROUTE)}
                         src={Logo}/>
                </div>
                <div className="header-center">
                    <div className="header-menu">
                        <div className="header-menu-item">
                            <Link to="#">Турниры</Link>
                        </div>
                        <div className="header-menu-item">
                            <Link to="#">Акции</Link>
                        </div>
                        <div className="header-menu-item">
                            <Link to="#">Бонусы</Link>
                        </div>
                        <div className="header-menu-item">
                            <Link to="#">faq</Link>
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <Player />
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
                                <span className="balance">0.00 ₴</span>
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
                                    <Button className="casino-btn" onClick={handleLoginOpen}>Вход</Button>
                                    <Modal className="sign-modal" size="xs" open={loginOpen} onClose={handleLoginClose}>
                                        <Modal.Header>
                                            <Modal.Title>Вход</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form fluid>
                                                <Form.Group controlId="username">
                                                    <Form.ControlLabel>Логин</Form.ControlLabel>
                                                    <Form.Control name="username" value={username} onChange={setUsername} />
                                                </Form.Group>
                                                <Form.Group controlId="password">
                                                    <Form.ControlLabel>Пароль</Form.ControlLabel>
                                                    <Form.Control name="password" type="password" value={password} onChange={setPassword} />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button className="calipso-btn pink-btn" onClick={handleLogin}>Войти</Button>
                                            <Button className="calipso-btn pink-btn" onClick={handleLoginClose}>Отмена</Button>
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