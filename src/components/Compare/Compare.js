import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Compare.css';
export default class Compare extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <div className='Compare'> 
                <div className='compareTitle'><h1>Compare</h1></div>
                <h3>Compare price points and see what each plan entails.</h3>
                
                <div className="plan1">
                <h3>Bronze</h3>
                <h5>Accounts Payable(AP) or Accounts Recievable(AR)</h5>
                <p>Perks:
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>Price: $500</p>
                <button>Signup</button>
                </div>
                <div className="plan2">
                <h3>Silver</h3>
                <h5>Accounts Payable(AP) and Accounts Recievable(AR)</h5>
                <p>Perks:
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>Price: $1000</p>
                <button>Signup</button>
                </div>
                <div className="plan3">
                <h3>Gold</h3>
                <h5>Accounts Payable(AP) and Accounts Recievable(AR)</h5>
                <p>Perks:
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>Price: $2000</p>
                <button>Signup</button>
                </div>
                <Link to="/plans"><button>Plans</button></Link>
                
                
            </div> 
        )
    }
}