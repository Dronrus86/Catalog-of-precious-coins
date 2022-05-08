import React, {Component} from 'react';
import './list_coins.css';

class ListCoins extends Component {
    render() {
        return (
            <div className='wrapper_coins'>

                    <div className='list_coin'>
                        <div>
                            <image>
                                <img className="img_coin" src="img_coin/coint_main-2.svg" alt="img_coin"/>
                            </image>
                        </div>
                        <div className='coin_title'>
                            <h4 className='listCoins_title'>Canadian Beaver</h4>
                            <p className='listCoins_description_title'> "Canadian beaver". Unique coin with the image of a
                                beaver.
                                Face value - 5 cents. Created under Elizabeth II.</p>
                        </div>


                    </div>





                <div className='list_coin'>
                    <div>
                        <image>
                            <img className="img_coin" src="img_coin/coint_main-2.svg" alt="img_coin"/>
                        </image>
                    </div>
                    <div className='coin_title'>
                        <h4 className='listCoins_title'>Canadian Beaver</h4>
                        <p className='listCoins_description_title'> "Canadian beaver". Unique coin with the image of a
                            beaver.
                            Face value - 5 cents. Created under Elizabeth II.</p>
                    </div>


                </div>




                <div className='list_coin'>
                    <div>
                        <image>
                            <img className="img_coin" src="img_coin/coint_main-2.svg" alt="img_coin"/>
                        </image>
                    </div>
                    <div className='coin_title'>
                        <h4 className='listCoins_title'>Canadian Beaver</h4>
                        <p className='listCoins_description_title'> "Canadian beaver". Unique coin with the image of a
                            beaver.
                            Face value - 5 cents. Created under Elizabeth II.</p>
                    </div>


                </div>

                <div className='list_coin'>
                    <div>
                        <image>
                            <img className="img_coin" src="img_coin/coint_main-2.svg" alt="img_coin"/>
                        </image>
                    </div>
                    <div className='coin_title'>
                        <h4 className='listCoins_title'>Canadian Beaver</h4>
                        <p className='listCoins_description_title'> "Canadian beaver". Unique coin with the image of a
                            beaver.
                            Face value - 5 cents. Created under Elizabeth II.</p>
                    </div>


                </div>

            </div>
        );
    }
}

export default ListCoins;