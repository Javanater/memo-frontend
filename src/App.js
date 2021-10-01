import {useState, useEffect} from "react";
import Header from "./components/Header";
import Memos from "./components/Memos";
import AddMemo from "./components/AddMemo";
import Container from 'react-bootstrap/Container';
import Login from "./components/Login";
import useToken from "./hooks/useToken";
import {getMemos, newMemo, deleteMemo} from "./services/memo";

function App() {
    const [memos, setMemos] = useState([]);
    const [show, setShow] = useState(false);
    const {token, setToken} = useToken();

    useEffect(() => {
        let mounted = true;
        getMemos(token).then(items => {
            console.log(items?.memo_list);

            if(mounted) {
                setMemos(items?.memo_list);
            }
        });
        return () => mounted = false;
    }, [token]);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const addMemo = (memo) => {
        const memoString = JSON.stringify(memo);
        newMemo(memoString, token).then(() => {
            getMemos(token).then(items => {
                console.log(items?.memo_list);
                setMemos(items?.memo_list);
            });
        });
    }

    const handleDeleteMemo = (memo) => {
        const memoString = JSON.stringify(memo);
        console.log(memoString);
        deleteMemo(memo, token).then(() => {
            getMemos(token).then(items => {
                console.log(items?.memo_list);
                setMemos(items?.memo_list);
            });
        });
    }

    const logout = () => {
        setToken(null);
    }

    if (!token) {
        return <Container fluid="sm"><Login setToken={setToken}/></Container>
    }

    return (
        <Container fluid="sm">
            <Header onCreate={handleShow} onLogout={logout}/>
            <AddMemo onSubmit={addMemo} show={show} handleClose={handleClose}/>
            <Memos memos={memos} onDelete={handleDeleteMemo}/>
        </Container>
    );
}

export default App;
