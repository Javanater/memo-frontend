export function getMemos(userToken) {
    return fetch('http://localhost:3000/api/memo', {
        headers: {
            'Authorization': 'Bearer ' + userToken
        }
    });
}

export function newMemo(memo, userToken) {
    return fetch('http://localhost:3000/api/memo', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + userToken,
            'Content-Type': 'application/json'
        },
        body: memo
    }).then(data => data.json());
}

export function deleteMemo(memo_id, user_id, create_timestamp, userToken) {
    const url = 'http://localhost:3000/api/memo/' + memo_id;
    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + userToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user_id, create_timestamp})
    });
}