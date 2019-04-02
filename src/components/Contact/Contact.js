import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "./Contact-FC";
import axios from 'axios';
import './Contact.css';
export default class Contact extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       firstName: '',
    //       lastName: '',
    //       email: '',
    //       subject: '',
    //       message: ''
    //     };
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //     this.baseState=this.state;
    //   }

    //   componentDidMount() {
    //       window.scrollTo(0, 0); 
    //     }
        
    //     trying() {
    //         console.log('please');
    //     }

    //   resetForm() {  
    //     console.log('por favor');
    //     document.getElementById('contact-form').reset();
    //     }
        
    //     resetform = () => {
    //         this.setState(this.baseState)
    //       };

    //       Work() {
    //           console.log('zerror');
    //         this.handleSubmit().catch((error) => {
    //             console.log(error);
    //             console.log('error');
    //         });
    //         console.log('berror');
    //         this.resetForm().catch((error) => {
    //             console.log(error);
    //             console.log('terror');
    //         });
    //       }
    
    //   handleChange (e) {
    //     this.setState({ [e.target.name]: e.target.value });
    //   }

    //   async handleSubmit(e) {
    //       e.preventDefault();

    //       const { firstName, lastName, email, subject, message } =this.state;


    //       const form = await axios.post('/api/form', {
    //           firstName,
    //           lastName,
    //           email,
    //           subject,
    //           message
    //       })
    //   }
      
    // render() {
    //     return (
    //         <div className='Contact'>
    //             <h1 className='ContactTitle'>Contact</h1>
    //             <h3 className='Contactinfo'>Questions about blockchain or when we plan to launch? No problem. 
    //                 Drop us a line and we will get back to you.</h3>
            /* <form id='contact-form' onSubmit={this.handleSubmit}>
                <div className='AboutInput'>
                <label>First Name</label></div>
                <div>
                <input type="text" name="firstName" onChange={this.handleChange} required/></div>

                <div>
                <label>Last Name</label></div>
                <div>
                <input type="text" name="lastName" onChange={this.handleChange} required/></div>

                <div>
                <label>Email</label></div>
                <div>
                <input type="email" name="email" onChange={this.handleChange} required/></div>

                <div>
                <label>Subject</label></div>
                <div>
                <input type="text" name="subject" onChange={this.handleChange} required/></div>

                <div>
                <label>Message</label></div>
                <div>
                <input type="textarea" name="message" onChange={this.handleChange} required/></div>

                <div>
                <button onClick={setTimeout(this.resetForm, 3000)}>Submit</button>
                <input type="submit" id='submit' value="Submit" action='this.resetForm'/></div>

            </form> */
    //     <div className='contain'>
    //         <div className='wrapper'>
    //             <div className='contacts'>
    //                 <h3>Our contacts</h3>
        
    //                 <ul>
    //                 <li>San Joe St.</li>
    //                 <li>00-1212121-11</li>
    //                 <li>mail@mail.com</li>
    //                 </ul>
    //             </div>
                    
    //             <div className='form'>
    //                 {/* <h3>Send us a message</h3> */}
        
    //                 <form action=''>
    //                     <p>
    //                        <label htmlFor=''name="firstName">First Name</label>
    //                        <input type='text'onChange={this.handleChange} required/>
    //                     </p>
    //                     <p>
    //                        <label htmlFor=''name="lastName">Last Name</label>
    //                        <input type='text'onChange={this.handleChange} required/>
    //                     </p>
    //                     <p>
    //                        <label htmlFor=''>Email</label>
    //                        <input type='text'onChange={this.handleChange} required/>
    //                     </p>
    //                     <p>
    //                        <label htmlFor=''>Subject</label>
    //                        <input type='text'onChange={this.handleChange} required/>
    //                     </p>
    //                     <p className='full-width'>
    //                        <label htmlFor=''>Write your message</label>
    //                        <textarea name="" id="" cols="30" rows="7" onChange={this.handleChange} required></textarea>
    //                     </p>
    //                     <p className='full-width'>
    //                        <button onSubmit={this.handleSubmit}>Submit</button>
    //                     </p>
    //                 </form>
                
    //             </div>
        
    //         </div>
    //     </div>
            
    //         </div> 
    //     )
    // }

    render() {
    return (
      <div className="Contact">
      <h1 className='ContactTitle'>Contact</h1>
      <h3 className='Contactinfo'>Questions about blockchain or when we plan to launch? No problem. 
          Drop us a line and we will get back to you.</h3>
        <FormContainer />

        <h3 className='Office'>Our Office</h3>
        <p className='Directions'>
          41 Peabody Street
          Nashville, TN, 37210
          United States
        </p>
      </div>
    );
  }
}

render(<Contact />, document.getElementById("root"));
