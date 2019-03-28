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
        <h3> Sample Form Container </h3>
        <FormContainer />
      </div>
    );
  }
}

render(<Signup />, document.getElementById("root"));
