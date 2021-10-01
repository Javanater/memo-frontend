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
        const {dispatch, token} = this.props;

        if (!token)
            return <Login handleLogin={credentials => {dispatch(initiateLogin(credentials))}}/>;

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
        token: state.token
    }
}

export default connect(select)(App);
