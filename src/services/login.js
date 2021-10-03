export function login(credentials) {
    return fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });
}

export async function create(credentials) {
    return fetch('http://localhost:3000/api/user/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: credentials
    }).then(data => data.json())
}