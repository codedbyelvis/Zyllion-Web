import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "../../Forms/FormContainer";
import './Test.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class Test extends Component {
  render() {
    return (
      <div className="col-md-6">
        <h3> Sample Form Container </h3>
        <FormContainer />
      </div>
    );
  }
}

render(<Test />, document.getElementById("root"));
