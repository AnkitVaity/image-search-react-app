import React from 'react';
// Importing css file for displaying images in grid
import './ImageList.css';
// Importing js to align images according to the height of each image
import ImageCard from './ImageCard';


const ImageList = (props) => {
    // console.log(props.images);
    // const images = props.images.map((image) => {
    //     return <img alt={image.description} key={image.id} src={image.urls.regular} />
    // });
    //-----------------------------------------------------------------------------------------------------------------------
    // or
    // const images = props.images.map(({description, id, urls}) => {
    //     return <img alt={description} key={id} src={urls.regular} />
    // });
    //-----------------------------------------------------------------------------------------------------------------------
    
    // Give below is the code using ImageCard.js
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
    });


    return (<div className='image-list'>{images}</div>);
};

export default ImageList;