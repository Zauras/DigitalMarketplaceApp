import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/layout/Layout';
import FetchData from './components/FetchData';

import './custom.css'
import Marketplace from "./features/marketplace/Marketplace";
import OrderList from "./features/orderList/OrderList";

export default () => (
    <Layout>
        <Route exact path='/' component={Marketplace} />
        <Route path='/orders' component={OrderList} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </Layout>
);
