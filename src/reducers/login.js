import {REQUEST_LOGIN, LOGIN_PASSED, LOGIN_FAILED} from '../actions/login'

const initialState = {
    login_pending: false,
    login_failed: false,
    token: null
}

export function login(state = initialState, action) {
    switch (action.type) {
        case REQUEST_LOGIN:
            return {...state, login_pending: true};

        case LOGIN_PASSED:
            return {
                ...state,
                login_pending: false,
                login_failed: false,
                token: action.token
            };

        case LOGIN_FAILED:
            return {
                ...state,
                login_pending: false,
                login_failed: true
            };

        default:
            return state;
    }
}