export function getMemos(userToken) {
    return fetch('http://localhost:3000/api/memo', {
        headers: {
            'Authorization': 'Bearer ' + userToken
        }
    }).then(data => data.json());
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