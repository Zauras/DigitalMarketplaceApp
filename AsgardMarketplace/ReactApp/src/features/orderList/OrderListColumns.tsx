import { Button } from 'reactstrap';
import React from 'react';
import { SortOrder } from 'react-bootstrap-table-next';

export const defaultSorted: [{ dataField: any; order: SortOrder }] = [
    { dataField: 'item.id', order: 'asc' },
];

const getOrderListColumns = (
    onDefaultAction: { (arg0: any): void; },
    onOtherAction?: { (arg0: any): void },
    isSellerTable = true
) => {
    const getActionButton = (cell: any, row: any) => {
        if (!!onOtherAction && isSellerTable && row.status.type === 'Paid') {
            return (
                <Button
                    color='danger'
                    onClick={() => onOtherAction(row)}
                    style={{ display: 'block', margin: 'auto' }}
                >
                    Ship Item to Buyer
                </Button>
            );
        } else if (!!onOtherAction && !isSellerTable && row.status.type === 'Shipped') {
            return (
                <Button
                    color='success'
                    onClick={() => onOtherAction(row)}
                    style={{ display: 'block', margin: 'auto' }}
                >
                    Receive the Item
                </Button>
            );
        } else {
            return (
                <Button
                    color='primary'
                    onClick={() => onDefaultAction(row)}
                    style={{ display: 'block', margin: 'auto' }}
                >
                    View Dietails
                </Button>
            );
        }
    };

    return [
        {
            dataField: 'item.id',
            text: 'Item ID',
        },
        {
            dataField: 'item.image',
            text: '',
        },
        {
            dataField: 'item.name',
            text: 'Item Name',
        },
        {
            dataField: 'item.price',
            text: 'Price',
        },
        {
            dataField: 'status.type',
            text: 'Status',
        },
        {
            dataField: 'orderTime',
            text: 'Ordered On',
            formatter: (cell: any, row: any, rowIndex: any, formatExtraData: any) => (
                <div>{cell.toLocaleString()}</div>
            ),
        },
        {
            formatter: (cell: any, row: any, rowIndex: any, formatExtraData: any) =>
                getActionButton(cell, row),
        },
    ];
};

export default getOrderListColumns;
