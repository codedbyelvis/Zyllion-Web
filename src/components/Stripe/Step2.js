import React, { Component } from 'react';
import axios from 'axios';

export default class Step2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPlan: 'Basic'
        };

        this.switchPlan = this.switchPlan.bind(this);
        this.nextStep = this.nextStep.bind(this);


        
        
    }
    
    switchPlan(currentPlan) {
        this.setState({
            currentPlan
        });
    }

    nextStep() {
        const {
            currentPlan
        } = this.state;
        
        axios.post('/api/customer/subscribe', {
            plan: currentPlan,
            })
            .then((response) => {
              console.log('Striped?')
              return response;
            })
            .catch((error) => {
              console.log(error);
          });
        
        // fetch('/api/customer/subscribe', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //       plan: currentPlan,
        //     })
        //   }).then((res) => res.json()).then((response) => {
        //     console.log('response', response);
        //   });
    }

    render() {

        const {
            currentPlan
        }=this.state;

        console.log('currentPlan', currentPlan);

        const plans = ['Onboarding', 'Basic', 'Corporate', 'Enterprise'];

        return (
            <div className='Step2'>
            <p>Hello World</p>
            <p>Hello World</p>
            <p>Hello World</p>
            <p>Hello World</p>
            <p>Hello World</p>
            <p>Hello World</p>
            <p>Hello World</p>
            <p>Hello World</p>
            <p>Hello World</p>
            <p>Hello World</p>
            <p>Hello World</p>
            <div>
            <h2>Plans</h2>
            {
                (plans).map((plan) => {
                    if(plan == currentPlan) {
                        return (
                            <button style={{
                                backgroundColor: '#d8d8d8',
                            }}
                            onClick = {() => this.switchPlan(plan)}
                            >
                                {plan}
                            </button>
                        );
                        }
                        return (
                            <button style={{
                                backgroundColor: '#fff',
                            }}
                            onClick = {() => this.switchPlan(plan)}
                            >
                                {plan}
                            </button>
                        );
                   
                })
            }
            </div>

            <div>
                <button onClick = {this.nextStep}>Next</button>
            </div>

            </div>
        )
    }
}