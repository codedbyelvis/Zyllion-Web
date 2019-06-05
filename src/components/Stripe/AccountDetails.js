import React, { Component } from 'react';
import {StripeProvider} from 'react-stripe-elements';
import MyStoreCheckout from './MyStoreCheckout';
import './AccountDetails.css';

export default class AccountDetails extends Component {

    render() {
        return (
            <StripeProvider apiKey="">
      <MyStoreCheckout />
    </StripeProvider>
    );
    }
}