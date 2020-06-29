import { Button } from 'reactstrap';
import React from 'react';
import { SortOrder } from 'react-bootstrap-table-next';

export const defaultSorted: [{ dataField: any; order: SortOrder }] = [
    { dataField: 'name', order: 'asc' },
];

const getOrderListColumns = (onViewDetails: (arg0: any) => void) => [
    {
        dataField: 'id',
        text: 'ID',
    },
    {
        dataField: 'item.image',
        text: '',
    },
    {
        dataField: 'item.name',
        text: 'Item Name',
        sort: true,
    },
    {
        dataField: 'item.price',
        text: 'Price',
        sort: true,
    },
    {
        dataField: 'status.type',
        text: 'Status',
        sort: true,
    },
    {
        dataField: 'orderTime',
        text: 'Ordered On',
        sort: true,
        formatter: (cell: any, row: any, rowIndex: any, formatExtraData: any) => {
            console.log(cell);
            return <div>{cell.toLocaleString()}</div>;
        },
    },
    {
        formatter: (cell: any, row: any, rowIndex: any, formatExtraData: any) => (
            <Button
                color='primary'
                onClick={() => onViewDetails(row)}
                style={{ display: 'block', margin: 'auto' }}
            >
                View Dietails
            </Button>
        ),
    },
];

export default getOrderListColumns;
