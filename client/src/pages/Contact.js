import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import "../components/Form/style.css"
import { ContactUs } from "../components/Form";

function Contactme() {

  return (
    <div className="contactme">
      <Container fluid >
        <Row >
          <Col size="md-6">
            <Row>
                <h3>Get in touch!</h3>
            </Row>
            <ContactUs/>
          </Col>
          <Col size="md-6">
            <Contact />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Contactme;
