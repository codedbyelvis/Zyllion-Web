import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
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
      collapse: true
    };
  }

  test() {
    console.log('success')
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
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;