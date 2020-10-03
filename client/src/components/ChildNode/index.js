import React, { useState } from "react";
import "./style.css";
import Card from "../Card";

function ChildNode({ project }) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div 
      className={hovered ? "img-darken portfolio-item-wrapper" : "portfolio-item-wrapper"}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>
        <div className="subtitle"><h3>
          {project.title}</h3>
        </div>
      <div className="portfolio-img-background" 
      style={{ backgroundImage: `url(${project.portfolioImgBackground})` }}></div>

      <div className="img-text-wrapper">
        <div className="logo-wrapper">
          <a href={project.deployed} target="_blank">
            <img src={project.logoWrapper} alt="img" />

            <br />
            <i className="subtitle fab fa-connectdevelop fa-spin-hover">Deployed</i>
          </a>
        </div>

        <a href={project.gitHub} target="_blank">
          <i className="subtitle fab fa-github fa-lg fa-spin-hover">Github</i>
        </a>
      </div>
      <br/>
      <Card
      project={project}/>
    </div>


  );
}

export default ChildNode;