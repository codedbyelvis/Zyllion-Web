import React, { Component } from "react";

/* Import Components */
import Input from "../Forms/Input";
import Select from "../Forms/Select";
import TextArea from "../Forms/TextArea";
import Button from "../Forms/Button";

class ContactFC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SignupState: {
        company_name: "",
        first_name: "",
        last_name: "",
        payment_method: 4,
        plan: 7,
        num_users: "",
        phone: "",
        ext: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        creditcard: "",
        email: "",
        password: "",
        payment_id: ""
      },

      StateInitials: [
          "AL", "AK", "AZ","AR","CA","CO","CT","DE","FL","GA",
          "HI", "ID", "IL","IN","IA","KS","KY","LA","ME","MD",
          "MA","MI","MN","MS", "MO", "MT","NE","NV","NH","NJ",
          "NM","NY","NC","ND", "OH", "OK","OR","PA","RI","SC",
          "SD","TN","TX","UT", "VT", "VA","WA","WV","WI","WY"
        ]

    };
    this.handleCompanyName = this.handleCompanyName.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);

    this.handleEmail = this.handleEmail.bind(this);

    this.handleExt = this.handleExt.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    
    this.handleAddress1 = this.handleAddress1.bind(this);
    this.handleAddress2 = this.handleAddress2.bind(this);

    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZip = this.handleZip.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    
    this.handleNumUsers = this.handleNumUsers.bind(this);
    this.handleCreditCard = this.handleCreditCard.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleCompanyName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        SignupState: {
          ...prevState.SignupState,
          company_name: value
        }
      }),
      () => console.log(this.state.SignupState)
    );
  }
  
  handleFirstName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        SignupState: {
          ...prevState.SignupState,
          first_name: value
        }
      }),
      () => console.log(this.state.SignupState)
    );
  }

  handleLastName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        SignupState: {
          ...prevState.SignupState,
          last_name: value
        }
      }),
      () => console.log(this.state.SignupState)
    );
  }

  handleEmail(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        SignupState: {
          ...prevState.SignupState,
          email: value
        }
      }),
      () => console.log(this.state.SignupState)
    );
  }

  handlePassword(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        SignupState: {
          ...prevState.SignupState,
          paasword: value
        }
      }),
      () => console.log(this.state.SignupState)
    );
  }

  handleExt(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        SignupState: {
          ...prevState.SignupState,
          ext: value
        }
      }),
      () => console.log(this.state.SignupState)
    );
  }

  handlePhone(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        SignupState: {
          ...prevState.SignupState,
          phone: value
        }
      }),
      () => console.log(this.state.SignupState)
    );
  }

  handleAddress1(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        SignupState: {
          ...prevState.SignupState,
          address1: value
        }
      }),
      () => console.log(this.state.SignupState)
    );
  }

  handleAddress2(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        SignupState: {
          ...prevState.SignupState,
          address2: value
        }
      }),
      () => console.log(this.state.SignupState)
    );
  }

  handleCity(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        SignupState: {
          ...prevState.SignupState,
          city: value
        }
      }),
      () => console.log(this.state.SignupState)
    );
  }

  handleState(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, skills: newSelectionArray }
    }));
  }

  handleZip(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        SignupState: {
          ...prevState.SignupState,
          zip: value
        }
      }),
      () => console.log(this.state.SignupState)
    );
  }

  handleCountry(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        SignupState: {
          ...prevState.SignupState,
          country: value
        }
      }),
      () => console.log(this.state.SignupState)
    );
  }

  handleNumUsers(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        SignupState: {
          ...prevState.SignupState,
          num_users: value
        }
      }),
      () => console.log(this.state.SignupState)
    );
  }

  handleCreditCard(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        SignupState: {
          ...prevState.SignupState,
          creditcard: value
        }
      }),
      () => console.log(this.state.SignupState)
    );
  }



  //Submit and Clear

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        SignupState: {
          ...prevState.SignupState,
          [name]: value
        }
      }),
      () => console.log(this.state.SignupState)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.SignupState;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

