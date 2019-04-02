import React, { Component } from "react";
import { render } from "react-dom";
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
        <h3>Thank you for joining Zyllion with the *This will say the name of the plan they choose* plan</h3>
        <FormContainer />
      </div>
    );
  }
}

render(<Signup />, document.getElementById("root"));
