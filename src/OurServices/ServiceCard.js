import React from "react";
import "./ServiceCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const serviceCard = () => {
  return (
    <div className="card mb-5">
        <img className="card-img-top card-image" src="https://images.pexels.com/photos/233267/pexels-photo-233267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Roof" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
                Curabitur ullamcorper libero odio, ut aliquet ligula scelerisque non. Ut consequat lacinia dui et vestibulum. 
                Etiam justo lacus, laoreet vel tellus ac, fermentum varius eros. Nullam egestas commodo sapien id interdum.
            </p>
        </div>
        <div className="card-footer">
            <button type="button" className="btn btn-link d-flex align-items-center">
                Saznaj više <FontAwesomeIcon icon="angle-double-right" className="ml-2" />
            </button>
        </div>
    </div>
  );
};

export default serviceCard;
