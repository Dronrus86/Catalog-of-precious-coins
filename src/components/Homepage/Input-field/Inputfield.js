import React, {Component} from 'react';
import './InputField.css';

class Inputfield extends Component {
    render() {
        return (
            <div className='input_field'>

                <div>
                    <span className='inputfield_title'>Input field</span>
                    <label>

                        <input className="inputfield_input"
                               type='text'


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