import React, { Component } from 'react';
// import { BrowserHistory } from 'react-router';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actionCreators from './ducks/actionCreators';

import zyllion_logo from "./components/Home/Logo.png";
import Home from "./components/Home/Home";
import Plans from "./components/Plans/Plans";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
// import Compare from "./components/Compare/Compare";

import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";

//Stripe
import AccountDetails from "./components/Stripe/AccountDetails";
import Step2 from "./components/Stripe/Step2";

//Control Panel
import Test from "./components/Control Panel/Account/Test";
import Account from "./components/Control Panel/Account/Account";
import Payment from "./components/Control Panel/Payment/Payment";
import Planinfo from "./components/Control Panel/PlanInfo/PlanInfo";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="Container">

            <div className="customNav">
            <Link className="zyllion_logo" to="/">
            <img className="zyllion_logo"  src={zyllion_logo} />
            </Link>
            <div className="nav_links" >
              <ul>
              <li className="plans"><Link to="/plans">Plans</Link></li>
              <li className="about"><Link to="/about">About</Link></li>
              <li className="contact"><Link to='/contact'>Contact</Link></li>
              <li className="buttons">
              <Link to="/plans"><button className='Signup'>Signup</button></Link>
              <Link to="/signin"><button className='Login'>Login</button></Link>
              </li>
              </ul>
            </div>
            </div>

            <div className="footer" >
              <h4>2018 Zyllion, LLC | All Rights Reserved</h4>
              <ul>
                <li><a href="">Privacy Policy</a></li>
                <li><p>|</p></li>
                <li><a href="">Terms of Use</a></li>
              </ul>
              
              {/* {React.cloneElement(this.props.children, this.props)} */}
              
            </div>

            

            
            <Switch>
              <Route component={Home} exact path="/" />
              <Route component={Plans} path="/plans" />
              <Route component={About} path="/about" />
              <Route component={Contact} path="/contact" />
              {/* <Route component={Compare} path="/compare" /> */}

              <Route component={Signup} path="/signup" />
              <Route component={Signin} path="/signin" />

              <Route component={AccountDetails} path="/stripe" />
              <Route component={Step2} path="/step2" />
              
              <Route component={Test} path="/Test" />
              <Route component={Account} path="/account" />
              <Route component={Payment} path="/payment" />
              <Route component={Planinfo} path="/planinfo" />


              {/* <Route component={Example} path="/example/:postId" /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return{
//     email: state.Signin.email,
//     password: state.Signin.password,
//     token: state.token,
//   }
// }

// function MapDispatchToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }

// export default connect(mapStateToProps, MapDispatchToProps)(App);

export default App;