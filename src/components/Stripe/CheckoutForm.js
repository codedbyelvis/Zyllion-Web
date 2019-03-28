import React, { Component } from 'react';
import axios from 'axios';
import {injectStripe} from 'react-stripe-elements';

// import AddressSection from './AddressSection';
import CardSection from './CardSection';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: '',
      token: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({name: 'Jenny Rosen'}).then(({token}) => {
      console.log('Received Stripe token:', token);

      // axios.post('/api/customer/create').then(res => {
      //   console.log('Hermes');
      //   this.setState({
      //     token: token.id
      //   });
      //   console.log('response', res);
      // });

      axios.post('/api/customer/create', {
        token: token.id,
        })
        .then((response) => {
          console.log('Finally??')
          return response;
        })
        .catch((error) => {
          console.log(error);
      });

    //   fetch('/api/customer/create', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       token: token.id
    //     })
    //   }).then((res) => res.json()).then((response) => {
    //     console.log('response', response);
    //   });
    // });

    // However, this line of code will do the same thing:
    //
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});

    // You can also use createSource to create Sources. See our Sources
    // documentation for more: https://stripe.com/docs/stripe-js/reference#stripe-create-source
    //
    // this.props.stripe.createSource({type: 'card', owner: {
    //   name: 'Jenny Rosen'
    // }});
  });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <AddressSection /> */}
        <CardSection />
        <button>Confirm order</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);