// import './App.css';
import {useState} from "react";
import Header from "./components/Header";
import Memos from "./components/Memos";
import AddMemo from "./components/AddMemo";
import Container from 'react-bootstrap/Container'

function App() {
    const [memos, setMemos] = useState([
        {
            'id': 1,
            'text': 'Test Memo 1',
            'date': new Date()
        },
        {
            'id': 2,
            'text': 'Test Memo 2',
            'date': new Date()
        },
        {
            'id': 3,
            'text': 'Test Memo 3',
            'date': new Date()
        },
    ])

    const [showCreateMemo, setShowCreateMemo] = useState(false)
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const deleteMemo = (id) => {
        setMemos(memos.filter((memo) => memo.id !== id))
    }

    const addMemo = (memo) => {
        const id = Math.floor(Math.random() * 9999999) + 1
        const newMemo = {id, ...memo}
        setMemos([...memos, newMemo])
    }

    return (
        <Container fluid="sm">
            <Header onCreate={handleShow}/>
            <AddMemo onSubmit={addMemo} show={show} handleClose={handleClose}/>
            <Memos memos={memos} onDelete={deleteMemo}/>
        </Container>
    );
}

export default App;
