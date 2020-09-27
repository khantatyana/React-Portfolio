import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import "../components/Form/style.css"
// import { Input, TextArea, FormBtn } from "../components/Form";
import { ContactUs } from "../components/Form";


function Contactme() {

  return (
    <div className="contactme">
      <Container fluid >
        <Row >
        <Col size="md-3"/>
          <Col size="md-5">
              <Row>
                  <h3>Contact</h3>
              </Row>
                <ContactUs/>
          </Col>
          <Col size="md-4 sm-12">
            <Contact />
          </Col>
        </Row>
       
      </Container>
      <Footer />
    </div>
  );
}


export default Contactme;
