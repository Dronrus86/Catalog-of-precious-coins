import React, {Component} from 'react';
import './main.css'
import {Link} from "react-router-dom";
class Main extends Component {
    render() {
        return (

            <div className='main_container'>
                <div className='main_container_coin'>
                    <h2 className='main_container_title'>Bullion coins</h2>
                    <Link to="/show/bullion">
                        <p className='main_container_show'>Show all ></p>
                    </Link>
                    <image>
                        <img className="list_img" src="img_coin/coin_main-1.svg" alt="img"/>
                    </image>
                </div>
                <div className='main_container_coin'>
                    <h2 className='main_container_title'>Exclusive coins</h2>

                    <Link to="/show/exclusive">
                        <p className='main_container_show'>Show all ></p>
                    </Link>

                    <image>
                        <img className="list_img" src="img_coin/coin_main-2.svg" alt="img"/>
                    </image>

                </div>
                <div className='main_container_coin'>
                    <h2 className='main_container_title'>Commemorative coins</h2>
                    <Link to="/show/commemorative">
                        <p className='main_container_show'>Show all ></p>
                    </Link>
                    <image>
                        <img className="list_img" src="img_coin/coin_main-3.svg" alt="img"/>
                    </image>
                </div>


            </div>


        );
    }
}

export default Main;