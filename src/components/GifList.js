import React from 'react';

class GifList extends React.Component {
    render() {
        const renderedGifs = this.props.gifs.map(g => {
            return (
                <li key={g.id}>
                    <img
                        style={{margin: '10px', width: '200px'}}
                        src={g.images.original.url}
                        alt={g.title}
                    />
                </li>
            );
        });
        return (
            <ul>{renderedGifs}</ul>
        );
    }
}

export default GifList;