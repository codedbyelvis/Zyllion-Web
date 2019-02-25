import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Plans.css';
export default class Plans extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    // need to be careful with CORS//

    // componentDidMount(){
    //     axios.get('http://127.0.0.1:8000/api/plan/list')
    //     .then(res=>{
    //         // this.setState({
    //         //     herolist: res.data
    //         // });
    //         console.log('connected!');
    //         console.log(res.data);
    //     })
    // }

    render() {
        return (
           
            <div className='Plans'> 
                <div className='plansTitle'><h1>What type of plan is right for you?</h1></div>
                <h3 className='plansMessage'>Allow vendors to self-onboard, capture invoices with OCR technology, 
                    and make payments for virtually zero transaction fees.</h3>
                <div className="plan1">
                <h3>Basic</h3>
                <h4>First Month Free</h4>
                <p>then</p>
                <p><strong>$59</strong> per user/month</p>
                <p>Basic starter plan for small businesses and contractors</p>
                <h4>Features:</h4>
                    {/* <p>Choose either:</p> */}
                    <p>Automated Accounts Payable</p>
                    {/* <p><strong>OR</strong></p>
                    <p>Automated Accounts Recievable</p> */}
                <h4>Integrations:</h4>
                    <p>Quickbooks Online</p>
                <h4>Users:</h4>
                <p>1 - 5</p>
                <Link to="/signup"><button>Signup</button></Link>
                </div>

        <div className='planCover2'></div>

                <div className="plan2">
                <h3>Corporate</h3>
                <h4>First Month Free</h4>
                <p>then</p>
                <p><strong>$99</strong> Per Month/User</p>
                <p>The perfect plan for an established mid-sized company</p>
                <h4>Features:</h4>
                    <p>Automated Accounts Payable</p>
                    <p><strong>AND</strong></p>
                    <p>Automated Accounts Recievable</p>
                <h4>Integrations:</h4>
                    <p>All from Basic</p>
                    <p>Quickbooks Premier</p>
                    <p>Quickbooks Pro</p>
                    <p>Xero</p>
                <h4>Users:</h4>
                <p>1 - 10</p>
                <h6>*Plus a free account to set permissions</h6>
                {/* deleted link tag */}
                <button className='button2'>Signup</button>
                </div>

        <div className='planCover3'></div>

                <div className="plan3">
                <h3>Enterprise</h3>
                <h4>First Month Free</h4>
                <p>then</p>
                <p><strong>CUSTOM</strong></p>
                <p>The perfect plan for a large corporation or accounting firm</p>
                <h4>Features:</h4>
                    <p>Automated Accounts Payable</p>
                    <p><strong>AND</strong></p>
                    <p>Automated Accounts Recievable</p>
                <h4>Integrations:</h4>
                    <p>All from Corporate</p>
                    <p>Intacct</p>
                    <p>Netsuite</p>
                    <p>QuickBooks Enterprise</p>
                <h4>Users:</h4>
                <p>3 - 150</p>
                <h6>*Plus a free account to set permissions</h6>
                {/* deleted link tag */}
                <button className='button2'>Signup</button>
                </div>
                
                {/* <div className='compareButton'><Link to="/compare"><button>Compare</button></Link></div> */}
                
            </div> 
        )
    }
}

/* // <div className='Plans'> 
            //     <div className='plansTitle'><h1>Plans</h1></div>
            //     <h3 className='plansMessage'>Allow vendors to self-onboard, capture invoices with OCR technology, 
            //         and make payments for virtually zero transaction fees.</h3>
            //     <div className="plan1">
            //     <h3>Bronze</h3>
            //     <h5>Accounts Payable(AP) or Accounts Recievable(AR)</h5>
            //     <p>Perks:
            //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            //         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            //         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            //         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            //     </p>
            //     <p>Price: $500</p>
            //     <Link to="/signup"><button>Signup</button></Link>
            //     </div>
            //     <div className="plan2">
            //     <h3>Silver</h3>
            //     <h5>Accounts Payable(AP) and Accounts Recievable(AR)</h5>
            //     <p>Perks:
            //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            //         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            //         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            //         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            //     </p>
            //     <p>Price: $1000</p>
            //     <Link to="/signup"><button>Sign-up</button></Link>
            //     </div>
            //     <div className="plan3">
            //     <h3>Gold</h3>
            //     <h5>Accounts Payable(AP) and Accounts Recievable(AR)</h5>
            //     <p>Perks:
            //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            //         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            //         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            //         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            //     </p>
            //     <p>Price: $2000</p>
            //     <Link to="/signup"><button>Sign-up</button></Link>
            //     </div>
            //     <div className='compareButton'><Link to="/compare"><button>Compare</button></Link></div> */