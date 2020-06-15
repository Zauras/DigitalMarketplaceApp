import React from 'react';

interface IMarketItemProps {
    name: number,
    description: string,
    price: number,
}

const MarketItem = ({ name, description, price } : IMarketItemProps) => (
    <div>
        <p>{name}</p>
        <p>{description}</p>
        <p>{price}</p>
    </div>
);

export default MarketItem;