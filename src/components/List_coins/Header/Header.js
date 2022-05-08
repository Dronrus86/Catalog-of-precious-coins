import React, {Component} from 'react';
import './header_list_coins.css';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <h1 className='header_title'>List of the coins</h1>

                <span className='link_home'><Link to="/">Homepage</Link> —  List of the coins </span>


            </div>
        );
    }
}

export default Header;
