import React from "react";
import "./OurService.css";

const ourService = props => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center mb-5 mt-n5 pb-5">
        <button className="btn btn-danger" onClick={props.goBack}>Natrag</button>
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
          {/* <div>
            <h2>{props.title}</h2>
          </div> */}
          <div>
            <p className="lead">
              Phasellus convallis vehicula blandit. Morbi congue est ante, quis
              aliquam ipsum faucibus quis. Proin mauris lectus, lacinia nec
              ullamcorper id, lacinia eu ligula. Nunc a dignissim ligula, at
              lacinia est. Cras quis justo at diam vestibulum auctor vitae vitae
              metus. Duis fermentum pretium odio vitae consectetur. Curabitur
              egestas sapien non neque cursus, quis ultrices quam volutpat.
              Donec eu tempus erat, eu iaculis massa. Praesent quam ante,
              faucibus in viverra id, tempor ac mauris. Aliquam tellus metus,
              malesuada commodo nibh vestibulum, commodo consequat urna. Nam
              maximus tortor eget orci laoreet vulputate. Aliquam erat volutpat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ourService;
