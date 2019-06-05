import React, { Component } from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import homeBackground from './zyllion-background.jpeg';


export default class Home extends Component {

    render() {
        return (
            <div className='Home'>  
                <img src={homeBackground} alt=""/>
                <div className='introBackground'></div>
                <div className='Welcome'><h1>Zyllion Technology</h1></div>
                <div className='Intro'><h3>Easily and securely on-board and pay your vendors with blockchain.</h3>
                    {/* <h4>Self-onboard your vendors, make faster and secure payments,and enable automated bank reconciliation for you and your vendors,
                         all while keeping an immutable payment record for cheaper and real-time audits.</h4> */}
                </div>

                    <div className='plansButton'><Link to="/plans"><button>Plans</button></Link></div>
                    
            </div> 
        )
    }
}
