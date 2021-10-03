import {getMemos, deleteMemo} from '../services/memo'
import {
    REQUEST_GET_MEMOS, GET_MEMOS_PASSED, GET_MEMOS_FAILED,
    REQUEST_DELETE_MEMO, DELETE_MEMO_PASSED, DELETE_MEMO_FAILED
} from '../actions/login'

export function getAllMemos(token) {
    return function fetchAllMemos(dispatch, getState) {
        dispatch({type: REQUEST_GET_MEMOS});
        getMemos(token).then(response => {
                if (!response.ok) {
                    dispatch({type: GET_MEMOS_FAILED});
                    return;
                }

                response.json().then(data => {
                    if (!data.memo_list) {
                        dispatch({type: GET_MEMOS_FAILED});
                    } else {
                        dispatch({type: GET_MEMOS_PASSED, memos: data.memo_list});
                    }
                });
            }, error => {dispatch({type: GET_MEMOS_FAILED});}
        );
    }
}

export function initiateDeleteMemo(memo_id) {
    return function fetchAllMemos(dispatch, getState) {
        dispatch({type: REQUEST_DELETE_MEMO});
        deleteMemo(memo_id, getState().token).then(response => {
                if (!response.ok) {
                    dispatch({type: DELETE_MEMO_FAILED});
                    return;
                }

                dispatch({type: DELETE_MEMO_PASSED});
                dispatch({type: REQUEST_GET_MEMOS});
            }, error => {dispatch({type: DELETE_MEMO_FAILED})}
        );
    }
}