import React, {Component} from 'react';
import './Advanced_filter.css'

class AdvancedFilter extends Component {

    handleSubmit = (evt) => {
        evt.preventDefault();
    };

    render() {
        return (

            <div className='advanced_filter'>
                <form onSubmit={this.handleSubmit}>
                    <button className='advanced_filter_title '
                            onClick={this.heandleShow}

                    >Advanced filter V

                    </button>
                </form>
            </div>
        );
    }
}

export default AdvancedFilter;