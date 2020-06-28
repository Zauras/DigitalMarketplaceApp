import React, {useEffect, useState} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import constant from "../../constant";
import PageHeader from "../../components/pageHeader/PageHeader";
import MarketItemDetailsControl from "./MarketItemDetailsControl";
import getMarketplaceColumns, {defaultSorted} from "./MarketplaceColumns";
import MarketplaceService from "../../api/services/MarketplaceService";

const fakeItemList = [
    { 
        id: 1,
        image: '',
        name: "Thor's Hammer - Mjölnir",
        description: "Buy and give some hammering",
        price: 18.5,
    },
    {
        id: 2,
        image: '',
        name: "Loki's The Green Mask",
        description: "Be Da Great Green Prophet",
        price: 18.5,
    },
    {
        id: 3,
        image: '',
        name: "Freya's sword",
        description: "Slash with ice and love",
        price: 18.5,
    }
]

export interface IMarketItem {
    seller: string;
    name: string,
    image: string,
    description: string,
    price: number,
}


const Marketplace = () => {
    const [itemList, setItemList] = useState<IMarketItem[]>([]);
    const [isItemDetailsOpen, setIsItemDetailsOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<IMarketItem | undefined>(undefined);

    useEffect( () => {
        (async () => fetchItemList())();
    }, []);
    
    const fetchItemList = async () => {
        const response = await MarketplaceService.getMarketplaceData();
        !!response ? setItemList(response?.data) : setItemList([])
    }

    const onViewDetails = (item: IMarketItem) => {
        setSelectedItem(item);
        setIsItemDetailsOpen(true);
    }
        
    const onDetailsClose = () => {
        setIsItemDetailsOpen(false);
        setSelectedItem(undefined);
    }
    
    const columns = getMarketplaceColumns(onViewDetails);
   
    return (
        <div>
            <MarketItemDetailsControl selectedItem={selectedItem}
                                      isOpen={isItemDetailsOpen} 
                                      onClose={onDetailsClose}/>
            
            <PageHeader title={constant.MARKETPLACE.HEADER_TITLE}
                        subtitle={constant.MARKETPLACE.HEADER_SUBTITLE} 
            />
            
            <BootstrapTable
                className="MarketplaceTable"
                bootstrap4
                keyField="id"
                data={itemList}
                // @ts-ignore
                columns={columns}
                defaultSorted={defaultSorted}
                bordered={ false }
                hover
                striped
            />
        </div>
    );
}
    

export default Marketplace;