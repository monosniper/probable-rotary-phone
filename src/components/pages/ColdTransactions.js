import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import moment from "moment";
import {Helmet} from "react-helmet";
import {Button, Notification, Table, toaster} from "rsuite";

const ActionCell = ({ rowData, dataKey, ...props }) => {
    let status = rowData['status'];

    function handleSuccess() {
        props.store.acceptCryptoTransaction(rowData[dataKey], (rs) => {
            toaster.push(
                <Notification type="success" header="Транзакция завершена успешно" />, {placement: 'topEnd'}
            )

            status = 'success'
        }, (e) => {
            toaster.push(
                <Notification type="error" header="Ошибка!" >
                    <p>{e.response.data.message}</p>
                </Notification>, {placement: 'topEnd'}
            )
        });
    }

    function handleReject() {
        props.store.rejectCryptoTransaction(rowData[dataKey], (rs) => {
            toaster.push(
                <Notification type="success" header="Запрос был отклонен" />, {placement: 'topEnd'}
            )

            status = 'reject'
        }, (e) => {
            toaster.push(
                <Notification type="error" header="Ошибка!" >
                    <p>{e.response.data.message}</p>
                </Notification>, {placement: 'topEnd'}
            )
        });
    }

    const lang = {
        accept: 'Успешно',
        reject: 'Отклонено',
        pending: 'Ожидание',
    };

    return (
        <Table.Cell style={{padding: '7px 10px'}} {...props} className="link-group">
            {status === 'pending' ?
                <>
                    <Button onClick={handleSuccess} size='sm'>Готово</Button>
                    <Button onClick={handleReject} size='sm'>Отклонить</Button>
                </>
                :
                <p>{lang[status]}</p>
            }
        </Table.Cell>
    );
};

const ColdTransactions = () => {
    const [sortColumn, setSortColumn] = React.useState();
    const [sortType, setSortType] = React.useState();
    const [loading, setLoading] = React.useState(false);

    const {store} = useContext(Context);

    const [data, setData] = useState([]);

    useEffect(() => {
        store.getColdTransactions().then(transactions => setData(getData(transactions)));
    }, []);

    const getData = (data) => {

        data.map(item => {
            item.createdAt = moment(item.createdAt).format('DD MMMM yyyy')
            item.fio = item.user ? `${item.user.fio}` : '';

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
                <title>Пополнения хол. кошельком - Админка | {process.env.REACT_APP_NAME}</title>
            </Helmet>
            <h6 className='cabinet-title'>Пополнения хол. кошельком</h6>
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
                    <Table.HeaderCell>Номер кошелька</Table.HeaderCell>
                    <Table.Cell dataKey="wallet" />
                </Table.Column>
                <Table.Column width={150} sortable>
                    <Table.HeaderCell>Сид-фраза</Table.HeaderCell>
                    <Table.Cell dataKey="seed" />
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
                <Table.Column width={300}>
                    <Table.HeaderCell></Table.HeaderCell>
                    <ActionCell dataKey="id" store={store} />
                </Table.Column>
            </Table>
        </div>
    );
};

export default ColdTransactions;