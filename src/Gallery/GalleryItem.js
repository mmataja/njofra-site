import React from 'react';
import './GalleryItem.css';

const GalleryItem = (props) => {
    return (
        <div className="gallery-img-container d-flex justify-content-center m-3 cursor-pointer">
            <img className="rounded img-fit" src={props.item.link} alt="slika"></img>
            <div className="text-over-img-container">
                <div className="text-description">{props.item.description ? props.item.description : "Opis nedostupan"}</div>
            </div>
        </div>
    );
};

export default GalleryItem;
