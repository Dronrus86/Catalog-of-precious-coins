import React, {Component} from 'react';
import Header from "./header/Header";
import Inputfield from "./Input-field/Inputfield";
import Advanced_filter from "./Advancedfilter /Advanced_filter";
import Main from "./maim/Main";
import Search from "../search/Search";
// import {BrowserRouter, Route, Link, Routes} from "react-router-dom";

class HomepageMain extends Component {
    render() {
        return (

            <div>
                <Header/>
                <Inputfield/>
                <Advanced_filter/>
                <Main/>
                <Search/>
            </div>
            // <BrowserRouter>
            //     <div>
            //         <Header/>
            //         <Inputfield/>
            //         <Link className="nav-link" to="/contact">
            //             <Advanced_filter/>
            //         </Link>
            //
            //
            //         <Link className="nav-link" to="/portfolio">
            //             <Main/>
            //         </Link>
            //     </div>
            //
            //
            //     <Routes>
            //         <Route path="/home" element={<Advanced_filter/>}/>
            //         <Route path="/portfolio" element={<Main/>}/>
            //     </Routes>
            // </BrowserRouter>
        );
    }
}

export default HomepageMain;