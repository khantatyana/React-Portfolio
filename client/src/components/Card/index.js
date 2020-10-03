import React from "react";
import "./style.css";

function Card({ project }) {
  return (
    <div className="card text-center">
      <div className="card-header">
      </div>
      <div className="card-body">{project.synopsis}</div>
    </div>
  );
}

export default Card;