import React, { Component } from 'react';
import axios from 'axios';
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
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount() {
        window.scrollTo(0, 0);
    }
    
      handleChange (e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      async handleSubmit(e) {
          e.preventDefault()

          const { firstName, lastName, email, subject, message } =this.state;


          const form = await axios.post('/api/form', {
              firstName,
              lastName,
              email,
              subject,
              message
          })

      }
      
    render() {
        return (
            <div className='Contact'>
                <h1 className='ContactTitle'>Contact</h1>
                <h3>Questions about blockchain or when we plan to launch? No problem. 
                    Drop us a line and we will get back to you.</h3>
            <form onSubmit={this.handleSubmit}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={this.handleChange} />

                <label>Last Name</label>
                <input type="text" name="lastName" onChange={this.handleChange} />

                <label>Email</label>
                <input type="email" name="email" onChange={this.handleChange} />

                <label>Subject</label>
                <input type="text" name="subject" onChange={this.handleChange} />

                <label>Message</label>
                <input type="text" name="message" onChange={this.handleChange} />

            <button>Submit</button>

            </form>
            </div> 
        )
    }
}