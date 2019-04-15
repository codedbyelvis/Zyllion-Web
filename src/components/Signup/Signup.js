import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import FormContainer from "./Signup-FC";
import './Signup.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class Signup extends Component {
  render() {
    return (
      <div className="Signup">
        <div className="signupAll"><h3 className="SignupTitle">Thank you for joining Zyllion</h3>
        <p className="SignupThank">Thank you for joining Zyllion</p>
        <div className="UpFormz"><FormContainer /></div>
        <Link to="/signin"><button className='SignupButton'>Submit</button></Link>
      </div>  
      </div>
    );
  }
}

// render(<Signup />, document.getElementById("root"));
