import {login} from '../services/login'
import {REQUEST_LOGIN, LOGIN_PASSED, LOGIN_FAILED} from '../actions/login'

export function initiateLogin(credentials) {
    return function fetchToken(dispatch, getState) {
        dispatch({type: REQUEST_LOGIN});
        login(credentials).then(response => {
                if (!response.ok) {
                    console.log('response not ok');
                    dispatch({type: LOGIN_FAILED});
                    return;
                }

                response.json().then(data => {
                    if (!data.token) {
                        console.log('no token');
                        console.log(data);
                        dispatch({type: LOGIN_FAILED});
                    } else {
                        console.log('success');
                        dispatch({type: LOGIN_PASSED, token: data.token});
                    }
                });
            }, error => {dispatch({type: LOGIN_FAILED});}
        );
    }
}