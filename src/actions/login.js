export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const LOGIN_PASSED = 'LOGIN_PASSED'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const LOGOUT = 'LOGOUT'

export const REQUEST_REGISTER = 'REQUEST_REGISTER'
export const REGISTER_PASSED = 'REGISTER_PASSED'
export const REGISTER_FAILED = 'REGISTER_FAILED'

export const REQUEST_GET_MEMOS = 'REQUEST_GET_MEMOS'
export const GET_MEMOS_PASSED = 'GET_MEMOS_PASSED'
export const GET_MEMOS_FAILED = 'GET_MEMOS_FAILED'

export const REQUEST_DELETE_MEMO = 'REQUEST_DELETE_MEMO'
export const DELETE_MEMO_PASSED = 'DELETE_MEMO_PASSED'
export const DELETE_MEMO_FAILED = 'DELETE_MEMO_FAILED'

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

export function logout() {
    return {
        type: LOGOUT,
        token: null
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

export function request_get_memos() {
    return {
        type: REQUEST_GET_MEMOS
    };
}

export function get_memos_passed(memos) {
    return {
        type: GET_MEMOS_PASSED,
        memos: memos
    };
}

export function get_memos_failed() {
    return {
        type: GET_MEMOS_FAILED
    };
}

export function request_delete_memo(memo_id) {
    return {
        type: REQUEST_DELETE_MEMO,
        memo_id: memo_id
    };
}

export function delete_memo_passed() {
    return {
        type: DELETE_MEMO_PASSED
    };
}

export function delete_memo_failed() {
    return {
        type: DELETE_MEMO_FAILED
    };
}
