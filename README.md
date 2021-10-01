#React-Bootstrap-Redux Instructional Reference
This project shall be referenced while teaching the React-Bootstrap-Redux material.
It will serve a user interface for the memo-rest-api reference project. 

## Set up
### Install react-bootstrap
    npm install react-bootstrap@next bootstrap

### Install redux toolkit
    npm install @reduxjs/toolkit

### Install redux react bindings
    npm install react-redux

### Install redux developer tools
    npm install redux-devtools

## Redux/Flux Architecture
### App states
#### Logged out
    {
        token: null,
        registering: false,
        memos: []
    }

#### Registering
    {
        token: null,
        registering: true,
        memos: []
    }

#### Logged in
    {
        token: 'hjfdklsahjkfld...',
        registering: false,
        memos: [
            {
                id: '7843921...',
                content: 'Memo 1',
                tags: ['Tag1', Tag2'],
                user_id: '784932...',
                creat_timestamp: '2021-10-01...'
            },
            {
                id: '5843921...',
                content: 'Memo 2',
                tags: ['Tag1', Tag3'],
                user_id: '784935...',
                creat_timestamp: '2021-10-01...'
            }
        ]
    }

### App actions
    {type: 'login', credentials: {username: 'user1', password: 'password'}}
    {type: 'register', credentials: {username: 'user1', password: 'password'}}
    {type: 'logout', param: null}
    {type: 'get_memos', param: null}
    {type: 'create_memo', memo_data: {content: 'Memo 3', tags: ['Tag1', 'Tag4']}}
    {type: 'delete_memo', id: '7548935...'}
    {type: 'edit_memo', memo_data: {id: '7548935...', content: 'Memo 3 (edited)', tags: ['Tag3', 'Tag4']}}