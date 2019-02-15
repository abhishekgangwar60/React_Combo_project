import React from 'react';

export const SelectedVideo = ({ selectedVideo }) => {
    if (selectedVideo) {
        return (
            <div>
                <div className="ui embed">
                    <iframe title={selectedVideo.snippet.title} src={`https:/youtube.com/embed/${selectedVideo.id.videoId}`} />
                </div>
                <div className="ui segment">
                    <div className="header"><h3>{selectedVideo.snippet.title}</h3></div>
                    <p className="description">{selectedVideo.snippet.description}</p>
                </div>
            </div>
        )
    } else {
        return <div></div>
    }
}