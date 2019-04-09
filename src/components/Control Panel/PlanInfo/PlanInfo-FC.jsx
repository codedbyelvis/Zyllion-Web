import React, { Component } from "react";
import axios from 'axios';

import Input from "../../Forms/Input";
import Button from "../../Forms/Button";

class PlanInfoFC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PlanInfo: {
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        user_number: ""
      },

    };
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubject = this.handleSubject.bind(this);
    this.handleUserNumber = this.handleUserNumber.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);

    //Email Binds
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.baseState=this.state;
  }

  /* This lifecycle hook gets executed when the component mounts */

  componentDidMount() {
    window.scrollTo(0, 0); 
    }

//   handleChange (e) {
//   this.setState({ [e.target.name]: e.target.value });
//   }

  async handleSubmit(e) {
    e.preventDefault();

    const { firstName, lastName, email, subject, message } =this.state.PlanInfo;


    await axios.post('/api/form', {
        firstName,
        lastName,
        email,
        subject,
        message
    })
}
        

  handleFirstName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        PlanInfo: {
          ...prevState.PlanInfo,
          firstName: value
        }
      }),
      () => console.log(this.state.PlanInfo)
    );
  }

  handleLastName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        PlanInfo: {
          ...prevState.PlanInfo,
          lastName: value
        }
      }),
      () => console.log(this.state.PlanInfo)
    );
  }

  handleEmail(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        PlanInfo: {
          ...prevState.PlanInfo,
          email: value
        }
      }),
      () => console.log(this.state.PlanInfo)
    );
  }

  handleSubject(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        PlanInfo: {
          ...prevState.PlanInfo,
          subject: value
        }
      }),
      () => console.log(this.state.PlanInfo)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        PlanInfo: {
          ...prevState.PlanInfo,
          [name]: value
        }
      }),
      () => console.log(this.state.PlanInfo)
    );
  }

  handleUserNumber(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        PlanInfo: {
          ...prevState.PlanInfo,
          age: value
        }
      }),
      () => console.log(this.state.PlanInfo)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.PlanInfo;

    // fetch("http://example.com", {
    //   method: "POST",
    //   body: JSON.stringify(userData),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   }
    // }).then(response => {
    //   response.json().then(data => {
    //     console.log("Successful" + data);
    //   });
    // });
    // axios.post('/api/form', {
    //     firstName,
    //     lastName,
    //     email,
    //     subject,
    //     message
    //     })
    //     .then((response) => {
    //       console.log('Emailed')
    //       return response;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //   });

    const { firstName, lastName, email, subject, message } =this.state.PlanInfo;


    axios.post('/api/form', {
        firstName,
        lastName,
        email,
        subject,
        message
    })
    .then((response) => {
        console.log('Emailed')
        return response;
    })
    .catch((error) => {
        console.log(error);
        console.log("Scooby Doo");
    });
}

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      PlanInfo: {
        firstName: "",
        lastName: "", 
        email: "",
        subject: "",
        message: ""
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          title={"First Name"}
          name={"firstName"}
          value={this.state.PlanInfo.firstName}
          placeholder={"Enter your First Name"}
          handleChange={this.handleInput}
        />{" "}
        {/* First Name */}
        <Input
          inputType={"text"}
          title={"Last Name"}
          name={"lastName"}
          value={this.state.PlanInfo.lastName}
          placeholder={"Enter your Last Name"}
          handleChange={this.handleInput}
        />{" "}
        {/* Last Name */}
        <Input
          inputType={"text"}
          title={"Email"}
          name={"email"}
          value={this.state.PlanInfo.email}
          placeholder={"Enter your email"}
          handleChange={this.handleInput}
        />{" "}
        {/* Email */}
        <Input
          inputType={"text"}
          title={"Subject"}
          name={"subject"}
          value={this.state.PlanInfo.subject}
          placeholder={"Enter your subject"}
          handleChange={this.handleInput}
        />{" "}
        {/* Subject */}
        <Input
          inputType={"number"}
          name={"usernumber"}
          title={"Number of Users"}
          value={this.state.PlanInfo.user_number}
          placeholder={"Amount of Users"}
          handleChange={this.handleUserNumber}
        />{" "}
        {/* Number of Users */}
        <Button
          action={this.handleFormSubmit}
        //   action={this.handleClearForm}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
          onSubmit={this.handleSubmit}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default PlanInfoFC;
