import { Button } from 'reactstrap';
import React from 'react';
import { SortOrder } from 'react-bootstrap-table-next';

export const defaultSorted: [{ dataField: any; order: SortOrder }] = [
    { dataField: 'name', order: 'asc' },
];

const getMarketplaceColumns = (onViewDetails: (arg0: any) => void) => [
    {
        dataField: 'id',
        text: 'ID',
    },
    {
        dataField: 'image',
        text: '',
    },
    {
        dataField: 'name',
        text: 'Item Name',
        sort: true,
    },
    {
        dataField: 'description',
        text: 'Description',
        sort: true,
    },
    {
        dataField: 'seller',
        text: 'Seller',
        sort: true,
    },
    {
        dataField: 'price',
        text: 'Price',
        sort: true,
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

export default getMarketplaceColumns;
