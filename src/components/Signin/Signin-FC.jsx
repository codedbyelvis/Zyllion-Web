import React, { Component } from "react";
import axios from 'axios';

import Input from "../Forms/Input";
import Button from "../Forms/Button";

class SignInFC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SignIn: {
        email: "",
        password: "",
      },

    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }

  /* This lifecycle hook gets executed when the component mounts */

  componentDidMount() {
    window.scrollTo(0, 0); 
    }

  handleFirstName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        SignIn: {
          ...prevState.SignIn,
          firstName: value
        }
      }),
      () => console.log(this.state.SignIn)
    );
  }

  handleLastName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        SignIn: {
          ...prevState.SignIn,
          lastName: value
        }
      }),
      () => console.log(this.state.SignIn)
    );
  }

  handleEmail(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        SignIn: {
          ...prevState.SignIn,
          email: value
        }
      }),
      () => console.log(this.state.SignIn)
    );
  }

  handlePassword(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        SignIn: {
          ...prevState.SignIn,
          subject: value
        }
      }),
      () => console.log(this.state.SignIn)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        SignIn: {
          ...prevState.SignIn,
          [name]: value
        }
      }),
      () => console.log(this.state.SignIn)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        SignIn: {
          ...prevState.SignIn,
          message: value
        }
      }),
      () => console.log(this.state.SignIn)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.SignIn;

    /////////////    Broken    //////////////////
    // axios.post('http://127.0.0.1:8000/user/login', {
    //     email,
    //     password,
    //     })
    //     .then((response) => {
    //       console.log('Signing In');
    //       console.log(`${email} Signed In`);
    //       console.log(password);
    //       console.log(response.body.token);
    //       return response;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       console.log('Monday, Am I right?');
    //       console.log(email);
    //       console.log(password);
    //   });
    /////////////    Broken    //////////////////
    
    const { email, password } =this.state.SignIn;

    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/user/login',
        data: {
        //   email: 'john@target.com',
        //   password: '!Qwerty12345'
          email,
          password
        }
        
      }).then((res)=> {
         console.log('At least they could do it!'); 
         console.log(res.data.token); 
      }).catch((error)=> {
          console.log(error);
          console.log("and then there were 2");
      });

      //make submit got to CP Account && feed token to redux
}


  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>

        <Input
          inputType={"text"}
          title={"Email"}
          name={"email"}
          value={this.state.SignIn.email}
          placeholder={"Enter your email"}
          handleChange={this.handleInput}
        />{" "}
        {/* Email */}
        <Input
          inputType={"text"}
          title={"Password"}
          name={"password"}
          value={this.state.SignIn.password}
          placeholder={"Enter your password"}
          handleChange={this.handleInput}
        />{" "}
        {/* Password */}
        <Button
          action={this.handleFormSubmit}
        //   action={this.handleClearForm}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
          onSubmit={this.handleSubmit}
        />{" "}
        {/*Submit */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default SignInFC;
