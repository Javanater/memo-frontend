import {login} from '../services/login'
import {REQUEST_LOGIN, LOGIN_PASSED, LOGIN_FAILED} from '../actions/login'

export function initiateLogin(credentials) {
    return function fetchToken(dispatch, getState) {
        dispatch({type: REQUEST_LOGIN});
        login(credentials).then(
            data => dispatch({type: LOGIN_PASSED, token: data.token}),
            erro => dispatch({type: LOGIN_FAILED, erro})
        );
    }
}