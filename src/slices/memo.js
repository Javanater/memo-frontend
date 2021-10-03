import {getMemos} from '../services/memo'
import {REQUEST_GET_MEMOS, GET_MEMOS_PASSED, GET_MEMOS_FAILED} from '../actions/login'

export function getAllMemos(token) {
    return function fetchAllMemos(dispatch, getState) {
        dispatch({type: REQUEST_GET_MEMOS});
        getMemos(token).then(response => {
                if (!response.ok) {
                    console.log('response not ok');
                    dispatch({type: GET_MEMOS_FAILED});
                    return;
                }

                response.json().then(data => {
                    if (!data.memo_list) {
                        console.log('no memo_list');
                        console.log(data);
                        dispatch({type: GET_MEMOS_FAILED});
                    } else {
                        console.log('successfully retreived memos');
                        console.log(data.memo_list)
                        dispatch({type: GET_MEMOS_PASSED, memos: data.memo_list});
                    }
                });
            }, error => {dispatch({type: GET_MEMOS_FAILED});}
        );
    }
}