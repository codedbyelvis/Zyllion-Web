import React, { Component } from "react";
import { Link, Redirect, withRouter  } from 'react-router-dom';
import { connect } from 'react-redux';
import {getUser, refresh} from '../../ducks/reducer';
import axios from 'axios';

import Input from "../Forms/Input";
import Button from "../Forms/Button";

class SignInFC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // redirect: false,
      token: "",
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

  // setRedirect = () => {
  //   this.setState({
  //     redirect: true
  //   })
  // }
  // renderRedirect = () => {
  //   if (this.state.token != null) {
  //     return <Redirect to='/account' />
  //   }
  // }

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log('Read like a book',this.props.history);
    console.log('turn the pages',this.props); 
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

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.SignIn;
    
    const { email, password } =this.state.SignIn;
    // const { redirect } =this.state.redirect;

    axios({
      method: 'get',
      url: `http://127.0.0.1:8000/user/emailcheck/${email}`,
      
      
    }).then((res)=> {
      if(res.data.exists === true) {
        console.log('This is you'); 
        console.log('try1', this.state.SignIn.email);
      } else {
        console.log("YOu SHall NOt PAss")
      }
       console.log(res.data.exists); 
    }).catch((error)=> {
        console.log(error);
        console.log("Story doesn't check out");
    });
    
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
        // this.state.redirect = true;
        this.state.token = res.data.token;
        console.log('Read like a book',this.props.history)
        console.log('turn the pages',this.props)
        // this.props.history.push("/account")
         console.log('At least they could do it!'); 
         console.log(res.data.token); 
         console.log('uh oh', this.state)

         
         
        //  console.log('are we sending?',{...this.props}) 
        //  console.log(this.state.redirect); 
        //  return {...this.props},<Redirect to='/account' />
         this.props.history.push("/account");
      }).catch((error)=> {
          console.log(error);
          console.log("and then there were 2");
      });

}


  render() {
    return (
      
      <form className="Signcontainer-fluid" onSubmit={this.handleFormSubmit} handleChange={this.renderRedirect}>
      
        <div className="signine"><Input
          inputType={"email"}
          title={"Email"}
          name={"email"}
          value={this.state.SignIn.email}
          placeholder={"Enter your email"}
          handleChange={this.handleInput}
        />{" "}</div>
        {/* Email */}
        <div className="signinp"><Input
          inputType={"password"}
          title={"Password"}
          name={"password"}
          value={this.state.SignIn.password}
          placeholder={"Enter your password"}
          handleChange={this.handleInput}
        />{" "}</div>
        {/* Password */}
        {/* <Button
          action={this.handleFormSubmit}
        //   action={this.handleClearForm}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
          onSubmit={this.handleSubmit}
          // handleChange={this.renderRedirect}
        />{" "} */}
        {/*Submit */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};


// export default connect(SignInFC);
function mapStateToProps( state,props ) {
  console.log('me',state)
  console.log('props',(props));
  console.log('state',state);
  console.log('this',this);
  // const { email, password } =state.SignIn;
  // const { token } =this.state.token;
  // return state;
  return {
    // email: this.state.SignIn.email,
    // password: this.state.SignIn.password,
    // token: this.state.token,
    // LoginState: this.state,
    // poken: this.state.token
  }
}

export default connect( mapStateToProps, {getUser, refresh} )( withRouter(SignInFC) );
