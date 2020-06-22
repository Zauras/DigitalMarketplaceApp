import React, {useState} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import PageHeader from "../../components/pageHeader/PageHeader";
import OrderDetailsControl from "./OrderDetailsControl";
import getOrderListColumns, { defaultSorted } from "./OrderListColumns";
import { IMarketItem } from "../marketplace/Marketplace";

enum OrderStatus {
    Unpaid = "Unpaid",
    PendingDelivery="PendingDelivery",
    Delivered="Delivered",
    Canceled="Canceled"
}

const orderList = [
    {
        id: 1,
        orderedItem: {
            id: 20,
            image: '',
            name: "Item name",
            description: "Item description",
            price: 18.5,
        },
        status: OrderStatus.Unpaid,
        orderTime: new Date()
    },
    {
        id: 2,
        orderedItem: {
            id: 20,
            image: '',
            name: "Item name",
            description: "Item description",
            price: 18.5,
        },
        status: OrderStatus.PendingDelivery,
        orderTime: new Date()
    },
    {
        id: 3,
        orderedItem: {
            id: 20,
            image: '',
            name: "Item name",
            description: "Item description",
            price: 18.5,
        },
        status: OrderStatus.PendingDelivery,
        orderTime: new Date()
    },
    {
        id: 4,
        orderedItem: {
            id: 20,
            image: '',
            name: "Item name",
            description: "Item description",
            price: 18.5,
        },
        status: OrderStatus.Delivered,
        orderTime: new Date()
    },
]


export interface IOrder {
    id: number,
    orderedItem: IMarketItem,
    status: OrderStatus,
    orderTime: Date
}

const OrderList = () => {
    const [isOrderDetailsOpen, setIsItemDetailsOpen] = useState<boolean>(false);
    const [selectedOrder, setSelectedItem] = useState<IOrder | undefined>(undefined);

    const onViewDetails = (order: IOrder) => {
        setSelectedItem(order);
        setIsItemDetailsOpen(true);
    }

    const onDetailsClose = () => {
        setIsItemDetailsOpen(false);
        setSelectedItem(undefined);
    }

    const columns = getOrderListColumns(onViewDetails);

    return (
        <div>
            <OrderDetailsControl selectedOrder={selectedOrder}
                                 isOpen={isOrderDetailsOpen}
                                 onClose={onDetailsClose}/>

            <PageHeader title={"Your orders list"}
                        subtitle={"Review or change status"}
            />

            <BootstrapTable
                bootstrap4
                keyField="id"
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
}

OrderList.displayName = "OrderList";
export default OrderList;