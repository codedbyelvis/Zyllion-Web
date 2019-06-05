import React, { Component } from 'react';
import Icon1 from './Onboarding.png';
import Icon2 from './Payment.png';
import Icon3 from './Audit.png';
import './About.css';


export default class About extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (

                <div className='About'>
                <h1 className='aboutTitle'>Why Zyllion?</h1>
                
                <img className='Icon1' src={Icon1} alt=""/>
                <img className='Icon2' src={Icon2} alt=""/>
                <img className='Icon3' src={Icon3} alt=""/> 
                               
                <div className='AboutTitle1'><h1 >SELF-ONBOARDING</h1>
                <p>Stop asking vendors to send you their bank information and W9s. Onboard them through Zyllion</p>
                </div>
                
                <div className='AboutTitle2'><h1 >PAYMENT</h1>
                <p>Speed the amount of time it takes to get your payments processed.
                    Automated Clearing House(ACH) payments, wire payments, and checks are riddled with errors and end up costing you a lot of money. 
                    Making payments through blockchain is faster, secure, and virtually free.</p>
                </div>

                <div className='AboutTitle3'><h1 >AUDITS/BANK RECONCILIATION</h1>
                <p>Keep an immutable record for all of your payments and enable automated bank reconciliations.</p>
                </div>
                
                </div> 
        )
    }
}