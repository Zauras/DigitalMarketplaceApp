import {Button} from "reactstrap";
import React from "react";
import {SortOrder} from "react-bootstrap-table-next";

export const defaultSorted: [{ dataField: any; order: SortOrder }] =
    [{ dataField: 'name', order: 'asc' }];

const getOrderListColumns = (onViewDetails: ((arg0: any) => void) ) => [{
    dataField: 'id',
    text: 'ID'
}, {
    dataField: 'orderedItem.image',
    text: ''
}, {
    dataField: 'orderedItem.name',
    text: 'Item Name',
    sort: true,
}, {
    dataField: 'orderedItem.price',
    text: 'Price',
    sort: true,
}, {
    dataField: 'status',
    text: 'Status',
    sort: true,
}, {
    dataField: 'status',
    text: 'Ordered On',
    sort: true,
}, {
    formatter: (cell: any, row: any, rowIndex: any, formatExtraData: any) => 
        (<Button color='primary'
                 onClick={() => onViewDetails(row)}
                 style={{ display: "block", margin: "auto"}}
        >
            View Dietails
        </Button>)
    
}];


export default getOrderListColumns;