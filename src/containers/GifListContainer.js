import axios from 'axios';
import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {
    state = { gifs: [] };

    onSearchSubmit = async query => {
        const URL = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`;
        const res = await axios.get(URL);
        this.setState({ gifs: res.data.data.slice(0, 3) });
    }

    render() {
        return (
            <div>
                <GifSearch onSearchSubmit={this.onSearchSubmit} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}

export default GifListContainer;