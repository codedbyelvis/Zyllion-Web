import React, { Component } from 'react';

import './Contact.css';
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        };
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value },
            () => console.log(this.state));
      }
      
    render() {
        return (
            <div className='Contact'>
                <h1 className='ContactTitle'>Contact</h1>
                <form>
        <label>firstName</label>
        <input type="text" name="firstName" onChange={this.handleChange} />
        <label>lastName</label>
        <input type="text" name="lastName" onChange={this.handleChange} />
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