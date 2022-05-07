import React, {Component} from 'react';
import './Input_field.css';

class Inputfield extends Component {
    render() {
        return (
            <div className='input_field'>

                <div>
                    <span className='inputfield_title'>Input field</span>
                    <label>

                        <input className="inputfield_input"

                            // checked={this.state.isActive}
                            // onChange={this.handleCheckboxChange}
                        />

                    </label>
                </div>

                <div>
                    <button className='inputfield_button'>Search</button>
                </div>


            </div>
        );
    }
}

export default Inputfield;