import React, { Component } from 'react';
import constant from "../../constant";
import PageHeader from "../../components/pageHeader/PageHeader";
import MarketItem from "./MarketItem";

const itemList = [
    { 
        id: 1,
        name: "Thor's Hammer - Mjölnir",
        description: "Buy and give some hammering",
        price: 18.5,
    },
    {
        id: 2,
        name: "Loki's The Green Mask",
        description: "Be Da Great Green Prophet",
        price: 18.5,
    },
    {
        id: 3,
        name: "Freya's sword",
        description: "Slash with ice and love",
        price: 18.5,
    }
]


class Marketplace extends Component<{}, { isOpen: boolean }> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    

    public render() {
        return (
            <div>
                <PageHeader title={constant.MARKETPLACE.HEADER_TITLE}
                            subtitle={constant.MARKETPLACE.HEADER_SUBTITLE} 
                />
                {
                    // @ts-ignore
                    itemList.map(item => <MarketItem name={item.name} description={item.description} price={item.price} />)
                }
            </div>
        );
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

export default Marketplace;