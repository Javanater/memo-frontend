import {
    REQUEST_LOGIN, LOGIN_PASSED, LOGIN_FAILED,
    LOGOUT,
    REQUEST_REGISTER, REGISTER_PASSED, REGISTER_FAILED,
    REQUEST_GET_MEMOS, GET_MEMOS_PASSED, GET_MEMOS_FAILED
} from '../actions/login'

const initialState = {
    login_pending: false,
    login_failed: false,
    register_pending: false,
    register_failed: false,
    token: null,
    get_memos_pending: false,
    get_memos_failed: false,
    memos: null,
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

        case LOGOUT:
            return {
                ...state,
                token: null
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

        case REQUEST_GET_MEMOS:
            return {...state, get_memos_pending: true};

        case GET_MEMOS_PASSED:
            return {
                ...state,
                get_memos_pending: false,
                get_memos_failed: false,
                memos: action.memos
            };

        case GET_MEMOS_FAILED:
            return {
                ...state,
                get_memos_pending: false,
                get_memos_failed: true
            };

        default:
            return state;
    }
}