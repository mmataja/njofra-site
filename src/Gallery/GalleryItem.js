import React from 'react';
import './GalleryItem.css';

const GalleryItem = (props) => {
    return (
        <div className="gallery-img-container d-flex justify-content-center p-3">
            <img className="rounded img-fit" src={props.item.link} alt="slika"></img>
        </div>
    );
};

export default GalleryItem;
