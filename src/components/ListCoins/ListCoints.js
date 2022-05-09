import React, {Component} from 'react';
import Header from "./Header/Header";
import Inputfield from "../Homepage/Input-field/Inputfield";
import ListCoins from "./ListCoins/ListCoins";
import AdvancedFilter from "../Homepage/Advancedfilter /AdvancedFilter";

class ListCoints extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Inputfield/>
                <AdvancedFilter/>
                <ListCoins/>
            </div>
        );
    }
}

export default ListCoints;