import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // Everytime an image is successfully loaded in DOM it emmits the 'load' event
        // And now we can access the height of image 
        // setSpans is a callback
        this.imageRef.current.addEventListener('load', this.setSpans)

        // console.log(this.imageRef);
    }

    setSpans = () => {
        // console.log(this.imageRef.current.clientHeight);
        const height = this.imageRef.current.clientHeight;

        // To get the span we will divide image height with row height which is 10px defined in css file(grid-auto-rows: 10px;)
        // 1 is added to get proper rounding of as we will do Math.ceil
        const spans = Math.ceil(height / 10 + 1);

        // Now lets set spans on our state
        this.setState({ spans: spans });
    }

    render() {
        const { description, urls} = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular}/>
            </div>
        );
    }
}

export default ImageCard;