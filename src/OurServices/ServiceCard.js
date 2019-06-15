import React from "react";
import "./ServiceCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServiceCard = (props) => {
  return (
    <div className="card card-shadow-box">
        <img className="card-img-top card-image" src={ props.data.img } alt="Roof" />
        <div className="card-body">
            <h5 className="card-title">{ props.data.title }</h5>
            <p className="card-text">
                { props.data.description }
            </p>
        </div>
        <div className="card-footer">
            <button type="button" className="lead btn btn-link d-flex align-items-center text-info nounderline animate-double-right" onClick={() => props.triggerOurService(props.data)}>
                Saznaj više <FontAwesomeIcon icon="angle-double-right" className="ml-2 animate" />
            </button>
        </div>
    </div>
  );
};

export default ServiceCard;
