import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import moment from "moment";
import {Helmet} from "react-helmet";
import {Table} from "rsuite";

const Transactions = () => {
    const [sortColumn, setSortColumn] = React.useState();
    const [sortType, setSortType] = React.useState();
    const [loading, setLoading] = React.useState(false);

    const {store} = useContext(Context);

    const [data, setData] = useState([]);

    useEffect(() => {
        store.getCryptoTransactions().then(transactions => setData(getData(transactions)));
    }, []);

    const getData = (data) => {

        data.map(item => {
            item.createdAt = moment(item.createdAt).format('DD MMMM yyyy')
            item.fio = item.user ? `${item.user.username}` : '';

            return item;
        });

        if (sortColumn && sortType) {
            return data.sort((a, b) => {
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
        return data;
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
                <title>Транзакции - Админка | {process.env.REACT_APP_NAME}</title>
            </Helmet>
            <h6 className='cabinet-title'>Транзакции</h6>
            <Table
                style={{fontSize: 12}}
                affixHeader
                affixHorizontalScrollbar
                height={600}
                data={data}
                sortColumn={sortColumn}
                sortType={sortType}
                onSortColumn={handleSortColumn}
                loading={loading}
            >
                <Table.Column width={70} align="center" sortable>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.Cell dataKey="id" />
                </Table.Column>
                <Table.Column width={150} sortable>
                    <Table.HeaderCell>Номер транзакции</Table.HeaderCell>
                    <Table.Cell dataKey="transaction_number" />
                </Table.Column>
                <Table.Column width={150} sortable>
                    <Table.HeaderCell>Сумма</Table.HeaderCell>
                    <Table.Cell dataKey="amount" />
                </Table.Column>
                <Table.Column width={350} sortable>
                    <Table.HeaderCell>Пользователь</Table.HeaderCell>
                    <Table.Cell dataKey="fio" />
                </Table.Column>
                <Table.Column width={180} sortable>
                    <Table.HeaderCell>Дата пополнения</Table.HeaderCell>
                    <Table.Cell dataKey="createdAt" />
                </Table.Column>
            </Table>
        </div>
    );
};

export default Transactions;