import React from 'react';
import { VideoItem } from './videoItem';
import './css/video-list.css'

export const VideoList = ({ videos, onVideoSelect }) => {
    const videoContent = videos.map((video) => {
        return <div><VideoItem onVideoSelect={onVideoSelect} key={video.id} video={video} /></div>
    })
    return <div className="video-list">{videoContent}</div>
}