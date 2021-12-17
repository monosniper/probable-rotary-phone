import React, {useContext, useEffect, useState} from 'react';
import ContentBlock from "../ContentBlock";
import {Col, Row} from "reactstrap";
import Search from "@rsuite/icons/Search";
import {Button, Form, Input, InputGroup, Modal} from "rsuite";
import GameList from "../GameList";
import FakeSlider2 from "../fakeSlider2";
import FakeSlider3 from "../fakeSlider3";
import FakeSlider4 from "../fakeSlider4";
import Slider from "../Slider";
import FakeSlider1 from "../fakeSlider1";
import {Helmet} from "react-helmet";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {PUSH_MONEY_ROUTE} from "../../utils/routes";
import {Link} from "react-router-dom";

const Home = () => {
    const {store} = useContext(Context);
    const [games, setGames] = useState([]);

    const handlePushClose = () => store.setPushModal(false);

    useEffect(() => {
        let isMounted = true;
        store.getGames().then((rs) => setGames(rs));
        return () => {
            isMounted = false
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Онлайн казино {process.env.REACT_APP_NAME}</title>
            </Helmet>

            <Slider/>
            {games.length && <FakeSlider1 games={games}/>}
            <ContentBlock>
                <Row>
                    <Col sm={12} md={9} className='filter-bar'>
                        <Button className='filter-btn shaded rounded'>Топ</Button>
                        <Button className='filter-btn shaded rounded'>Специальные</Button>
                        <Button className='filter-btn shaded rounded'>Настольные</Button>
                        <Button className='filter-btn shaded rounded'>Провайдеры</Button>
                    </Col>
                    <Col sm={12} md={3}>
                        <InputGroup className='search shaded rounded'>
                            <Input placeholder='Введите название игры' className='rounded'/>
                            <InputGroup.Addon>
                                <Search/>
                            </InputGroup.Addon>
                        </InputGroup>
                    </Col>
                </Row>

                <Row>
                    <h4 className='title'>Портал к миллиону</h4>
                </Row>

                <Row>
                    <Col sm={12} md={8} lg={9}>
                        <GameList games={games}/>
                    </Col>
                    <Col sm={12} md={4} lg={3}>
                        {games.length && (
                            <>
                                <FakeSlider4 games={games}/>
                                <FakeSlider3 games={games}/>
                                <FakeSlider2 games={games}/>
                            </>
                        )}
                    </Col>
                </Row>
                <Modal className="sign-modal" size="xs" open={store.isPushModalOpen} onClose={handlePushClose}>
                    <Modal.Header>
                        <Modal.Title>Играть</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Для того, чтобы начать играть, вам необходимо пополнить баланс</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to={PUSH_MONEY_ROUTE} className="calipso-btn pink-btn">К кассе</Link>
                        <Button className="calipso-btn pink-btn" onClick={handlePushClose}>Отмена</Button>
                    </Modal.Footer>
                </Modal>
            </ContentBlock>
        </>
    );
};

export default observer(Home);