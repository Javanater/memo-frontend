import './App.css';
import Header from "./components/Header";
import Memo from "./components/Memo";

function App() {
  return (
    <div className="container">
        <Header/>
        <Memo text='Test Memo1'/>
        <Memo text='Test Memo2'/>
    </div>
  );
}

export default App;
