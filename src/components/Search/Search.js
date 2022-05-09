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
                            <option value='CANADA'>CANADA</option>
                            <option value='UNITED STATES OF AMERICA'>UNITED STATES OF AMERICA</option>
                            <option value='the Republic of Vietnam'>the Republic of Vietnam</option>
                            <option value='British South Africa'>British South Africa</option>
                            <option value='the Belgian Congo'>the Belgian Congo</option>
                            <option value='Australia'>Australia</option>
                            <option value='Bolivia'>Bolivia</option>
                            <option value='Botswana'>Botswana</option>
                            <option value='British Virgin Islands'>British Virgin Islands</option>
                            <option value='Ghana'>Ghana</option>
                            <option value='Egypt'>Egypt</option>
                            <option value='India'>India</option>
                            <option value='Iran'>Iran</option>
                            <option value='Iceland'>Iceland</option>
                            <option value='Yemen'>Yemen</option>
                            <option value='China'>China</option>
                            <option value='Costa Rica'>Costa Rica</option>
                            <option value='Portugal'>Portugal</option>
                        </select>
                    </label>
                    <span className='inputfield_title'>Metal</span>
                    <label>
                        <select id="selectvalue">
                            <option value='Silver'>Silver</option>
                            <option value='Nickel'>Nickel</option>
                            <option value='Steel'>Steel</option>
                            <option value='Cold'>Gold</option>
                        </select>
                    </label>
                    <span className='inputfield_title'>Quality of the coin</span>
                    <label>
                        <select id="selectvalue">
                            <option value='BU'>BU</option>
                            <option value='Proof'>Proof</option>
                        </select>
                    </label>
                </div>

                <div>
                    <div>
                        <span className='inputfield_title'>Price</span>
                        <label>from
                            <input className="input_prise_from input"
                                   type='number'
                            />
                        </label>
                        <label>to
                            <input className="input_prise_to input"
                                   type='number'
                            />
                        </label>
                    </div>
                    <div>
                        <span className='inputfield_title'>Year of issue </span>
                        <label>from
                            <input className="input_year_from input"
                                   type='number'
                            />
                        </label>
                        <label>to
                            <input className="input_year_to  input"
                                   type='number'
                            />
                        </label>
                    </div>
                </div>

            </div>
        );
    }
}

export default Search;