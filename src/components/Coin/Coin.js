import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './coin.css'
class Coin extends Component {
    render() {
        return (
            <div className='coin_container'>
                <div className='coin_container_img'>

                </div>

                <div className='coin_container_title'>
                    <h2 className=''>Canadian Beaver</h2>
                    <p className='coin_container_text'>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.

                        In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right.
                        The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G ·
                        REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.

                        In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water.
                        At the top is a semicircle with the inscription "5 cents" between two maple leaves.
                        At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.
                    </p>
                  <table className='table'>
                      <tr>
                          <td>Issuing Country</td>
                          <td>CANADA</td>
                      </tr>
                      <tr>
                          <td>Composition</td>
                          <td>Nickel</td>
                      </tr>
                      <tr>
                          <td>Quality</td>
                          <td>BU</td>
                      </tr>
                      <tr>
                          <td>Denomination</td>
                          <td>5 cents</td>
                      </tr>
                      <tr>
                          <td>Year</td>
                          <td>1965</td>
                      </tr>
                      <tr>
                          <td>Weight</td>
                          <td>4.54 g</td>
                      </tr>
                      <tr>
                          <td>Prise</td>
                          <td>40$</td>
                      </tr>
                  </table>

                    <span className='link_coin'><Link  to="/show"> Back to the list</Link></span>
                </div>
            </div>
        );
    }
}

export default Coin;
