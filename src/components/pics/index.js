import React from 'react';
import { SearchBar } from './searchBar';

import { fetchImages } from '../../services/pics/images';
import { ImageList } from './imgList';
import { Loader } from './loader';

export class PicsApp extends React.Component {

    state = {
        loading: false,
        searchText: '',
        images: []
    }

    onDataSubmit = async (text) => {
        this.setState({ loading: true });
        const response = await fetchImages(text);
        this.setState({ images: response.data.results, searchText: text, loading: false })
    }

    showLoader = () => {
        return (
            <Loader />
        );
    }

    showData = () => {
        return (
            <div>
                <div style={{ textAlign: 'center' }}> <h3>Found {this.state.images.length} {this.state.searchText} Images</h3> </div>
                <ImageList images={this.state.images} style={{ paddingTop: '3%' }} />
            </div>
        );
    }

    render() {
        let view;
        if (this.state.loading) {
            view = this.showLoader();
        } else {
            view = this.showData();
        }
        return (
            <div className="ui container" style={{ paddingTop: '3%' }}>
                <SearchBar onSubmit={this.onDataSubmit} />
                {view}
            </div>
        );
    }
}