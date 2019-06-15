import React from 'react';

import './ImageModal.css';

const ImageModal = (props) => {
    console.log(props)
    return (
        <div className="modal-container">
            <span className="close-x cursor-pointer" onClick={() => props.closeModal()}>&times;</span>
            <div className="d-flex img-container flex-column justify-content-center align-items-center">
                <div className="modal-text mb-3">
                    {props.imgDesc}
                </div>
                <img className="modal-img" src={props.imgSrc} alt="slika" />
            </div>
        </div>
    )
};

export default ImageModal;