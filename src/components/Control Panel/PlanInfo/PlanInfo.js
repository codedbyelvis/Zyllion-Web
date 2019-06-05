import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "./PlanInfo-FC";
import './PlanInfo.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class Plan extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

  render() {
    return (
      <div className="Plan">
        <h3>Plan Details</h3>
        <FormContainer />
      </div>
    );
  }
}

render(<Plan />, document.getElementById("root"));
