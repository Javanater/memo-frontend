import './App.css';
import {useState} from "react";
import Header from "./components/Header";
import Memos from "./components/Memos";
import AddMemo from "./components/AddMemo";

function App() {
    const [memos, setMemos] = useState([
        {
            'id': 1,
            'text': 'Test Memo 1'
        },
        {
            'id': 2,
            'text': 'Test Memo 2'
        },
        {
            'id': 3,
            'text': 'Test Memo 3'
        },
    ])

    const [showCreateMemo, setShowCreateMemo] = useState(false)

    const deleteMemo = (id) => {
        setMemos(memos.filter((memo) => memo.id !== id))
    }

    const addMemo = (memo) => {
        const id = Math.floor(Math.random() * 9999999) + 1
        const newMemo = {id, ...memo}
        setMemos([...memos, newMemo])
    }

    return (
        <div className="container">
            <Header/>
            {showCreateMemo && <AddMemo onSubmit={addMemo}/>}
            <Memos memos={memos} onDelete={deleteMemo}/>
        </div>
    );
}

export default App;
