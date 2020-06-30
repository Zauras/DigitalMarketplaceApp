import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import constant from '../../constant';
import PageHeader from '../../components/pageHeader/PageHeader';
import MarketItemDetailsControl from './MarketItemDetailsControl';
import getMarketplaceColumns, { defaultSorted } from './MarketplaceColumns';
import MarketplaceService from '../../api/services/MarketplaceService';
import LoaderScreen from '../../components/loader/LoaderScreen';

export interface IMarketItem {
    id: number;
    owner: string;
    name: string;
    image: string;
    description: string;
    price: number;
}

const Marketplace = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [itemList, setItemList] = useState<IMarketItem[]>([]);
    const [isItemDetailsOpen, setIsItemDetailsOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<IMarketItem | undefined>(undefined);

    useEffect(() => {
        (async () => fetchItemList())();
    }, []);

    const fetchItemList = async () => {
        setIsLoading(true);
        const response = await MarketplaceService.getMarketplaceData();
        !!response ? setItemList(response) : setItemList([]);
        setIsLoading(false);
    };

    const onViewDetails = (item: IMarketItem) => {
        setSelectedItem(item);
        setIsItemDetailsOpen(true);
    };

    const onDetailsClose = () => {
        setIsItemDetailsOpen(false);
        setSelectedItem(undefined);
    };

    const columns = getMarketplaceColumns(onViewDetails);

    return (
        <div>
            <LoaderScreen dim isLoading={isLoading} />

            <MarketItemDetailsControl
                selectedItem={selectedItem}
                fetchItems={fetchItemList}
                isOpen={isItemDetailsOpen}
                onClose={onDetailsClose}
            />

            <PageHeader
                title={constant.MARKETPLACE.HEADER_TITLE}
                subtitle={constant.MARKETPLACE.HEADER_SUBTITLE}
            />

            <BootstrapTable
                className='MarketplaceTable'
                bootstrap4
                keyField='id'
                data={itemList}
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

export default Marketplace;
