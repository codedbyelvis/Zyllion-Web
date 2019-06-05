import React, { Component } from "react";
import axios from 'axios';

import Input from "../../Forms/Input";
import TextArea from "../../Forms/TextArea";
import Button from "../../Forms/Button";

class PaymentFC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PaymentInfo: {
        bank_alias: "",
        account_number: "",
        routing_number: "",
      },

    };
    this.handleBankAlias = this.handleBankAlias.bind(this);
    this.handleAccountNumber = this.handleAccountNumber.bind(this);
    this.handleRoutingNumber = this.handleRoutingNumber.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  componentDidMount() {
    window.scrollTo(0, 0); 
    }   

  handleBankAlias(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        PaymentInfo: {
          ...prevState.PaymentInfo,
          BankAlias: value
        }
      }),
      () => console.log(this.state.PaymentInfo)
    );
  }

  handleAccountNumber(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        PaymentInfo: {
          ...prevState.PaymentInfo,
          AccountNumber: value
        }
      }),
      () => console.log(this.state.PaymentInfo)
    );
  }

  handleRoutingNumber(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        PaymentInfo: {
          ...prevState.PaymentInfo,
          RoutingNumber: value
        }
      }),
      () => console.log(this.state.PaymentInfo)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        PaymentInfo: {
          ...prevState.PaymentInfo,
          [name]: value
        }
      }),
      () => console.log(this.state.PaymentInfo)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.PaymentInfo;

    const { bank_alias, account_number, routing_number } =this.state.PaymentInfo;


    axios.post('/api/form', {
        bank_alias,
        account_number,
        routing_number
    })
    .then((response) => {
        console.log('Welcome Money')
        return response;
    })
    .catch((error) => {
        console.log(error);
        console.log("Goodbye Money");
    });
}

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          title={"Bank Alias"}
          name={"bankalias"}
          value={this.state.PaymentInfo.bank_alias}
          placeholder={"Enter your Bank Alias"}
          handleChange={this.handleInput}
        />{" "}
        {/* Bank Alias */}
        <Input
          inputType={"text"}
          title={"Account Number"}
          name={"accountnumber"}
          value={this.state.PaymentInfo.account_number}
          placeholder={"Enter your Account Number"}
          handleChange={this.handleInput}
        />{" "}
        {/* Account Number */}
        <Input
          inputType={"text"}
          title={"Routing Number"}
          name={"routingnumber"}
          value={this.state.PaymentInfo.routing_number}
          placeholder={"Enter your Routing Number"}
          handleChange={this.handleInput}
        />{" "}
        {/* Routing Number */}
        <Button
          action={this.handleFormSubmit}
        //   action={this.handleClearForm}
          type={"primary"}
          title={"Add bank"}
          style={buttonStyle}
          onSubmit={this.handleSubmit}
        />{" "}
        {/*Add Bank */}
        <Button
          action={this.handleFormSubmit}
        //   action={this.handleClearForm}
          type={"primary"}
          title={"Remove bank"}
          style={buttonStyle}
          onSubmit={this.handleSubmit}
        />{" "}
        {/*Remove Bank */}
        <Button
          action={this.handleFormSubmit}
        //   action={this.handleClearForm}
          type={"primary"}
          title={"Update"}
          style={buttonStyle}
          onSubmit={this.handleSubmit}
        />{" "}
        {/*Update */}
        <Button
          action={this.handleFormSubmit}
        //   action={this.handleClearForm}
          type={"primary"}
          title={"Continue"}
          style={buttonStyle}
          onSubmit={this.handleSubmit}
        />{" "}
        {/*Continue */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default PaymentFC;
