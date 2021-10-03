import {getMemos, deleteMemo} from '../services/memo'
import {
    REQUEST_GET_MEMOS, GET_MEMOS_PASSED, GET_MEMOS_FAILED,
    REQUEST_DELETE_MEMO, DELETE_MEMO_PASSED, DELETE_MEMO_FAILED
} from '../actions/login'

export function getAllMemos() {
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
                        dispatch({type: GET_MEMOS_PASSED, memos: data.memo_list});
                    }
                });
            }, error => {dispatch({type: GET_MEMOS_FAILED});}
        );
    }
}

export function initiateDeleteMemo(memo_id, user_id, create_timestamp) {
    return function fetchAllMemos(dispatch, getState) {
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