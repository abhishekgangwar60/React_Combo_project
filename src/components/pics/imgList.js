import React from 'react';
import './../../styles/imageList.css';
import { ImageCard } from './imageCard'

export class ImageList extends React.Component {

    render() {
        const image = this.props.images.map((image) => <ImageCard key={image.id} image={image} />);
        return <div className="image-list">{image}</div>
    }
}
