import React from 'react';
import './css/video-item.css';

export const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className="ui list video-item" onClick={() => onVideoSelect(video)}>
            <div className="item">
                <img alt="" className="ui image" src={video.snippet.thumbnails.medium.url} />
                <div className="content">
                    <div className="header"><h3>{video.snippet.title}</h3></div>
                    <div className="description item-descrption">{video.snippet.description.split(".", 1)}</div>
                </div>
            </div>
        </div>
    )
}