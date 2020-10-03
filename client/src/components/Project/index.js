import React from "react";
import { Container } from "../Grid";
import "./style.css";
import ChildNode from "../ChildNode";
import projects from "../../projects.json";

function Projects() {

    return (
        <Container fluid container container-fluid content-wrapper>
            <div
            style={{
                margin: "50px auto 10px auto",
                boxShadow: "0 5px 10px 2px rgba(0, 0, 0, 0.25)",
                padding: "20px"
            }}
            >
                <h1>My Projects</h1>
            </div>
            {projects.length ? (
                <div className="portfolio-items-wrapper">
                    {projects.map(( project) => (   
                        <ChildNode
                        key={project._id} 
                        project={project}
                        // className="portfolio-item-wrapper"
                        > 
                        </ChildNode>
                    ))}
                </div>
            ) : (
                    <h3>No Results to Display</h3>
                )}
        </Container>
    );
}

export default Projects;