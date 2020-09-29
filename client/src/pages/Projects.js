import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Footer from "../components/Footer";
import Project from "../components/Project"

function Projects() {
  // Setting our component's initial state
  const [projects, setProjects] = useState([{}])
  // const [formObject, setFormObject] = useState({})

  // Load all projects and store them with setProjects
  useEffect(() => {
    loadProjects()
  }, [])

  function loadProjects() {
    API.getProjects()
      .then(res =>
        setProjects(res.data)
        // console.log(res.data)

      )
      .catch(err => console.log(err));
  };


  return (
    <Container fluid>





          {/* <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1>My Projects</h1>
              </Jumbotron>

            </Col>
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>{projects[0].synopsis}</h1>
              </Jumbotron>
              {projects.length ? (
                <List>
                  {projects.map(project => (
                    <ListItem key={project._id}>
                      <Link to={"/portfolio"}>
                        <strong>
                          {project.title} by {project.synopsis}
                        </strong>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </Col>
          </Row> */}
          <Footer />
      </Container>
      
    );
  }


export default Projects;