import React, { Component } from 'react';
import './Plan.css';


export default class Plan extends Component {

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

                <div className='Plan'>
                
                
                </div> 
        )
    }
}