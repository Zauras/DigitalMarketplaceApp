import React, {useEffect, useState} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import PageHeader from "../../components/pageHeader/PageHeader";
import OrderDetailsControl from "./OrderDetailsControl";
import getOrderListColumns, { defaultSorted } from "./OrderListColumns";
import OrderService from "../../api/services/OrderService";
import {IOrder} from "./BuyingOrderList";



const userId = 1;

const SellingOrderList = () => {
    const [isOrderDetailsOpen, setIsItemDetailsOpen] = useState<boolean>(false);
    const [selectedOrder, setSelectedItem] = useState<any>(undefined);
    const [orderList, setOrderList] = useState<any>([]);

    useEffect( () => {
        (async () => await fetchOrderList())();
    }, []);

    const fetchOrderList = async () => {
        // TODO: selling and buying orders separate
        const response = await OrderService.getSellingOrders(userId);
        console.log(response);
        Boolean(response) ? setOrderList(response) : setOrderList([]);
    }

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

            <PageHeader title={"Items you sell"}
                        subtitle={"Review your items"}
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

SellingOrderList.displayName = "SellingOrderList";
export default SellingOrderList;