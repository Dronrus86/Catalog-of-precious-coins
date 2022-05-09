import './App.css';
import HomepageMain from "./components/Homepage/HomepageMain";
import {Routes, Route} from 'react-router-dom';
import ListCoints from "./components/ListCoins/ListCoints";
import Coin from "./components/Coin/Coin";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" exact element={<HomepageMain/>}/>
                <Route path="/show/bullion" element={<ListCoints/>}/>
                <Route path="/show/exclusive" element={<ListCoints/>}/>
                <Route path="/show/commemorative" element={<ListCoints/>}/>
                <Route path="/coin/:id" element={<Coin/>}/>
            </Routes>
        </div>
    );
}

export default App;
