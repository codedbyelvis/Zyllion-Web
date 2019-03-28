import React, { Component } from 'react';
import {StripeProvider} from 'react-stripe-elements';
import MyStoreCheckout from './MyStoreCheckout';
import './AccountDetails.css';

export default class AccountDetails extends Component {

    render() {
        return (
            <StripeProvider apiKey="pk_test_x5ZKyZs0RsUEP9y8mf51jgVx">
      <MyStoreCheckout />
    </StripeProvider>
    );
    }
}