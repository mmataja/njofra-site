import React from "react";
import "./OurService.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ourService = props => {
  return (
    <div>
      <div className="text-white-50" onClick={props.goBack}><FontAwesomeIcon icon="arrow-left" size="4x" /></div>
      <div className="d-flex justify-content-center align-items-center mb-5 text-white-50 w-100">
        <h1 className="display-3">{props.title}</h1>
      </div>
      <div className="d-flex justify-content-around">
        <div>
          <img
            src="https://images.pexels.com/photos/233267/pexels-photo-233267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
        <div className="d-flex flex-column justify-content-around w-50">
          <div>
            <p className="lead text-white-50">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ourService;
