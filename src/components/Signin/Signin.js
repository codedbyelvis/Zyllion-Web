import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FormContainer from "./Signin-FC";

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

    //    componentDidMount(){
    //     axios.post('')
    //     .then(res=>{
    //         // this.setState({
    //         //     herolist: res.data
    //         // });
    //         console.log('Today is Saturday!');
    //         console.log(res.data);
    //     })
    // }
    
    //    componentDidMount(){
    //     axios.post('')
    //     .then(res=>{
    //         // this.setState({
    //         //     herolist: res.data
    //         // });
    //         console.log('Today is Saturday!');
    //         console.log(res.data);
    //     })
    // }
    
      handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value },
            () => console.log(this.state));
      }
      
    render() {
        return (
            <div className='Signin'>
                <div className="SigninAll"><div className="SigninTitle"><h3>Login</h3></div>
                <div className="SigninFormz"><FormContainer /></div>
                <div className="SigninButton"><button><a href='http://localhost:3001/' blank="go to onboard">Login</a></button></div>
                
                </div>
                {/* <form>
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
                </form> */}
            </div> 
        )
    }
}