import {
    REQUEST_LOGIN, LOGIN_PASSED, LOGIN_FAILED,
    REQUEST_REGISTER, REGISTER_PASSED, REGISTER_FAILED
} from '../actions/login'

const initialState = {
    login_pending: false,
    login_failed: false,
    register_pending: false,
    register_failed: false,
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

        case REQUEST_REGISTER:
            return {...state, register_pending: true};

        case REGISTER_PASSED:
            return {
                ...state,
                register_pending: false,
                register_failed: false
            };

        case REGISTER_FAILED:
            return {
                ...state,
                register_pending: false,
                register_failed: true
            };

        default:
            return state;
    }
}