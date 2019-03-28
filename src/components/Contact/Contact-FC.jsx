import React, { Component } from "react";
import axios from 'axios';

import Input from "../Forms/Input";
import TextArea from "../Forms/TextArea";
import Button from "../Forms/Button";

class ContactFC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactEmail: {
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      },

    };
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubject = this.handleSubject.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
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

    const { firstName, lastName, email, subject, message } =this.state.contactEmail;


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
        contactEmail: {
          ...prevState.contactEmail,
          firstName: value
        }
      }),
      () => console.log(this.state.contactEmail)
    );
  }

  handleLastName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        contactEmail: {
          ...prevState.contactEmail,
          lastName: value
        }
      }),
      () => console.log(this.state.contactEmail)
    );
  }

  handleEmail(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        contactEmail: {
          ...prevState.contactEmail,
          email: value
        }
      }),
      () => console.log(this.state.contactEmail)
    );
  }

  handleSubject(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        contactEmail: {
          ...prevState.contactEmail,
          subject: value
        }
      }),
      () => console.log(this.state.contactEmail)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        contactEmail: {
          ...prevState.contactEmail,
          [name]: value
        }
      }),
      () => console.log(this.state.contactEmail)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        contactEmail: {
          ...prevState.contactEmail,
          message: value
        }
      }),
      () => console.log(this.state.contactEmail)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.contactEmail;

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

    const { firstName, lastName, email, subject, message } =this.state.contactEmail;


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
      contactEmail: {
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
          value={this.state.contactEmail.firstName}
          placeholder={"Enter your First Name"}
          handleChange={this.handleInput}
        />{" "}
        {/* First Name */}
        <Input
          inputType={"text"}
          title={"Last Name"}
          name={"lastName"}
          value={this.state.contactEmail.lastName}
          placeholder={"Enter your Last Name"}
          handleChange={this.handleInput}
        />{" "}
        {/* Last Name */}
        <Input
          inputType={"text"}
          title={"Email"}
          name={"email"}
          value={this.state.contactEmail.email}
          placeholder={"Enter your email"}
          handleChange={this.handleInput}
        />{" "}
        {/* Email */}
        <Input
          inputType={"text"}
          title={"Subject"}
          name={"subject"}
          value={this.state.contactEmail.subject}
          placeholder={"Enter your subject"}
          handleChange={this.handleInput}
        />{" "}
        {/* Subject */}
        <TextArea
          title={"Message"}
          rows={10}
          value={this.state.contactEmail.message}
          name={"messageInfo"}
          handleChange={this.handleTextArea}
          placeholder={"We will get back to you as soon as possible"}
        />
        {/* Message */}
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

export default ContactFC;
