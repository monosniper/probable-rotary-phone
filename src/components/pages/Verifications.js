import React, {useContext, useEffect, useState} from 'react';
import {Button, Notification, Table, toaster} from "rsuite";
import {Context} from "../../index";
import {Helmet} from "react-helmet";

const PhotoCell = ({ rowData, dataKey, ...props }) => {
    return <Table.Cell style={{padding: '7px 10px'}} {...props} className="link-group">
        <>
            <img src={`http://127.0.0.1:5000/uploads/${rowData['id']}/verification/selphie/bg2.jpg`}/>
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
        users = users.filter(user => !user.isVerified);

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
                <title>Пользователи - Админка | Makao777</title>
            </Helmet>
            <h6 className='cabinet-title'>Все пользователи</h6>
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
                onRowClick={data => {
                    console.log(data);
                }}
            >
                <Table.Column width={300} fixed sortable>
                    <Table.HeaderCell>Подтверждение личности</Table.HeaderCell>
                    <PhotoCell/>
                </Table.Column>
                <Table.Column width={250} fixed sortable>
                    <Table.HeaderCell>Селфи с документом</Table.HeaderCell>
                    <PhotoCell/>
                </Table.Column>
                <Table.Column width={150} fixed sortable>
                    <Table.HeaderCell>ИНН</Table.HeaderCell>
                    <PhotoCell/>
                </Table.Column>
                <Table.Column width={150} fixed sortable>
                    <Table.HeaderCell />
                    <ActionCell/>
                </Table.Column>
            </Table>
        </div>
    );
};

export default Verifications;