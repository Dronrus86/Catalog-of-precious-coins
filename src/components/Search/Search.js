import React, {Component} from 'react';
import './search.css'

class Search extends Component {
    render() {
        return (
            <div className='search'>
                <div>
                    <span className='inputfield_title'>Issuing country</span>
                    <label>
                        <select id="selectvalue">
                            <option>CANADA</option>
                            <option>UNITED STATES OF AMERICA</option>
                            <option>the Republic of Vietnam</option>
                            <option>British South Africa</option>
                            <option>the Belgian Congo</option>
                            <option>Australia</option>
                            <option>Bolivia</option>
                            <option>Botswana</option>
                            <option>British Virgin Islands</option>
                            <option>Ghana</option>
                            <option>Egypt</option>
                            <option>India</option>
                            <option>Iran</option>
                            <option>Iceland</option>
                            <option>Yemen</option>
                            <option>China</option>
                            <option>Costa Rica</option>
                            <option>Portugal</option>
                        </select>
                    </label>
                    <span className='inputfield_title'>Metal</span>
                    <label>
                        <select id="selectvalue">
                            <option>Silver</option>
                            <option>Nickel</option>
                            <option>Steel</option>
                            <option>Gold</option>
                        </select>
                    </label>
                    <span className='inputfield_title'>Quality of the coin</span>
                    <label>
                        <select id="selectvalue">
                            <option>BU</option>
                            <option>Proof</option>
                        </select>
                    </label>
                </div>

                <div>
                    <div>
                        <span className='inputfield_title'>Price</span>
                        <label>from
                            <input className="input_prise_from input"
                            />
                        </label>
                        <label>to
                            <input className="input_prise_to input"
                            />
                        </label>
                    </div>
                    <div>
                        <span className='inputfield_title'>Year of issue </span>
                        <label>from
                            <input className="input_year_from input"
                            />
                        </label>
                        <label>to
                            <input className="input_year_to  input"
                            />
                        </label>
                    </div>
                </div>

            </div>
        );
    }
}

export default Search;