import React, {useContext, useEffect, useState} from 'react';
import ContentBlock from "../ContentBlock";
import {Col, Row} from "reactstrap";
import Search from "@rsuite/icons/Search";
import {Button, Input, InputGroup} from "rsuite";
import GameList from "../GameList";
import FakeSlider2 from "../fakeSlider2";
import FakeSlider3 from "../fakeSlider3";
import FakeSlider4 from "../fakeSlider4";
import Slider from "../Slider";
import FakeSlider1 from "../fakeSlider1";
import {Helmet} from "react-helmet";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Home = () => {
    const {store} = useContext(Context);
    const [games, setGames] = useState([]);

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
            </ContentBlock>
        </>
    );
};

export default observer(Home);