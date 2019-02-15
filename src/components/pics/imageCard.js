import React from 'react';

export class ImageCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = { spans: 0 }
        this.imgRef = React.createRef();
    }


    componentDidMount() {
        this.imgRef.current.addEventListener('load', () => {
            const height = this.imgRef.current.clientHeight;
            const spans = Math.ceil(height / 10);  // if 150 here ithen it means grid-auto-rows: 150px; from css file (height of a row in grid)
            this.setState({ spans })
        })
    }

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    ref={this.imgRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}
