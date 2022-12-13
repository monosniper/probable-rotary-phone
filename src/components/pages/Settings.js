import React, {useContext, useEffect, useRef, useState} from 'react';
import {Context} from "../../index";
import {Helmet} from "react-helmet";
import {Col, Row} from "reactstrap";
import ContentBlock from "../ContentBlock";
import {Button, Form, IconButton, Modal, Notification, toaster} from "rsuite";
import {AiFillDelete, AiTwotoneDelete, BsFillImageFill} from "react-icons/all";
import Plus from "@rsuite/icons/Plus";

import { FileDrop } from 'react-file-drop'
import GameList from "../GameList";
import ImageUploading from "react-images-uploading";

const Settings = () => {
    const {store} = useContext(Context);

    const fileInputRef = useRef(null);

    const [songs, setSongs] = useState([]);
    const [games, setGames] = useState([]);

    const [isAddGameModalOpen, setIsAddGameModalOpen] = useState(false);
    const [gameName, setGameName] = useState('');
    const [gameSlug, setGameSlug] = useState('');
    const [gameImage, setGameImage] = useState();

    const handleAddGameModalOpen = () => setIsAddGameModalOpen(true);
    const handleAddGameModalClose = () => setIsAddGameModalOpen(false);
    const handleAddGame = () => {
        function renameFile(originalFile, newName) {
            return new File([originalFile], newName, {
                type: originalFile.type,
                lastModified: originalFile.lastModified,
            });
        }

        const imageName = gameSlug + '.' + gameImage[0].file.name.split('.').pop();

        store.uploadFiles(gameImage.map(image => {
            return {
                file: renameFile(image.file, imageName),
                dir: 'games'
            }
        }), false);

        store.createGame(gameName, gameSlug, imageName, (game) => {
            toaster.push(
                <Notification type="success" header="Игра добавлена успешно" />, {placement: 'topEnd'}
            )

            setGameName('');
            setGameSlug('');

            handleAddGameModalClose();

            setGames([...games, game.data])
        }, (e) => {
            toaster.push(
                <Notification type="error" header="Ошибка!" >
                    <p>{e.response.data.message}</p>
                </Notification>, {placement: 'topEnd'}
            )
        });
    }

    const deleteGame = (slug) => {
        store.deleteGame(slug).then(() => setGames(games.filter(game => game.slug !== slug)));
    }

    const onGameImageUpload = (imageList) => setGameImage(imageList);

    const onFileInputChange = (event) => {
        const { files } = event.target;
        const filesToUpload = [...files].map(file => {
            return {
                file, dir: 'player'
            }
        });

        store.uploadFiles(filesToUpload, false);
        const songNames = filesToUpload.map(({file}) => file.name);
        setSongs([...songs, ...songNames]);
    }

    const onTargetClick = () => {
        fileInputRef.current.click()
    }

    const handleDeleteSong = (name) => {
        store.deleteSong(name).then(() => {
            setSongs([...songs.filter(song => song !== name)])
        });
    }

    useEffect(() => {
        let isMounted = true;

        store.getSongs().then((songs) => isMounted && setSongs(songs));
        store.getGames().then((games) => isMounted && setGames(games));

        return () => { isMounted = false };
    }, []);

    return (
        <ContentBlock>
            <Helmet>
                <title>Настройки - Админка | {process.env.REACT_APP_NAME}</title>
            </Helmet>

            <Row>
                <Col sm={12} md={6}>
                    <h6 className="cabinet-title" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <span>Игры</span>
                        <IconButton onClick={handleAddGameModalOpen} icon={<Plus />} />
                        <Modal className="sign-modal" size="xs" open={isAddGameModalOpen} onClose={handleAddGameModalClose}>
                            <Modal.Header>
                                <Modal.Title>Добавить игру</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form fluid>
                                    <Form.Group controlId="login-username">
                                        <Form.ControlLabel>Название</Form.ControlLabel>
                                        <Form.Control value={gameName} onChange={setGameName} name="name" />
                                    </Form.Group>
                                    <Form.Group controlId="login-password">
                                        <Form.ControlLabel>Слаг</Form.ControlLabel>
                                        <Form.Control value={gameSlug} onChange={setGameSlug} name="slug"/>
                                    </Form.Group>
                                    <ImageUploading
                                        value={gameImage}
                                        onChange={onGameImageUpload}
                                        dataURLKey="data_url"
                                    >
                                        {({
                                              onImageUpload
                                          }) => (
                                            <>
                                                <Button onClick={onImageUpload} className='choose-photo-btn'>
                                                    <BsFillImageFill /> {gameImage ? gameImage[0].file.name : 'Выбрать фото'}
                                                </Button>
                                            </>
                                        )}
                                    </ImageUploading>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button className="calipso-btn pink-btn" onClick={handleAddGame}>Добавить</Button>
                                <Button className="calipso-btn pink-btn" onClick={handleAddGameModalClose}>Отмена</Button>
                            </Modal.Footer>
                        </Modal>
                    </h6>
                    <GameList deleteGame={deleteGame} forAdmin={true} games={games} />
                </Col>
                <Col sm={12} md={6}>
                    <h6 className="cabinet-title" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <span>Плеер</span>
                        <input
                            onChange={onFileInputChange}
                            ref={fileInputRef}
                            type="file"
                            className="hidden"
                            multiple
                            style={{display: 'none'}}
                        />
                        <FileDrop
                            onTargetClick={onTargetClick}><IconButton icon={<Plus />} /></FileDrop>
                    </h6>
                    <div className="player-songs">
                        {songs.map((song, i) => (
                            <div className="player-songs-item" key={song + i}>
                                <div className="player-songs-item-title">{song}</div>
                                <IconButton onClick={() => handleDeleteSong(song)} icon={<AiFillDelete />} circle className="player-songs-item-delete" />
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </ContentBlock>
    );
};

export default Settings;