import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "./Contact-FC";
import { connect } from 'react-redux';
import {getUser, refresh} from '../../ducks/reducer';
import './Contact.css';
class Contact extends Component {
    
  componentDidMount() {
    window.scrollTo(0, 0);
    // this.props.getUser();
    // this.props.refresh();
    // console.log("acc1", this.props.getUser());
    // console.log("act2", this.props.refresh.refreshToken);
    // console.log("redux", this.props);
    // console.log("rebound", this.props.refresh());
    // console.log("maybe we got him", this.props.getUser());
    console.log('get your tokens here',this.props.token)
    this.props.getUser();
}

    render() {
    return (
      <div className="Contact">
            {this.props.getUser}
      {this.props.refresh}
      <h1 className='ContactTitle'>Contact</h1>
      <h3 className='Contactinfo'>Questions about blockchain or when we plan to launch? No problem. 
          Drop us a line and we will get back to you.</h3>
        <FormContainer />

        <h3 className='Office'>Our Office</h3>
        <p className='Directions'>
          41 Peabody Street
          Nashville, TN, 37210
          United States
        </p>
      </div>
    );
  }
}

// render(<Contact />, document.getElementById("root"));

function mapStateToProps( state ) {
  return state;
}

export default connect( mapStateToProps, {getUser, refresh} )( Contact );