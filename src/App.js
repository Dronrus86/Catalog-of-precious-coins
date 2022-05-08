import './App.css';
import Homepage_Main from "./components/Homepage/Homepage_Main";
import {Routes, Route} from 'react-router-dom';
import List_coints from "./components/List_coins/List_coints";
import Coin from "./components/Coin/Coin";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" exact element={<Homepage_Main/>}/>
                <Route path="/show" element={<List_coints/>}/>
                <Route path="/coin" element={<Coin/>}/>
            </Routes>
        </div>
    );
}

export default App;
