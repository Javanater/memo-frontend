export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const LOGIN_PASSED = 'LOGIN_PASSED'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const REQUEST_REGISTER = 'REQUEST_REGISTER'
export const REGISTER_PASSED = 'REGISTER_PASSED'
export const REGISTER_FAILED = 'REGISTER_FAILED'

export function request_login(credentials) {
    return {
        type: REQUEST_LOGIN,
        credentials: credentials
    };
}

export function login_passed(token) {
    return {
        type: LOGIN_PASSED,
        token: token
    };
}

export function login_failed() {
    return {
        type: LOGIN_FAILED
    };
}

export function request_register(credentials) {
    return {
        type: REQUEST_REGISTER,
        credentials: credentials
    };
}

export function register_passed() {
    return {
        type: REGISTER_PASSED
    };
}

export function register_failed() {
    return {
        type: REGISTER_FAILED
    };
}
