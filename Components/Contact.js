import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SubscribeForm from "./SubscribeForm";
const Contact = (props) => {
  return (
    <>
      <section id="contact" className="blog align-items-center">
        <Container>
          <Row>
            <h1>Contact section</h1>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
