import {login, create} from '../services/login'
import {getAllMemos} from './memo'
import {REQUEST_LOGIN, LOGIN_PASSED, LOGIN_FAILED,
    REQUEST_REGISTER, REGISTER_PASSED, REGISTER_FAILED} from '../actions/login'

export function initiateLogin(credentials) {
    return function fetchToken(dispatch, getState) {
        dispatch({type: REQUEST_LOGIN});
        login(credentials).then(response => {
                if (!response.ok) {
                    dispatch({type: LOGIN_FAILED});
                    return;
                }

                response.json().then(data => {
                    if (!data.token) {
                        dispatch({type: LOGIN_FAILED});
                    } else {
                        dispatch({type: LOGIN_PASSED, token: data.token});
                        dispatch(getAllMemos(data.token));
                    }
                });
            }, error => {dispatch({type: LOGIN_FAILED});}
        );
    }
}

export function initiateRegister(credentials) {
    return function registerNewUser(dispatch, getState) {
        dispatch({type: REQUEST_REGISTER});
        create(credentials).then(response => {
                if (!response.ok) {
                    dispatch({type: REGISTER_FAILED});
                    return;
                }

                dispatch({type: REGISTER_PASSED});
                dispatch(initiateLogin(credentials));
            }, error => {dispatch({type: REGISTER_FAILED});}
        );
    }
}