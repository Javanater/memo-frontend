import {REQUEST_LOGIN, LOGIN_PASSED, LOGIN_FAILED} from '../actions/login'

export function login(state = {login_pending: false, token: null}, action) {
    switch (action.type) {
        case REQUEST_LOGIN:
            return {...state, login_pending: true};

        case LOGIN_PASSED:
            return {
                ...state,
                login_pending: false,
                token: action.token
            };

        case LOGIN_FAILED:
            return {...state, login_pending: false};

        default:
            return state;
    }
}