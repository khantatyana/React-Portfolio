import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import "../components/Contact/style.css"

import { Input, TextArea, FormBtn } from "../components/Form";

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
          <form className="form">
              <label>Name</label>
                <Input
                    // onChange={handleInputChange}
                    name="name"
                    placeholder="Name (required)"
                />
              <label>Email</label>
                <Input
                    // onChange={handleInputChange}
                    name="email"
                    placeholder="exaple@gmail.com"
                />
                <h6>We'll never share your email with anyone else.</h6>
              <br/>
              <label>Message</label>
                <TextArea
                    // onChange={handleInputChange}
                    name="message"
                    placeholder="Enter your message (required)"
                />  
              <FormBtn
                // disabled={!(formObject.email && formObject.name)}
                // onClick={handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
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
