import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "./Account-FC";
import './Account.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class Account extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

  render() {
    return (
      <div className="Account">
        <h3>Account Details</h3>
        <FormContainer />
      </div>
    );
  }
}

render(<Account />, document.getElementById("root"));
