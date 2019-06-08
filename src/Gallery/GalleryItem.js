import React from 'react';
import './GalleryItem.css';

const galleryItem = (props) => {
    console.log("PROPSSSS:", props);
    return (
        <div className="gallery-img-container d-flex justify-content-center">
            <img className="img-fluid rounded" src={props.item.link} alt="slika"></img>
        </div>
    );
};

export default galleryItem;
