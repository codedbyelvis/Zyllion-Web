import React, { Component } from 'react';

import './Signin.css';
export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          accountManager: '',
          accountEmail: '',
          lastName: '',
          subject: '',
          message: ''
        };
        this.handleChange = this.handleChange.bind(this);
      }

      componentDidMount() {
        window.scrollTo(0, 0);
    }
    
      handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value },
            () => console.log(this.state));
      }
      
    render() {
        return (
            <div className='Signin'>
                <h1 className='SigninTitle'>Sign-up</h1>
                <h3>Thank you for joining Zyllion with the *This will say the name of the plan they choose* plan</h3>
                <form>
        <label>Account manager</label>
        <input type="text" name="accountManager" onChange={this.handleChange} />
        <label>Account Email</label>
        <input type="text" name="accountEmail" onChange={this.handleChange} />
        <label>Email</label>
        <input type="text" name="email" onChange={this.handleChange} />
        <label>subject</label>
        <input type="text" name="subject" onChange={this.handleChange} />
        <label>message</label>
        <input type="text" name="message" onChange={this.handleChange} />
                </form>
            </div> 
        )
    }
}