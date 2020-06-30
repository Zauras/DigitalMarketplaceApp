import { Button } from 'reactstrap';
import React from 'react';
import { SortOrder } from 'react-bootstrap-table-next';

export const defaultSorted: [{ dataField: any; order: SortOrder }] = [
    { dataField: 'name', order: 'asc' },
];

const getSellingItemListColumns = (onViewDetails: (arg0: any) => void) => [
    {
        dataField: 'id',
        text: 'Item ID',
    },
    {
        dataField: 'image',
        text: 'Image',
        formatter: (cell: any, row: any, rowIndex: any, formatExtraData: any) => (
            <img src={cell} alt='image' width='120' height='80' />
        ),
    },
    {
        dataField: 'name',
        text: 'Item Name',
    },
    {
        dataField: 'description',
        text: 'Description',
    },
    {
        dataField: 'price',
        text: 'Price',
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

export default getSellingItemListColumns;
