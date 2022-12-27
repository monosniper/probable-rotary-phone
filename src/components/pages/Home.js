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
import {useTranslation} from "react-i18next";
import Categories from "../Categories";
import SlotsSlider from "../SlotsSlider";
import PaymentsSlider from "../PaymentsSlider";
import {shuffle} from "../../utils/shuffle";

const Home = () => {
    const { t } = useTranslation();

    const {store} = useContext(Context);
    const [games, setGames] = useState([]);
    const [activeBtn, setActiveBtn] = useState('');
    const texts = {
        top: 'TOP',
        special: t('special'),
        // table: 'Настольные',
    }

    const handlePushClose = () => store.setPushModal(false);
    const toggleActiveBtn = (value) => setActiveBtn(activeBtn === value ? '' : value)

    const getFilteredGames = () => {
        const filters = {
            top: (game, i) => i <= 24,
            special: (game, i) => i > 24 && i <= 49,
        }

        store.gamesFilter = activeBtn !== '' ? filters[activeBtn] : () => true
    }

    useEffect(() => {
        let isMounted = true;
        store.getGames().then((rs) => setGames(rs));
        return () => {
            isMounted = false
        };
    }, []);

    useEffect(() => {
        getFilteredGames()
    }, [activeBtn])

    return (
        <>
            <Helmet>
                <title>Онлайн казино {process.env.REACT_APP_NAME}</title>
            </Helmet>

            <Slider/>
            <Categories/>

            {games.length && <FakeSlider1 games={games}/>}

            {store.category ? (
                <SlotsSlider active games={shuffle(games).slice(0, 20)} label={t('categories.'+store.category)} />
            ) : (
                <>
                    <SlotsSlider id={'slots'} games={games.slice(0, 10)} label={'Top Slots'} />
                    <SlotsSlider id={'instant'} games={games.slice(10, 20)} label={'Top Instant games'} />
                    <SlotsSlider id={'live'} games={games.slice(20, 30)} label={'Top Live Casino'} />
                    <SlotsSlider id={'tv'} games={games.slice(30, 40)} label={'Top TV Games'} />
                    <SlotsSlider id={'virtual'} games={games.slice(40, 50)} label={'Top Virtual Sports'} />
                </>
            )}

            <PaymentsSlider />

            {/*<ContentBlock>*/}
            {/*    <Row>*/}
            {/*        <Col sm={12} md={9} className='filter-bar'>*/}
            {/*            <Button onClick={() => toggleActiveBtn('top')} className={'filter-btn shaded rounded ' + (activeBtn === 'top' ? 'active' : '')}>TOP</Button>*/}
            {/*            <Button onClick={() => toggleActiveBtn('special')} className={'filter-btn shaded rounded ' + (activeBtn === 'special' ? 'active' : '')}>{t('special')}</Button>*/}
            {/*            /!*<Button onClick={() => toggleActiveBtn('table')} className={'filter-btn shaded rounded ' + (activeBtn === 'table' ? 'active' : '')}>Настольные</Button>*!/*/}
            {/*            /!*<Button className='filter-btn shaded rounded'>Провайдеры</Button>*!/*/}
            {/*        </Col>*/}
            {/*        <Col sm={12} md={3}>*/}
            {/*            <InputGroup className='search shaded rounded'>*/}
            {/*                <Input placeholder={t('type_game_name')} className='rounded'/>*/}
            {/*                <InputGroup.Addon>*/}
            {/*                    <Search/>*/}
            {/*                </InputGroup.Addon>*/}
            {/*            </InputGroup>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}

            {/*    <Row>*/}
            {/*        <h4 className='title'>{activeBtn !== '' ? texts[activeBtn] : t('billion_portal')}</h4>*/}
            {/*    </Row>*/}

            {/*    <Row>*/}
            {/*        <Col sm={12} md={8} lg={9}>*/}
            {/*            <GameList games={games.filter(store.gamesFilter)}/>*/}
            {/*        </Col>*/}
            {/*        <Col sm={12} md={4} lg={3}>*/}
            {/*            {games.length && (*/}
            {/*                <>*/}
            {/*                    <FakeSlider4 games={games}/>*/}
            {/*                    <FakeSlider3 games={games}/>*/}
            {/*                    <FakeSlider2 games={games}/>*/}
            {/*                </>*/}
            {/*            )}*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</ContentBlock>*/}

            <Modal className="sign-modal" size="xs" open={store.isPushModalOpen} onClose={handlePushClose}>
                <Modal.Header>
                    <Modal.Title>{t('play')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{t('play_desc')}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Link to={PUSH_MONEY_ROUTE}><Button className="calipso-btn pink-btn">{t('to_cassa')}</Button></Link>
                    <Button className="calipso-btn pink-btn" onClick={handlePushClose}>{t('cancel')}</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default observer(Home);