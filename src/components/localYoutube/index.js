import React from 'react';

import { SearchBar } from './SearchBar';
import { fetchVideosFromYoutube } from './services/youtube';
import { VideoList } from './videoList';
import { SelectedVideo } from './selectedVideo';

export class LocalYoutube extends React.Component {


    state = {
        loading: false,
        videos: [],
        selectedVideo: null
    }

    onTextSearch = async (text) => {
        this.setState({ loading: true });
        const response = await fetchVideosFromYoutube(text);
        console.log(response.data.items);
        this.setState({ videos: response.data.items, loading: false });
    }


    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar loading={this.state.loading} onSearch={this.onTextSearch} />
                <SelectedVideo selectedVideo={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        );
    }
}