import React, {useContext, useEffect, useState} from 'react';
import {Table} from "rsuite";
import {Context} from "../../index";
import {Helmet} from "react-helmet";
import moment from "moment";

const Users = () => {

    const {store} = useContext(Context);

    const [data, setData] = useState([]);

    const [sortColumn, setSortColumn] = React.useState();
    const [sortType, setSortType] = React.useState();
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        store.getAllUsers().then(users => setData(getData(users)));
    }, []);

    const getData = (users) => {
        users.map(user => {
            user.fio = `${user.last_name} ${user.first_name} ${user.middle_name}`;
            user.createdAt = moment(user.createdAt).format('DD MMMM yyyy');
            return user;
        })

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
                <title>Пользователи - Админка | {process.env.REACT_APP_NAME}</title>
            </Helmet>
           <h6 className='cabinet-title'>Все пользователи</h6>
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
                onRowClick={data => {
                    console.log(data);
                }}
            >
                <Table.Column width={70} align="center" sortable>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.Cell dataKey="id" />
                </Table.Column>
                <Table.Column width={300} sortable>
                    <Table.HeaderCell>ФИО</Table.HeaderCell>
                    <Table.Cell dataKey="fio" />
                </Table.Column>
                <Table.Column width={250} sortable>
                    <Table.HeaderCell>E-mail</Table.HeaderCell>
                    <Table.Cell dataKey="email" />
                </Table.Column>
                <Table.Column width={150} sortable>
                    <Table.HeaderCell>Телефон</Table.HeaderCell>
                    <Table.Cell dataKey="phone" />
                </Table.Column>
                <Table.Column width={100} sortable>
                    <Table.HeaderCell>Баланс</Table.HeaderCell>
                    <Table.Cell dataKey="balance" />
                </Table.Column>
                <Table.Column width={150} sortable>
                    <Table.HeaderCell>Дата регистрации</Table.HeaderCell>
                    <Table.Cell dataKey="createdAt" />
                </Table.Column>
            </Table>
        </div>
    );
};

export default Users;