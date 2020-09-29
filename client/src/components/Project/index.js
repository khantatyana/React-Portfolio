import React from "react";
import "./style.css";
// import { Container } from "../components/Grid";

export function List({ children }) {
    return (
      <div className="list-overflow-container">
        <ul className="list-group">{children}</ul>
      </div>
    );
  }
  
  export function ListItem({ children }) {
    return <li className="list-group-item">{children}</li>;
  }
function Project({ children }) {

    return (
        <div class="container container-fluid content-wrapper" id="container">
            <div class="portfolio-items-wrapper" id="main">
                <div className="portfolio-item-wrapper">
                    <div className="portfolio-img-background" style="background-image:url(./Assets/Images/wrkdayScheduler.png)"></div>
                    <div className="img-text-wrapper">
                        <div className="logo-wrapper">
                            <a href="https://khantatyana.github.io/HW-Work-Day-Scheduler/" target="_blank">
                                <img src="./Assets/Images/wrkdayScheduler.png" alt="img" />
                                <br />
                                <i className="subtitle fab fa-connectdevelop fa-spin-hover">Deployed</i>
                            </a>
                        </div>
                        <div className="subtitle">
                            Work Day Scheduler
                        </div>
                        <a href="https://github.com/khantatyana/HW-Work-Day-Scheduler" target="_blank">
                            <i className="subtitle fab fa-github fa-lg fa-spin-hover">Github</i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;