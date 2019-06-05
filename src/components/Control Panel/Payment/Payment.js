import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "./Payment-FC";
import './Payment.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class Payment extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

  render() {
    return (
      <div className="Payment">
        <h3>Payment Details</h3>
        <FormContainer />
      </div>
    );
  }
}

render(<Payment />, document.getElementById("root"));
