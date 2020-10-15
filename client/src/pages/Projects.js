import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Footer from "../components/Footer";
import Project from "../components/Project"
import "../components/Project/style.css"

function Projects() {
  
  return (
    <div className="projects">
      {/* <Container fluid className="projects" > */}

          {/* <Col size="md-12"> */}
            <Project />
          {/* </Col> */}

      {/* </Container> */}
      <Footer />
    </div>
  );
}


export default Projects;