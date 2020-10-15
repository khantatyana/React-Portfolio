import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Footer from "../components/Footer";
import About from "../components/About";
import "../components/About/style.css"

function Aboutme() {

  return (
    <div className="aboutmeMain">
        <Row >
          <Col size="md-9">
          </Col>
          <Col size="md-3 sm-12">
            <About />
          </Col>
        </Row>
        <Footer />
    </div>
  );
}


export default Aboutme;
