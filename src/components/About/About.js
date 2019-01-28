import React, { Component } from 'react';
import Icon1 from './Audit.png';
import Icon2 from './Onboarding.png';
import Icon3 from './Payment.png';
import './About.css';
export default class About extends Component {

    render() {
        return (
            <div className='About'>
                <img className='Icon1' src={Icon1} alt=""/>
                <h1 className='AboutTitle1'>Who we are</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <img className='Icon2' src={Icon2} alt=""/>
                <h1 className='AboutTitle2'>What we do</h1>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                <img className='Icon3' src={Icon3} alt=""/>                
                <h1 className='AboutTitle3'>How we do it</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div> 
        )
    }
}