//   handleClearForm(e) {
//     e.preventDefault();
//     this.setState({
//       SignupState: {
//         name: "",
//         email: "",
//         subject: "",
//         message: ""
//       }
//     });
//   }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          title={"Company Name"}
          name={"company_name"}
          value={this.state.SignupState.company_name}
          placeholder={"Enter your Company"}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the company */}
        <Input
          inputType={"text"}
          title={"First Name"}
          name={"first_name"}
          value={this.state.SignupState.first_name}
          placeholder={"Enter your First Name"}
          handleChange={this.handleInput}
        />{" "}
        {/* Admin First Name */}
        <Input
          inputType={"text"}
          title={"Last Name"}
          name={"last_name"}
          value={this.state.SignupState.last_name}
          placeholder={"Enter your Last Name"}
          handleChange={this.handleInput}
        />{" "}
        {/* Admin Last Name */}
        <Input
          inputType={"text"}
          title={"Email"}
          name={"email"}
          value={this.state.SignupState.email}
          placeholder={"Enter your email"}
          handleChange={this.handleInput}
        />{" "}
        {/* Email */}
        <Input
          inputType={"text"}
          title={"Password"}
          name={"password"}
          value={this.state.SignupState.password}
          placeholder={"Enter your Password"}
          handleChange={this.handleInput}
        />{" "}
        {/* Password */}
        <Input
          inputType={"text"}
          title={"Phone Number Extension"}
          name={"ext"}
          value={this.state.SignupState.ext}
          placeholder={"Extension"}
          handleChange={this.handleInput}
        />{" "}
        {/* Phone Number Extension */}
        <Input
          inputType={"text"}
          title={"Phone Number"}
          name={"phone"}
          value={this.state.SignupState.phone}
          placeholder={"Enter your Phone Number"}
          handleChange={this.handleInput}
        />{" "}
        {/* Phone Number */}
        <Input
          inputType={"text"}
          title={"Address 1"}
          name={"address1"}
          value={this.state.SignupState.address1}
          placeholder={"Enter your Address"}
          handleChange={this.handleInput}
        />{" "}
        {/* Address 1 */}
        <Input
          inputType={"text"}
          title={"Address 2"}
          name={"address2"}
          value={this.state.SignupState.address2}
          placeholder={"Address 2"}
          handleChange={this.handleInput}
        />{" "}
        {/* Address 2 */}
        <Input
          inputType={"text"}
          title={"City"}
          name={"city"}
          value={this.state.SignupState.city}
          placeholder={"Enter your City"}
          handleChange={this.handleInput}
        />{" "}
        {/* City */}
        <Select
          title={"State"}
          name={"state"}
          options={this.state.StateInitials}
          value={this.state.SignupState.state}
          placeholder={"State"}
          handleChange={this.handleInput}
        />{" "}
        {/* State Selection */}
        <Input
          inputType={"text"}
          title={"Zipcode"}
          name={"zip"}
          value={this.state.SignupState.zip}
          placeholder={"Zipcode"}
          handleChange={this.handleInput}
        />{" "}
        {/* Zipcode */}
        <Input
          inputType={"text"}
          title={"Country"}
          name={"country"}
          value={this.state.SignupState.country}
          placeholder={"Enter your Country"}
          handleChange={this.handleInput}
        />{" "}
        {/* Country */}
        <Input
          inputType={"text"}
          title={"Number of Users"}
          name={"num_users"}
          value={this.state.SignupState.num_users}
          placeholder={"How Many Users?"}
          handleChange={this.handleInput}
        />{" "}
        {/* Number of Users */}
        <Input
          inputType={"text"}
          title={"Credit Card"}
          name={"creditcard"}
          value={this.state.SignupState.creditcard}
          placeholder={"Credit Card Information"}
          handleChange={this.handleInput}
        />{" "}
        {/* Credit Card */}
        
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
        {/* <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "} */}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default ContactFC;
