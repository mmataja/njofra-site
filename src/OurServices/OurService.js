import React from "react";
import "./OurService.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OurService = props => {
  return (
    <div>
      <div className="mt-4 animate-double-left cursor-pointer" onClick={props.goBack}>
        <FontAwesomeIcon icon="angle-double-left" size="2x" className="animate" />
      </div>
      <div>
        <div className="d-flex justify-content-center align-items-center mb-5 w-100">
          <h1 className="fs-40 fw-600">{props.title}</h1>
        </div>
        <div className="service-content">
          <div className="flex-1 mr-4">
            <img
              src="https://images.pexels.com/photos/233267/pexels-photo-233267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="img-thumbnail"
            />
          </div>
          <div className="d-flex flex-column justify-content-around service-container flex-1">
            <div>
              <p className="lead">
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
