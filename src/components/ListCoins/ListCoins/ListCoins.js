import React, {Component} from 'react';
import './listCoins.css';
import {Link} from "react-router-dom";

class ListCoins extends Component {
    render() {
        return (
            <div>
                <div>
                    <ul className='wrapper_coins'>
                        <li>
                            <div className='list_coin'>
                                <div>
                                    <image>
                                        <img className="img_coin" src="../img_coin/coin_main-2.svg" alt="img_coin"/>
                                    </image>
                                </div>
                                <div className='coin_title'>
                                    <h4 className='listCoins_title'><Link to="/coin/:id">Canadian Beaver</Link></h4>
                                    <p className='listCoins_description_title'> "Canadian beaver". Unique coin with the
                                        image of a
                                        beaver.
                                        Face value - 5 cents. Created under Elizabeth II.</p>
                                </div>
                            </div>

                        </li>
                        <li>


                            <div className='list_coin'>
                                <div>
                                    <image>
                                        <img className="img_coin" src="../img_coin/coin_main-2.svg" alt="img_coin"/>
                                    </image>
                                </div>
                                <div className='coin_title'>
                                    <h4 className='listCoins_title'>Canadian Beaver</h4>
                                    <p className='listCoins_description_title'> "Canadian beaver". Unique coin with the
                                        image of a
                                        beaver.
                                        Face value - 5 cents. Created under Elizabeth II.</p>
                                </div>
                            </div>

                        </li>
                        <li>


                            <div className='list_coin'>
                                <div>
                                    <image>
                                        <img className="img_coin" src="../img_coin/coin_main-2.svg" alt="img_coin"/>
                                    </image>
                                </div>
                                <div className='coin_title'>
                                    <h4 className='listCoins_title'>Canadian Beaver</h4>
                                    <p className='listCoins_description_title'> "Canadian beaver". Unique coin with the
                                        image of a
                                        beaver.
                                        Face value - 5 cents. Created under Elizabeth II.</p>
                                </div>
                            </div>
                        </li>
                        <li>

                            <div className='list_coin'>
                                <div>
                                    <image>
                                        <img className="img_coin" src="../img_coin/coin_main-2.svg" alt="img_coin"/>
                                    </image>
                                </div>
                                <div className='coin_title'>
                                    <h4 className='listCoins_title'>Canadian Beaver</h4>
                                    <p className='listCoins_description_title'> "Canadian beaver". Unique coin with the
                                        image of a
                                        beaver.
                                        Face value - 5 cents. Created under Elizabeth II.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='coin_show_count'>
                    <button className='show_count'>4</button>
                    <button className='show_count'>6</button>
                    <button className='show_count'>8</button>
                    <button className='show_count'>10</button>
                    <button className='show_count'>12</button>
                </div>

            </div>
        );
    }
}

export default ListCoins;