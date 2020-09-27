import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Footer from "../components/Footer";
import About from "../components/About";
import "../components/About/style.css"

function Aboutme() {

  return (
    <div className="aboutmeMain">
      <Container fluid >
        <Row >
          <Col size="md-8">
          </Col>
          <Col size="md-4 sm-12">
            <About />
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
}


export default Aboutme;
