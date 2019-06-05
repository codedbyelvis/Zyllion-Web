//Reducer takes 2 things:
//action(info about what happened)
//copy of current state
import axios from 'axios';
import React, { Component } from "react";
import { createLogic } from 'redux-logic';
import SignInFC from '../components/Signin/Signin-FC';

export class Reducer extends Component {
constructor(props) {
    super(props);

    this.state = {
      // redirect: false,
      token: "",
      SignIn: {
        email: "",
        password: "",
      },
    };
}
}

const initialState = {
    email: '',
    password: '',
    token: ''
}


export function posts(state = [], action) {
    console.log('this post will change');
    console.log(state, action);
    return state;
}


// const FIND_USER = 'FIND_USER';
// const findingUser = createLogic({

//     // declarative built-in functionality wraps your code
//     type: FIND_USER, // only apply this logic to this type
//     cancelType: CANCEL_FIND_USER, // cancel on this type
//     latest: true, // only take latest
  
//     // your code here, hook into one or more of these execution
//     // phases: validate, transform, and/or process
//     process({ getState, action }, dispatch, done) {
//       axios.get('http://127.0.0.1:8000/user/login')
//         .then(resp => resp.data.token)(console.log('finding token', resp.data.token))
//         .then(token => dispatch({ type: FIND_USER_SUCCESS,
//                                   payload: token }))
//         .catch(err => {
//                console.error(err); // log since could be render err
//                dispatch({ type: FIND_USER_FAILED, payload: err,
//                           error: true })
//         })
//         .then(() => done()); // call done when finished dispatching
//     }
//   });   

const MODIFY_USERNAME = 'MODIFY_USERNAME';

export function modify_username(state = {
    email: this.props.SignIn.email,
    password: this.props.SignIn.password,
    // token: this.props.token
}, action) {
    console.log('modify userget user',state);
    const findToken = axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/user/login',
        data: {
            state
        //   email: 'john@target.com',
        //   password: '!Qwerty12345'
        }
        
      }).then((res)=> {
        this.initialState.token = res.data.token;
         console.log('Token finally made it home'); 
         console.log(res.data.token); 
      }).catch((error)=> {
          console.log(error);
          console.log("The Elusive Token continues to toy with my heart");
      });
    return {
        type: MODIFY_USERNAME,
        payload: findToken
    }
}

const GET_USER = 'GET_USER';

export function getUser(email, password) {
   
    console.log('get user',email,password);
    const getToken = axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/user/login',
        data: {
        //   email: 'john@target.com',
        //   password: '!Qwerty12345'
        }
        
      }).then((res)=> {
        this.initialState.token = res.data.token;
         console.log('We may be getting a token'); 
         console.log(res.data.token); 
      }).catch((error)=> {
          console.log(error);
          console.log("there hasn't been a token in 40 years");
      });
    return {
        type: GET_USER,
        payload: getToken
    }
}

const LOGOUT = 'LOGOUT'; //Reroute to Home?

export function logout(token) {
    console.log(token);
    const loseToken = axios.post('http://127.0.0.1:8000/user/logout/all').then(res => {
        
        console.log('Goodbye old friend');
        
    })
    return {
        type: LOGOUT,
        payload: loseToken
    }
}

const REFRESH = 'REFRESH';

export function refresh(token) {
    console.log('refresh',token);
    const refreshToken = axios.post('http://127.0.0.1:8000/user/login/refresh').then(res => {
        initialState.token = res.data.token;
        console.log('its like a waterfall washing over me');
        // return res.data.token;
    })
    return {
        type: REFRESH,
        payload: refreshToken
    }
}
export default function reducer (state = initialState, action) {
    console.log('action',action)
    switch(action.type) {
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, { token: action.payload });

        case LOGOUT + '_FULFILLED':
            return Object.assign({}, state, { token: action.payload });

        case REFRESH + '_FULFILLED':
            return Object.assign({}, state, { token: action.payload });
        
        case MODIFY_USERNAME + '_FULFILLED':
            return Object.assign({}, state, { findToken: action.payload });
            
            default:
            return state;
    }
}
// window.devToolsExtension && window.devtooldExtension();