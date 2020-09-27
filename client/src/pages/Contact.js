import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import "../components/Contact/style.css"

// import { Input, TextArea, FormBtn } from "../components/Form";

function Contactme() {

  return (
    <div>
      <Container fluid >
        <Row >
          <Col size="md-8">

          </Col>
          <Col size="md-4 sm-12">
            <Contact />
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
}


export default Contactme;
