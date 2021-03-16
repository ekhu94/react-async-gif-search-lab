import React from 'react';

class GifSearch extends React.Component {
    state = { query: '' };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.query);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <label htmlFor="search">Gif Search</label>
                    <input 
                        id="search"
                        name="search"
                        type="text" 
                        value={this.state.query}
                        onChange={e => this.setState({ query: e.target.value })}
                    />
                </form>
            </div>
        );
    }
}

export default GifSearch;