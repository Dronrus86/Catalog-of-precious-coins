import React, {Component} from 'react';
import './Advanced_filter.css'
import Search from "../../Search/Search";

class AdvancedFilter extends Component {

    state = {
        textButton: '∨',
        showFilter: false
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
    };

    heandleShow = () => {
        this.setState({textButton: this.state.textButton === '∧' ? '∨' : '∧'})
        this.setState({showFilter: this.state.showFilter === false})
    }

    render() {
        const {textButton, showFilter} = this.state
        return (
            <div className='advanced_filter'>
                <form onSubmit={this.handleSubmit}>
                    <button className='advanced_filter_title '
                            type='button' onClick={this.heandleShow}>
                        Advanced filter <em/>
                        {textButton}
                    </button>
                </form>
                {showFilter ? <Search/> : null}

            </div>
        );
    }
}

export default AdvancedFilter;