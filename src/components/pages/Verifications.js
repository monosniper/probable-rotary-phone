import React, {useContext, useEffect, useState} from 'react';
import {Button, Notification, Table, toaster} from "rsuite";
import {Context} from "../../index";
import {Helmet} from "react-helmet";
import SimpleImageSlider from "react-simple-image-slider";
import {observer} from "mobx-react-lite";

const PhotoCell = ({ rowData, dataKey, ...props }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        props.getImages(rowData.id).then(images => {
            props.type === 'passport' ? setImages(images[props.type].map(image => {return {url: getPath(image)}})) : setImages(images[props.type]);
        });
    }, []);

    const getPath = (image) => `${process.env.REACT_APP_API_URL}/${rowData['id']}/verification/${props.type}/${image}`;

    return <Table.Cell style={{padding: '7px 10px'}} {...props} className="link-group">
        <>
            {props.type === 'passport' ? images.length &&
                (
                    <SimpleImageSlider
                        width={200}
                        height={150}
                        images={images}
                        showBullets={false}
                        showNavs={true}
                        navSize={20}
                        navMargin={10}
                    />
                )
                :
                (
                    images.map((image, index) => (
                        <img style={{width: 150}} key={`${rowData['id']}-${props.type}-${image}-${index}`} src={getPath(image)}/>
                    ))
                )}
        </>
    </Table.Cell>;
}

const ActionCell = ({ rowData, dataKey, ...props }) => {
    return <Table.Cell style={{padding: '7px 10px'}} {...props} className="link-group">
        <>
            <Button onClick={() => props.handleAccept(rowData['id'])} size='sm'>Принять</Button>
            <Button onClick={() => props.handleReject(rowData['id'])} size='sm'>Отклонить</Button>
        </>
    </Table.Cell>;
};

const Verifications = () => {

    const {store} = useContext(Context);

    const [data, setData] = useState([]);

    const [sortColumn, setSortColumn] = React.useState();
    const [sortType, setSortType] = React.useState();
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        store.getAllUsers().then(users => setData(getData(users)));
    }, []);

    function handleAccept(id) {
        store.acceptUserVerification(id, 'success', (rs) => {
            toaster.push(
                <Notification type="success" header="Пользователь верифицирован" />, {placement: 'topEnd'}
            )
            store.getAllUsers().then(users => setData(getData(users)));
        }, (e) => {
            toaster.push(
                <Notification type="error" header="Ошибка!" >
                    <p>{e.response.data.message}</p>
                </Notification>, {placement: 'topEnd'}
            )
        });
    }

    function handleReject(id) {
        store.rejectUserVerification(id, 'rejected', (rs) => {
            toaster.push(
                <Notification type="success" header="Запрос на верификацию был отклонен" />, {placement: 'topEnd'}
            )
            store.getAllUsers().then(users => setData(getData(users)));
        }, (e) => {
            toaster.push(
                <Notification type="error" header="Ошибка!" >
                    <p>{e.response.data.message}</p>
                </Notification>, {placement: 'topEnd'}
            )
        });
    }

    const getData = (users) => {
        users = users.filter(user => user.waitingForVerify);

        users.map(user => {
            store.getVerificationImages(user.id).then(images => user.images = images);
        });

        if (sortColumn && sortType) {
            return users.sort((a, b) => {
                let x = a[sortColumn];
                let y = b[sortColumn];
                if (typeof x === 'string') {
                    x = x.charCodeAt();
                }
                if (typeof y === 'string') {
                    y = y.charCodeAt();
                }
                if (sortType === 'asc') {
                    return x - y;
                } else {
                    return y - x;
                }
            });
        }
        return users;
    };

    const handleSortColumn = (sortColumn, sortType) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSortColumn(sortColumn);
            setSortType(sortType);
        }, 500);
    };

    return (
        <div>
            <Helmet>
                <title>Верификация - Админка | {process.env.REACT_APP_NAME}</title>
            </Helmet>
            <h6 className='cabinet-title'>Запросы на верификацию</h6>
            <Table
                style={{fontSize: 12}}
                data={data}
                autoHeight
                affixHeader
                affixHorizontalScrollbar
                sortColumn={sortColumn}
                sortType={sortType}
                onSortColumn={handleSortColumn}
                loading={loading}
                rowHeight={150}
                onRowClick={data => {
                    console.log(data);
                }}
            >
                <Table.Column width={300}>
                    <Table.HeaderCell>Подтверждение личности</Table.HeaderCell>
                    <PhotoCell type="passport" getImages={store.getVerificationImages}/>
                </Table.Column>
                <Table.Column width={300}>
                    <Table.HeaderCell>Селфи с документом</Table.HeaderCell>
                    <PhotoCell type="selphie" getImages={store.getVerificationImages}/>
                </Table.Column>
                <Table.Column width={300}>
                    <Table.HeaderCell>ИНН</Table.HeaderCell>
                    <PhotoCell type="inn" getImages={store.getVerificationImages}/>
                </Table.Column>
                <Table.Column width={300}>
                    <Table.HeaderCell />
                    <ActionCell handleAccept={handleAccept} handleReject={handleReject} store={store}/>
                </Table.Column>
            </Table>
        </div>
    );
};

export default observer(Verifications);