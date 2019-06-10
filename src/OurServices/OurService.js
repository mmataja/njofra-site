import React from "react";
import "./OurService.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OurService = props => {
  return (
    <div>
      <div className="" onClick={props.goBack}><FontAwesomeIcon icon="arrow-left" size="4x" /></div>
      <div className="d-flex justify-content-center align-items-center mb-5 w-100">
        <h1 className="display-3 lead">{props.title}</h1>
      </div>
      <div className="d-flex justify-content-around">
        <div className="img-shadow">
          <img
            src="https://images.pexels.com/photos/233267/pexels-photo-233267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            className="img-thumbnail"
          />
        </div>
        <div className="d-flex flex-column justify-content-around w-50">
          <div>
            <p className="lead">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
