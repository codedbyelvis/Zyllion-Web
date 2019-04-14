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
      <h3 className='ContactInfo'>Questions about blockchain or when we plan to launch? No problem. 
          Drop us a line and we will get back to you.</h3>
          <div className="Formz"><FormContainer /></div>
        {/* <div className="transform"><FormContainer /></div> */}

      <div className="Our">
        <h3 className='Office'>Our Office</h3>
        <p className='Directions'>
          <a href="https://www.google.com/maps/dir/36.2340352,-86.3019008/41+Peabody+St,+Nashville,+TN+37210/@36.2123519,-86.8154885,10z/
          data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x88646643b04dfbdb:0x17986b54dd9208f!2m2!1d-86.7685426!2d36.1577981"
          blank="Adress">41 Peabody Street
          Nashville, TN, 37210
          United States
        </a></p>
      </div>
    </div>
    );
  }
}

// render(<Contact />, document.getElementById("root"));

function mapStateToProps( state ) {
  return state;
}

export default connect( mapStateToProps, {getUser, refresh} )( Contact );