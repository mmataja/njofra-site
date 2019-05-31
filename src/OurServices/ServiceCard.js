import React from "react";
import "./ServiceCard.css";

const serviceCard = () => {
  return (
    <div className="card">
    <img className="card-img-top card-image" src="https://images.pexels.com/photos/233267/pexels-photo-233267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Roof" />
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in
        to additional content. This content is a little bit longer.
        </p>
    </div>
    <div className="card-footer">
        <button type="button" className="btn btn-link">Saznaj više</button>
    </div>
    </div>
  );
};

export default serviceCard;
