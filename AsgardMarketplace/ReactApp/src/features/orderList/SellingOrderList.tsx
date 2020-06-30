import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import PageHeader from '../../components/pageHeader/PageHeader';
import OrderDetailsControl from './OrderDetailsControl';
import getOrderListColumns, { defaultSorted } from './OrderListColumns';
import OrderService from '../../api/services/OrderService';
import { IOrder } from './BuyingOrderList';
import getSellingItemListColumns from './SellingItemsColumns';
import MarketplaceService from '../../api/services/MarketplaceService';
import LoaderScreen from '../../components/loader/LoaderScreen';

const userId = 1;

const SellingOrderList = () => {
    const [didMount, setDidMount] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [isOrderDetailsOpen, setIsItemDetailsOpen] = useState<boolean>(false);
    const [selectedOrder, setSelectedOrder] = useState<any>(undefined);
    const [selectedItem, setSelectedItem] = useState<any>(undefined);

    const [orderList, setOrderList] = useState<any>([]);
    const [itemList, setItemList] = useState<any>([]);

    useEffect(() => {
        if (!didMount) {
            setDidMount(true);
            (async () => await fetchData())();
        }

        return setDidMount(false);
    }, []);

    const fetchData = async () => {
        setIsLoading(true);
        await fetchSellingItemList();
        await fetchOrderList();
        setIsLoading(false);
    };

    const fetchSellingItemList = async () => {
        const response = await MarketplaceService.getUserItems(userId);
        Boolean(response) ? setItemList(response) : setItemList([]);
    };

    const fetchOrderList = async () => {
        const response = await OrderService.getSellingOrders(userId);
        Boolean(response) ? setOrderList(response) : setOrderList([]);
    };

    const onViewOrderDetails = (order: IOrder) => {
        setSelectedOrder(order);
        setIsItemDetailsOpen(true);
    };

    const onViewItemDetails = (item: any) => {
        setSelectedItem(item);
        setIsItemDetailsOpen(true);
    };

    const onShipItem = async (order: IOrder) => {
        setIsLoading(true);
        await OrderService.patchOrderShip(order.id);
        await fetchOrderList();
        setIsLoading(false);
    };

    const onDetailsClose = () => {
        setIsItemDetailsOpen(false);
        setSelectedOrder(undefined);
        setSelectedItem(undefined);
    };

    const itemListColumns = getSellingItemListColumns(onViewItemDetails);
    const orderListColumns = getOrderListColumns(onViewOrderDetails, true, onShipItem);

    return (
        <div>
            <OrderDetailsControl
                selectedOrder={selectedOrder}
                selectedItem={selectedItem}
                isOpen={isOrderDetailsOpen}
                onClose={onDetailsClose}
            />

            <LoaderScreen dim isLoading={isLoading} />

            <PageHeader title={'Items you sell'} subtitle={'Items in Marketplace'} />

            <BootstrapTable
                bootstrap4
                keyField='id'
                data={itemList}
                // @ts-ignore
                columns={itemListColumns}
                defaultSorted={defaultSorted}
                bordered={false}
                hover
                striped
            />

            <PageHeader subtitle={'Ordered Items'} />

            <BootstrapTable
                bootstrap4
                keyField='id'
                data={orderList}
                // @ts-ignore
                columns={orderListColumns}
                defaultSorted={defaultSorted}
                bordered={false}
                hover
                striped
            />
        </div>
    );
};

SellingOrderList.displayName = 'SellingOrderList';
export default SellingOrderList;
