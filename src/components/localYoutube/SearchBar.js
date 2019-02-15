import React from 'react';
import './css/search-bar.css';

export class SearchBar extends React.Component {

    state = {
        text: ''
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        this.props.onSearch(this.state.text);
    }

    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    {/* <div className="ui segment"> */}
                    <div className={`ui fluid large icon input  ${this.props.loading ? 'loading' : ''}`}>
                        <input
                            type="text"
                            name="search-bar"
                            value={this.state.text}
                            onChange={(event) => this.setState({ text: event.target.value })}
                        />
                        <i className="search icon"></i>
                    </div>
                    {/* </div> */}
                </form>
            </div>
        );
    }
}