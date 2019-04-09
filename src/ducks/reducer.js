import axios from 'axios';

const initialState = {
    email: '',
    password: '',
    token: ''
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
            
            default:
            return state;
    }
}

// window.devToolsExtension && window.devtooldExtension();