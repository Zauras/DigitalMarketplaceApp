import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import PageHeader from '../../components/pageHeader/PageHeader';
import OrderDetailsControl from './OrderDetailsControl';
import getOrderListColumns, { defaultSorted } from './OrderListColumns';
import { IMarketItem } from '../marketplace/Marketplace';
import OrderService from '../../api/services/OrderService';
import LoaderScreen from '../../components/loader/LoaderScreen';

enum OrderStatus {
    Unpaid = 'Unpaid',
    PendingDelivery = 'PendingDelivery',
    Delivered = 'Delivered',
    Canceled = 'Canceled',
}

export interface IOrder {
    id: number;
    orderedItem: IMarketItem;
    status: OrderStatus;
    orderTime: Date;
}

const userId = 1;

const BuyingOrderList = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isOrderDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);
    const [selectedOrder, setSelectedOrder] = useState<any>(undefined);
    const [orderList, setOrderList] = useState<any>([]);

    useEffect(() => {
        (async () => await fetchOrderList())();
    }, []);

    const fetchOrderList = async () => {
        setIsLoading(true);
        const response = await OrderService.getBuyingOrders(userId);
        !!response ? setOrderList(response) : setOrderList([]);
        setIsLoading(false);
    };

    const onViewDetails = (order: IOrder) => {
        setSelectedOrder(order);
        setIsDetailsOpen(true);
    };

    const onReceiveItem = async (order: IOrder) => {
        setIsLoading(true);
        await OrderService.patchOrderReceive(order.id);
        await fetchOrderList();
    };

    const onSendPayment = async (order: IOrder) => {
        setIsLoading(true);
        await OrderService.patchOrderSendPayment(order.id);
        await fetchOrderList();
    };

    const onDetailsClose = () => {
        setIsDetailsOpen(false);
        setSelectedOrder(undefined);
    };

    const columns = getOrderListColumns(onViewDetails, false, onReceiveItem, onSendPayment);

    return (
        <div>
            <OrderDetailsControl
                selectedOrder={selectedOrder}
                isOpen={isOrderDetailsOpen}
                onClose={onDetailsClose}
            />

            <LoaderScreen dim isLoading={isLoading} />

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
