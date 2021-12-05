import React, {useContext, useEffect, useRef, useState} from 'react';
import {Context} from "../../index";
import {Helmet} from "react-helmet";
import {Col, Row} from "reactstrap";
import ContentBlock from "../ContentBlock";
import {Button, IconButton} from "rsuite";
import {AiFillDelete, BsFillImageFill} from "react-icons/all";
import Plus from "@rsuite/icons/Plus";

import { FileDrop } from 'react-file-drop'

const Settings = () => {
    const {store} = useContext(Context);

    const fileInputRef = useRef(null);
    const [songs, setSongs] = useState([]);

    const onFileInputChange = (event) => {
        const { files } = event.target;
        const filesToUpload = [...files].map(file => {
            return {
                file, dir: 'player'
            }
        });
        console.log(filesToUpload.map(({file}) => file.name))
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
                <Col sm={12} md={6}></Col>
            </Row>
        </ContentBlock>
    );
};

export default Settings;