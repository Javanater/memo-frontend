import {useState, useEffect, Component} from "react";
import { connect } from 'react-redux'
import Header from "./components/Header";
import Memos from "./components/Memos";
import AddMemo from "./components/AddMemo";
import Container from 'react-bootstrap/Container';
import Login from "./components/Login";
import useToken from "./hooks/useToken";
import {getMemos, newMemo, deleteMemo} from "./services/memo";
import {request_login} from './actions/login';
import {initiateLogin, initiateRegister} from './slices/login';
import {getAllMemos, initiateDeleteMemo} from './slices/memo';
import {LOGOUT} from './actions/login';

class App extends Component {
    render() {
        const {
            dispatch,
            login_pending,
            login_failed,
            register_pending,
            register_failed,
            token,
            get_memos_pending,
            get_memos_failed,
            memos,
            delete_memo_failed
        } = this.props;

        if (!token)
            return <Login
                loginPending={login_pending}
                loginFailed={login_failed}
                handleLogin={credentials => dispatch(initiateLogin(credentials))}
                registerPending={register_pending}
                registerFailed={register_failed}
                handleRegister={credentials => dispatch(initiateRegister(credentials))}
            />;

        return (
            <Container fluid="sm">
                <Header
                    handleLogout={() => dispatch({type: LOGOUT})}
                />
                <AddMemo />
                <Memos
                    memos={memos}
                    getMemosPending={get_memos_pending}
                    getMemosFailed={get_memos_failed}
                    handleGetMemos={() => dispatch(getAllMemos())}
                    handleDeleteMemo={(memo_id, user_id, create_timestamp) => dispatch(initiateDeleteMemo(memo_id, user_id, create_timestamp))}
                    deleteMemoFailed={delete_memo_failed}
                />
            </Container>
        );
    }
}

function select(state) {
    return {
        login_pending: state.login_pending,
        login_failed: state.login_failed,
        register_pending: state.register_pending,
        register_failed: state.register_failed,
        token: state.token,
        get_memos_pending: state.get_memos_pending,
        get_memos_failed: state.get_memos_failed,
        memos: state.memos,
        delete_memo_failed: state.delete_memo_failed
    }
}

export default connect(select)(App);
