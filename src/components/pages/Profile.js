import React, {useContext, useState} from 'react';
import {Col,  Row} from "reactstrap";
import {Button, Form, IconButton, Notification, Radio, RadioGroup, toaster} from "rsuite";
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/all";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import moment from "moment";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

const Profile = () => {
    const { t } = useTranslation();

    const {store} = useContext(Context);
    const user = store.user;

    const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);

    const [username, setUsername] = useState(user.username);
    const [first_name, setFirstName] = useState(user.first_name);
    const [last_name, setLastName] = useState(user.last_name);
    const [middle_name, setMiddleName] = useState(user.middle_name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);

    const [birthday, setBirthday] = useState(user.birthday);
    const [sex, setSex] = useState(user.sex);

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');

    const toggleOldPasswordVisible = () => {
        setOldPasswordVisible(!oldPasswordVisible);
    }

    const toggleNewPasswordVisible = () => {
        setNewPasswordVisible(!newPasswordVisible);
    }

    const handleLogout = () => {
        store.logout();
    }

    const handleUserUpdate1 = () => {
        store.updateUser({
            first_name,
            last_name,
            middle_name,
            username,
            email,
            phone,
        }, (rs) => {
            toaster.push(<Notification type="success" header={t('saved')} />)
        }, (e) => {
            toaster.push(
                <Notification type="error" header={t('error')}>
                    <p>{e.response.data.message}</p>
                </Notification>
            )
        })
    }

    const handleUserUpdate2 = () => {
        store.updateUser({
            birthday,
            sex,
        }, (rs) => {
            toaster.push(<Notification type="success" header={t('saved')} />)
        }, (e) => {
            toaster.push(
                <Notification type="error" header={t('error')}>
                    <p>{e.response.data.message}</p>
                </Notification>
            )
        })
    }

    const handlePasswordForget = () => {
        store.resetPassword().then(() => {
            toaster.push(
                <Notification type="success" header={t('new_password')}>
                    <p>{t('new_password_send')} {user.email}</p>
                </Notification>
            )
        })
    }

    const handlePasswordUpdate = () => {
        if(newPassword !== '' && oldPassword !== '' && newPasswordConfirmation !== '') {
            if(newPassword === newPasswordConfirmation) {
                if(newPassword !== oldPassword) {
                    store.updatePassword(oldPassword, newPassword, (rs) => {
                        toaster.push(<Notification type="success" header={t('saved')} />)

                        setOldPassword('');
                        setNewPassword('');
                        setNewPasswordConfirmation('');
                    }, (e) => {
                        toaster.push(
                            <Notification type="error" header={t('error')}>
                                <p>{e.response.data.message}</p>
                            </Notification>
                        )
                    });
                } else {
                    toaster.push(
                        <Notification type="error" header={t('error')}>
                            <p>{t('new_password_err')}</p>
                        </Notification>
                    )
                }
            } else {
                toaster.push(
                    <Notification type="error" header={t('error')}>
                        <p>{t('passwords_not_confirmed')}</p>
                    </Notification>
                )
            }
        } else {
            toaster.push(
                <Notification type="error" header={t('error')}>
                    <p>{t('all_fields_valiedation')}</p>
                </Notification>
            )
        }
    }

    return (
        <div className="cabinet">
            <Helmet>
                <title>{t('profile')} | {process.env.REACT_APP_NAME}</title>
            </Helmet>
            <Row>
                <Col sm={12} md={6}>
                    <Form fluid className='cabinet-form'>
                        <h6 className="cabinet-title">{t('ur_info')}</h6>
                        <Form.Group controlId="id">
                            <Form.ControlLabel className='cabinet-label'>{t('ur_id')}</Form.ControlLabel>
                            <Form.Control readOnly={true} className='cabinet-field' name="id" value={user.id} />
                        </Form.Group>
                        <Form.Group controlId="last_name">
                            <Form.ControlLabel className='cabinet-label'>{t('surname')}</Form.ControlLabel>
                            <Form.Control className='cabinet-field' name="last_name" value={last_name} onChange={setLastName} />
                        </Form.Group>
                        <Form.Group controlId="first_name">
                            <Form.ControlLabel className='cabinet-label'>{t('first_name')}</Form.ControlLabel>
                            <Form.Control className='cabinet-field' name="first_name" value={first_name} onChange={setFirstName} />
                        </Form.Group>
                        <Form.Group controlId="middle_name">
                            <Form.ControlLabel className='cabinet-label'>{t('middle_name')}</Form.ControlLabel>
                            <Form.Control className='cabinet-field' name="middle_name" value={middle_name} onChange={setMiddleName} />
                        </Form.Group>
                        <Form.Group controlId="username">
                            <Form.ControlLabel className='cabinet-label'>{t('username')}</Form.ControlLabel>
                            <Form.Control className='cabinet-field' name="username" value={username} onChange={setUsername} />
                        </Form.Group>
                        <Form.Group controlId="email" className='cabinet-group'>
                            <Form.ControlLabel className='cabinet-label'>Email</Form.ControlLabel>
                            <Form.Control className='cabinet-field' name="email" type="email" value={email} onChange={setEmail} />
                            <Button className="cabinet-group-btn rounded">Подтвердить</Button>
                        </Form.Group>
                        <Form.Group controlId="phone" className='cabinet-group'>
                            <Form.ControlLabel className='cabinet-label'>{t('phone')}</Form.ControlLabel>
                            <Form.Control className='cabinet-field' name="phone" value={phone} onChange={setPhone} />
                            <Button className="cabinet-group-btn rounded">{t('confirm')}</Button>
                        </Form.Group>
                        <Form.Group style={{textAlign: 'center'}}>
                            <Button onClick={handleUserUpdate1} className='pink-btn btn-lg rounded'>{t('save')}</Button>
                        </Form.Group>
                    </Form>
                </Col>
                <Col sm={12} md={6}>
                    <Form fluid className='cabinet-form'>
                        <h6 className="cabinet-title">{t('self_info')}</h6>
                        <Form.Group controlId="birthday">
                            <Form.ControlLabel className='cabinet-label'>{t('birthday')}</Form.ControlLabel>
                            <Form.Control type='date' className='cabinet-field' name="birthday" value={moment(birthday).format('yyyy-MM-DD')} onChange={setBirthday} />
                        </Form.Group>
                        <Form.Group controlId="sex">
                            <RadioGroup defaultValue={sex} name="sex" inline onChange={setSex}>
                                <Radio value="male">{t('male')}</Radio>
                                <Radio value="female">{t('female')}</Radio>
                            </RadioGroup>
                        </Form.Group>
                        <Form.Group style={{textAlign: 'center'}}>
                            <Button onClick={handleUserUpdate2} className='pink-btn btn-lg rounded'>{t('save')}</Button>
                        </Form.Group>
                    </Form>
                    <Form fluid className='cabinet-form'>
                        <h6 className="cabinet-title">{t('password_change')}</h6>
                        <Form.Group controlId="old_password" className='cabinet-group cabinet-group-sm'>
                            <Form.ControlLabel className='cabinet-label'>{t('old_pass')}</Form.ControlLabel>
                            <Form.Control className='cabinet-field' name="old_password" onChange={setOldPassword} type={oldPasswordVisible ? 'text' : 'password'} />
                            <IconButton onClick={toggleOldPasswordVisible} className="cabinet-group-btn" circle>{oldPasswordVisible ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}</IconButton>
                        </Form.Group>
                        <Form.Group controlId="new_password" className='cabinet-group cabinet-group-sm'>
                            <Form.ControlLabel className='cabinet-label'>{t('new_pass')}</Form.ControlLabel>
                            <Form.Control className='cabinet-field' name="new_password" onChange={setNewPassword} type={newPasswordVisible ? 'text' : 'password'} />
                            <IconButton onClick={toggleNewPasswordVisible} className="cabinet-group-btn" circle>{newPasswordVisible ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}</IconButton>
                        </Form.Group>
                        <Form.Group controlId="new_password_confirmation" className='cabinet-group cabinet-group-sm'>
                            <Form.ControlLabel className='cabinet-label'>{t('new_pass_again')}</Form.ControlLabel>
                            <Form.Control className='cabinet-field' name="new_password_confirmation" onChange={setNewPasswordConfirmation} type={newPasswordVisible ? 'text' : 'password'} />
                            <IconButton onClick={toggleNewPasswordVisible} className="cabinet-group-btn" circle>{newPasswordVisible ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}</IconButton>
                        </Form.Group>
                        <Form.Group style={{justifyContent: 'center', gap: '1rem', display: 'flex'}}>
                            <Button onClick={handlePasswordForget} className='pink-btn btn-lg rounded'>{t('forget_password')}</Button>
                            <Button onClick={handlePasswordUpdate} className='pink-btn btn-lg rounded'>{t('save')}</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <div style={{textAlign: 'center', margin: '1rem 0'}}>
                <Button className="pink-btn lg-btn" onClick={handleLogout}>{t('logout')}</Button>
            </div>
        </div>
    );
};

export default observer(Profile);