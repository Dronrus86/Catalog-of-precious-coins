import React, {Component} from 'react';
import Header from "./Header/Header";
import Inputfield from "../Homepage/Input-field/Inputfield";
import List_coins from "./List_coins/List_coins";
import Advanced_filter from "../Homepage/Advancedfilter /Advanced_filter";

class ListCoints extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Inputfield/>
                <Advanced_filter/>
                <List_coins/>
            </div>
        );
    }
}

export default ListCoints;