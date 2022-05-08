import React, {Component} from 'react';
import Header from "./Header/Header";
import Inputfield from "./Input-field/Inputfield";
import Advanced_filter from "./Advancedfilter /Advanced_filter";
import Main from "./Main/Main";

// import Search from "../Search/Search";


class HomepageMain extends Component {
    render() {
        return (

            <div>
                <Header/>
                <Inputfield/>
                <Advanced_filter/>
                <Main/>
                {/*<Search/>*/}
            </div>

        );
    }
}

export default HomepageMain;