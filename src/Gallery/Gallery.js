import React from 'react';
import './Gallery.css';
import GalleryItem from './GalleryItem';

const gallery = () => {
    const testArray=[1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className="d-flex flex-column align-items-center mt-5 container-fluid">
            <div className="mb-2">
                <h1 className="display-1 p-3">Galerija</h1>
            </div>
            <div className="d-flex justify-content-around flex-wrap">
                {testArray.map((index => (
                    <GalleryItem key={index} />
                )))}
            </div>
        </div>
    );
};

export default gallery;