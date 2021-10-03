import {getMemos, deleteMemo, newMemo} from '../services/memo'
import {
    REQUEST_GET_MEMOS, GET_MEMOS_PASSED, GET_MEMOS_FAILED,
    REQUEST_DELETE_MEMO, DELETE_MEMO_PASSED, DELETE_MEMO_FAILED,
    REQUEST_CREATE_MEMO, CREATE_MEMO_PASSED, CREATE_MEMO_FAILED
} from '../actions/login'

export function getAllMemos() {
    console.log('requestAllMemos')
    return function fetchAllMemos(dispatch, getState) {
        dispatch({type: REQUEST_GET_MEMOS});
        getMemos(getState().token).then(response => {
                if (!response.ok) {
                    dispatch({type: GET_MEMOS_FAILED});
                    return;
                }

                response.json().then(data => {
                    if (!data.memo_list) {
                        dispatch({type: GET_MEMOS_FAILED});
                    } else {
                        console.log('memos reveived')
                        dispatch({type: GET_MEMOS_PASSED, memos: data.memo_list});
                    }
                });
            }, error => {dispatch({type: GET_MEMOS_FAILED});}
        );
    }
}

export function initiateDeleteMemo(memo_id, user_id, create_timestamp) {
    return function asyncDeleteMemo(dispatch, getState) {
        dispatch({type: REQUEST_DELETE_MEMO});
        deleteMemo(memo_id, user_id, create_timestamp, getState().token).then(response => {
                if (!response.ok) {
                    dispatch({type: DELETE_MEMO_FAILED});
                    return;
                }

                dispatch({type: DELETE_MEMO_PASSED});
                dispatch(getAllMemos());
            }, error => {dispatch({type: DELETE_MEMO_FAILED})}
        );
    }
}

export function initiateCreateMemo(memo) {
    console.log('initiateCreateMemo')
    return function asyncNewMemo(dispatch, getState) {
        dispatch({type: REQUEST_CREATE_MEMO});
        newMemo(memo, getState().token).then(response => {
                if (!response.ok) {
                    dispatch({type: CREATE_MEMO_FAILED});
                    return;
                }

                dispatch({type: CREATE_MEMO_PASSED});
                dispatch(getAllMemos());
            }, error => {dispatch({type: CREATE_MEMO_FAILED})}
        );
    }
}