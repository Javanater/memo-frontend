import {login, create} from '../services/login'
import {getAllMemos} from './memos'

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const LOGIN_PASSED = 'LOGIN_PASSED'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const LOGOUT = 'LOGOUT'

export const REQUEST_REGISTER = 'REQUEST_REGISTER'
export const REGISTER_PASSED = 'REGISTER_PASSED'
export const REGISTER_FAILED = 'REGISTER_FAILED'

function request_login(credentials) {
    return {
        type: REQUEST_LOGIN,
        credentials: credentials
    };
}

function login_passed(token) {
    return {
        type: LOGIN_PASSED,
        token: token
    };
}

function login_failed() {
    return {
        type: LOGIN_FAILED
    };
}

export function initiateLogin(credentials) {
    return (dispatch) => {
        dispatch(request_login(credentials))
        login(credentials).then(response => {
                if (!response.ok) {
                    dispatch(login_failed())
                    return
                }

                response.json().then(data => {
                    if (!data.token) {
                        dispatch(login_failed())
                    } else {
                        dispatch(login_passed(data.token))
                        dispatch(getAllMemos(data.token))
                    }
                })
            }, () => {dispatch(login_failed())}
        )
    }
}

export function logout() {
    return {
        type: LOGOUT,
        token: null
    }
}

function request_register(credentials) {
    return {
        type: REQUEST_REGISTER,
        credentials: credentials
    }
}

function register_passed() {
    return {
        type: REGISTER_PASSED
    }
}

function register_failed() {
    return {
        type: REGISTER_FAILED
    }
}

export function initiateRegister(credentials) {
    return (dispatch) => {
        dispatch(request_register(credentials))
        create(credentials).then(response => {
                if (!response.ok) {
                    dispatch(register_failed())
                    return
                }

                dispatch(register_passed())
                dispatch(initiateLogin(credentials))
            }, () => {dispatch(register_failed())}
        );
    }
}
