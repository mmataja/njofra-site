import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-5 container-fluid">
      <div className="mb-2">
        <h1 className="display-1 p-3">O nama</h1>
      </div>
      <div className="col-md-8 d-flex justify-content-center mb-5">
        <h5 className="text-center mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          viverra nisl, eu maximus dolor. Nulla velit sem, rhoncus eu metus ac,
          fringilla molestie tortor. Aliquam volutpat vestibulum odio, a
          lobortis quam vulputate vel. Morbi id venenatis velit. Ut semper
          vulputate est id ultrices. Mauris sodales tincidunt porta. Nunc ut
          euismod nunc. Nulla iaculis tincidunt mauris, ac scelerisque magna. In
          eu mi felis. Proin sed neque nisl.
        </h5>
      </div>
    </div>
  );
};

export default AboutUs;
