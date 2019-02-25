import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Plans from "./components/Plans/Plans";
import Compare from "./components/Compare/Compare";
import Signup from "./components/Signup/Signup";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import zyllion_logo from "./components/Home/Logo.png";
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
              <button className='Signup'>Signup</button>
              <button className='Login'>Login</button>
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
              <Route component={Compare} path="/compare" />
              <Route component={Signup} path="/signup" />
              <Route component={About} path="/about" />
              <Route component={Contact} path="/contact" />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;