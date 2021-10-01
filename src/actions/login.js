export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const LOGIN_PASSED = 'LOGIN_PASSED'
export const LOGIN_FAILED = 'LOGIN_FAILED'

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

export function login_failed(error) {
    return {
        type: LOGIN_FAILED
    };
}
