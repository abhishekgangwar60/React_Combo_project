import React from 'react';


export class SearchBar extends React.Component {

    state = { text: '' };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.text)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="fields">
                    <div className="fifteen wide field">
                        <input
                            type="text"
                            name="search-bar"
                            value={this.state.text}
                            onChange={(event) => this.setState({ text: event.target.value })}
                        />
                    </div>
                    <div className="one wide field">
                        <button className="ui button" type="submit">Search</button>
                    </div>
                </div>
            </form>
        );
    }
}
