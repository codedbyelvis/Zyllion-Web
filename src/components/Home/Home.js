import React, { Component } from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import homeBackground from './Logo.png';
export default class Home extends Component {


    render() {
        return (
            <div className='Home'>  
                <img src={homeBackground} alt=""/>
                <div className='Welcome'><h1>Welcome to Zyllion</h1></div>
                <div className='introBackground'></div>
                <div className='Intro'><h3>Easily and securely on-board and pay your vendors with blockchain.</h3>
                    <h4>Self-onboard your vendors, make faster and secure payments,and enable automated bank reconciliation for you and your vendors,
                         all while keeping an immutable payment record for cheaper and real-time audits.</h4></div>

                    <div className='plansButton'><Link to="/plans"><button>Plans</button></Link></div>

                    <div className='Partners'><h4>Partners</h4>
                    <ul>
                        <li>Partner A</li>
                        <li>Partner B</li>
                        <li>Partner C</li>
                        <li>Partner D</li>
                        <li>Partner E</li>
                    </ul></div>
                    
            </div> 
        )
    }
}
