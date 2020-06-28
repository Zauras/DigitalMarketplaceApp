import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/layout/Layout';
import FetchData from './components/FetchData';

import './custom.css'
import Marketplace from "./features/marketplace/Marketplace";
import BuyingOrderList from "./features/orderList/BuyingOrderList";
import SellingOrderList from "./features/orderList/SellingOrderList";

export default () => (
    <Layout>
        <Route exact path='/' component={Marketplace} />
        <Route path='/buying-orders' component={BuyingOrderList} />
        <Route path='/selling-orders' component={SellingOrderList} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </Layout>
);
