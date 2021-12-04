import React, {useContext, useEffect, useState} from 'react';
import {Button, Notification, Table, toaster} from "rsuite";
import {Context} from "../../index";
import {Helmet} from "react-helmet";
import SimpleImageSlider from "react-simple-image-slider";

const PhotoCell = ({ rowData, dataKey, ...props }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        props.getImages(rowData.id).then(images => {
            const imagesForSlider = [...images[props.type]].map(image => {url: getPath(image)});
            console.log(imagesForSlider);
            // props.type === 'passport' ? setImages(images[props.type].map(image => {url: getPath(image)})) : setImages(images[props.type]);
        });
    }, []);

    const getPath = (image) => `http://127.0.0.1:5000/${rowData['id']}/verification/${props.type}/${image}`;

    return <Table.Cell style={{padding: '7px 10px'}} {...props} className="link-group">
        <>
            {props.type === 'passport' ? images.length &&
                (
                    <SimpleImageSlider
                        width={200}
                        height={150}
                        images={images}
                        showBullets={false}
                        showNavs={false}
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

    function handleSuccess() {
        props.store.acceptUserVerification(rowData['id'], 'success', (rs) => {
            toaster.push(
                <Notification type="success" header="Пользователь верифицирован" />, {placement: 'topEnd'}
            )
        }, (e) => {
            toaster.push(
                <Notification type="error" header="Ошибка!" >
                    <p>{e.response.data.message}</p>
                </Notification>, {placement: 'topEnd'}
            )
        });
    }

    function handleReject() {
        props.store.rejectUserVerification(rowData['id'], 'rejected', (rs) => {
            toaster.push(
                <Notification type="success" header="Запрос на верификацию был отклонен" />, {placement: 'topEnd'}
            )
        }, (e) => {
            toaster.push(
                <Notification type="error" header="Ошибка!" >
                    <p>{e.response.data.message}</p>
                </Notification>, {placement: 'topEnd'}
            )
        });
    }

    return <Table.Cell style={{padding: '7px 10px'}} {...props} className="link-group">
        <>
            <Button onClick={handleSuccess} size='sm'>Принять</Button>
            <Button onClick={handleReject} size='sm'>Отклонить</Button>
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

    const getData = (users) => {
        console.log(users);
        users = users.filter(user => !user.isVerified && user.waitingForVerify);

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
                <title>Верификация - Админка | Makao777</title>
            </Helmet>
            <h6 className='cabinet-title'>Запросы на верификацию</h6>
            <Table
                style={{fontSize: 12}}
                height={600}
                data={data}
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
                <Table.Column width={300} fixed sortable>
                    <Table.HeaderCell>Подтверждение личности</Table.HeaderCell>
                    <PhotoCell type="passport" getImages={store.getVerificationImages}/>
                </Table.Column>
                <Table.Column width={300} fixed sortable>
                    <Table.HeaderCell>Селфи с документом</Table.HeaderCell>
                    <PhotoCell type="selphie" getImages={store.getVerificationImages}/>
                </Table.Column>
                <Table.Column width={300} fixed sortable>
                    <Table.HeaderCell>ИНН</Table.HeaderCell>
                    <PhotoCell type="inn" getImages={store.getVerificationImages}/>
                </Table.Column>
                <Table.Column width={300} fixed sortable>
                    <Table.HeaderCell />
                    <ActionCell/>
                </Table.Column>
            </Table>
        </div>
    );
};

export default Verifications;