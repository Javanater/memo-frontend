import {getMemos, deleteMemo, newMemo} from '../services/memo'

export const REQUEST_GET_MEMOS = 'REQUEST_GET_MEMOS'
export const GET_MEMOS_PASSED = 'GET_MEMOS_PASSED'
export const GET_MEMOS_FAILED = 'GET_MEMOS_FAILED'

export const REQUEST_DELETE_MEMO = 'REQUEST_DELETE_MEMO'
export const DELETE_MEMO_PASSED = 'DELETE_MEMO_PASSED'
export const DELETE_MEMO_FAILED = 'DELETE_MEMO_FAILED'

export const REQUEST_CREATE_MEMO = 'REQUEST_CREATE_MEMO'
export const CREATE_MEMO_PASSED = 'CREATE_MEMO_PASSED'
export const CREATE_MEMO_FAILED = 'CREATE_MEMO_FAILED'

export const SHOW_CREATE_MEMO = 'SHOW_CREATE_MEMO'
export const HIDE_CREATE_MEMO = 'HIDE_CREATE_MEMO'

function request_get_memos() {
    return {
        type: REQUEST_GET_MEMOS
    };
}

function get_memos_passed(memos) {
    return {
        type: GET_MEMOS_PASSED,
        memos: memos
    };
}

function get_memos_failed() {
    return {
        type: GET_MEMOS_FAILED
    };
}

export function getAllMemos() {
    return (dispatch, getState) => {
        dispatch(request_get_memos())
        getMemos(getState().token).then(response => {
                if (!response.ok) {
                    dispatch(get_memos_failed())
                    return
                }

                response.json().then(data => {
                    if (!data.memo_list) {
                        dispatch(get_memos_failed())
                    } else {
                        dispatch(get_memos_passed(data.memo_list))
                    }
                });
            }, () => {dispatch(get_memos_failed())}
        );
    }
}

function request_delete_memo(memo_id) {
    return {
        type: REQUEST_DELETE_MEMO,
        memo_id: memo_id
    };
}

function delete_memo_passed() {
    return {
        type: DELETE_MEMO_PASSED
    };
}

function delete_memo_failed() {
    return {
        type: DELETE_MEMO_FAILED
    };
}

export function initiateDeleteMemo(memo_id, user_id, create_timestamp) {
    return (dispatch, getState) => {
        dispatch(request_delete_memo(memo_id))
        deleteMemo(memo_id, user_id, create_timestamp, getState().token).then(response => {
                if (!response.ok) {
                    dispatch(delete_memo_failed())
                    return
                }

                dispatch(delete_memo_passed())
                dispatch(getAllMemos())
            }, () => {dispatch(delete_memo_failed())}
        );
    }
}

function request_create_memo(memo_id) {
    return {
        type: REQUEST_CREATE_MEMO,
        memo_id: memo_id
    };
}

function create_memo_passed() {
    return {
        type: CREATE_MEMO_PASSED
    };
}

function create_memo_failed() {
    return {
        type: CREATE_MEMO_FAILED
    };
}

export function initiateCreateMemo(memo) {
    return (dispatch, getState) => {
        dispatch(request_create_memo(memo.id));
        newMemo(memo, getState().token).then(response => {
                if (!response.ok) {
                    dispatch(create_memo_failed());
                    return;
                }

                dispatch(create_memo_passed());
                dispatch(getAllMemos());
            }, () => {dispatch(create_memo_failed())}
        );
    }
}

export function show_create_memo() {
    return {
        type: SHOW_CREATE_MEMO
    };
}

export function hide_create_memo() {
    return {
        type: HIDE_CREATE_MEMO
    };
}