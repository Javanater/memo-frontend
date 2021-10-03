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
import {initiateLogin} from './slices/login';

class App extends Component {
    render() {
        const {dispatch, login_pending, login_failed, token} = this.props;

        if (!token)
            return <Login
                loginPending={login_pending}
                loginFailed={login_failed}
                handleLogin={credentials => {dispatch(initiateLogin(credentials))}}
            />;

        return (
            <Container fluid="sm">
                <Header/>
                <AddMemo />
                <Memos />
            </Container>
        );
    }
}

function select(state) {
    return {
        login_pending: state.login_pending,
        login_failed: state.login_failed,
        token: state.token
    }
}

export default connect(select)(App);
