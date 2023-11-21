import React from "react";
import "./style.css";

const Card = ({ img, make }) => {
  return (
    <div className="card-img-para-container">
      <img src={img} />
      <p>{make}</p>
    </div>
  );
};

export default Card;
