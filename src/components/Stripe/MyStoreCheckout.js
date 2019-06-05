import React, { Component } from 'react';
import {Elements} from 'react-stripe-elements';

import InjectedCheckoutForm from './CheckoutForm';

class MyStoreCheckout extends Component {
  render() {
    return (
        <div className='Stripe'> 
      <Elements>
        <InjectedCheckoutForm />
      </Elements>
        </div>
    );
  }
}

export default MyStoreCheckout;