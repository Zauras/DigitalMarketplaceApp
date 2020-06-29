import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import PageHeader from '../../components/pageHeader/PageHeader';
import OrderDetailsControl from './OrderDetailsControl';
import getOrderListColumns, { defaultSorted } from './OrderListColumns';
import { IMarketItem } from '../marketplace/Marketplace';
import OrderService from '../../api/services/OrderService';

enum OrderStatus {
    Unpaid = 'Unpaid',
    PendingDelivery = 'PendingDelivery',
    Delivered = 'Delivered',
    Canceled = 'Canceled',
}

const orderListTest = [
    {
        id: 1,
        orderedItem: {
            id: 20,
            image: '',
            name: 'Item name',
            description: 'Item description',
            price: 18.5,
        },
        seller: {
            id: 1,
            name: 'user-1',
        },
        status: OrderStatus.Unpaid,
        orderTime: new Date(),
    },
    {
        id: 2,
        orderedItem: {
            id: 20,
            image: '',
            name: 'Item name',
            description: 'Item description',
            price: 18.5,
        },
        seller: {
            id: 1,
            name: 'user-1',
        },
        status: OrderStatus.PendingDelivery,
        orderTime: new Date(),
    },
    {
        id: 3,
        orderedItem: {
            id: 20,
            image: '',
            name: 'Item name',
            description: 'Item description',
            price: 18.5,
        },
        seller: {
            id: 1,
            name: 'user-1',
        },
        status: OrderStatus.PendingDelivery,
        orderTime: new Date(),
    },
    {
        id: 4,
        orderedItem: {
            id: 20,
            image: '',
            name: 'Item name',
            description: 'Item description',
            price: 18.5,
        },
        seller: {
            id: 1,
            name: 'user-1',
        },
        status: OrderStatus.Delivered,
        orderTime: new Date(),
    },
];

const orderListX = [
    {
        id: 1,
        item: {
            id: 20,
            image: '',
            name: 'Item name',
            description: 'Item description',
            price: 18.5,
        },
        seller: {
            id: 1,
            name: 'user-1',
        },
        status: OrderStatus.Unpaid,
        orderTime: new Date(),
    },
    {
        id: 1,
        item: {
            id: 20,
            image: '',
            name: 'Item name',
            description: 'Item description',
            price: 18.5,
        },
        seller: {
            id: 1,
            name: 'user-1',
        },
        status: OrderStatus.Unpaid,
        orderTime: new Date(),
    },
];

export interface IOrder {
    id: number;
    orderedItem: IMarketItem;
    status: OrderStatus;
    orderTime: Date;
}

const userId = 1;

const BuyingOrderList = () => {
    const [isOrderDetailsOpen, setIsItemDetailsOpen] = useState<boolean>(false);
    const [selectedOrder, setSelectedItem] = useState<any>(undefined);
    const [orderList, setOrderList] = useState<any>([]);

    useEffect(() => {
        (async () => await fetchOrderList())();
    }, []);

    const fetchOrderList = async () => {
        // TODO: selling and buying orders separate
        const response = await OrderService.getBuyingOrders(userId);
        console.log(response);
        !!response ? setOrderList(response) : setOrderList([]);
    };

    const onViewDetails = (order: IOrder) => {
        setSelectedItem(order);
        setIsItemDetailsOpen(true);
    };

    const onDetailsClose = () => {
        setIsItemDetailsOpen(false);
        setSelectedItem(undefined);
    };

    const columns = getOrderListColumns(onViewDetails);

    return (
        <div>
            {/*<OrderDetailsControl selectedOrder={selectedOrder}*/}
            {/*                     isOpen={isOrderDetailsOpen}*/}
            {/*                     onClose={onDetailsClose}/>*/}

            <PageHeader title={'Items you ordered'} subtitle={'Review your orders'} />

            <BootstrapTable
                bootstrap4
                keyField='id'
                data={orderList}
                // @ts-ignore
                columns={columns}
                defaultSorted={defaultSorted}
                bordered={false}
                hover
                striped
            />
        </div>
    );
};

BuyingOrderList.displayName = 'BuyingOrderList';
export default BuyingOrderList;
