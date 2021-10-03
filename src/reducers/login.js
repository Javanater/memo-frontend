import {
    REQUEST_LOGIN, LOGIN_PASSED, LOGIN_FAILED,
    LOGOUT,
    REQUEST_REGISTER, REGISTER_PASSED, REGISTER_FAILED
} from '../actions/user'

import {
    REQUEST_GET_MEMOS, GET_MEMOS_PASSED, GET_MEMOS_FAILED,
    REQUEST_DELETE_MEMO, DELETE_MEMO_PASSED, DELETE_MEMO_FAILED,
    REQUEST_CREATE_MEMO, CREATE_MEMO_PASSED, CREATE_MEMO_FAILED,
    SHOW_CREATE_MEMO, HIDE_CREATE_MEMO
} from '../actions/memos'

const initialLoginState = {
    token: null,
    get_memos_pending: false,
    get_memos_failed: false,
    memos: null,
    delete_memo_pending: false,
    delete_memo_failed: false,
    create_memo_pending: false,
    create_memo_failed: false,
    show_create_memo: false,
}

const initialState = {
    login_pending: false,
    login_failed: false,
    register_pending: false,
    register_failed: false,
    ...initialLoginState
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
                ...initialLoginState
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

        case REQUEST_DELETE_MEMO:
            return {
                ...state,
                delete_memo_pending: true,
                delete_memo_failed: false,
                memo_id: action.memo_id
            };

        case DELETE_MEMO_PASSED:
            return {
                ...state,
                delete_memo_pending: false,
                delete_memo_failed: false
            };

        case DELETE_MEMO_FAILED:
            return {
                ...state,
                delete_memo_pending: false,
                delete_memo_failed: true
            };

        case REQUEST_CREATE_MEMO:
            return {
                ...state,
                create_memo_pending: true,
                create_memo_failed: false,
                memo_id: action.memo_id
            };

        case CREATE_MEMO_PASSED:
            return {
                ...state,
                create_memo_pending: false,
                create_memo_failed: false
            };

        case CREATE_MEMO_FAILED:
            return {
                ...state,
                create_memo_pending: false,
                create_memo_failed: true
            };

        case SHOW_CREATE_MEMO:
            return {
                ...state,
                show_create_memo: true
            };

        case HIDE_CREATE_MEMO:
            return {
                ...state,
                show_create_memo: false
            };

        default:
            return state;
    }
}