import React from "react";
import { Container, Row, Col } from "reactstrap";
import SubscribeForm from "./SubscribeForm";
const HeroSection = (props) => {
  return (
    <>
      <section id="hero" className="hero align-items-center">
        <Container>
          <Row>
            <Col xs="6">
              <Row>
                <Col xs="2"></Col>
                <Col xs="8">
                  <h1 className="heroH1" data-aos="fade-up">
                    Be the first to know when we arive!
                  </h1>
                  <h2 data-aos="fade-up" data-aos-delay="400">
                    Be Among the first 100 early members and win iPurvey
                    monitoring and raising compensation claim request for upto
                    5(five) rail and/or Flight journeys within the first 2 onths
                    of launch, compeletly free.
                  </h2>
                  <img
                    className="aeroplaneSvg"
                    src="/static/svg/aeroplane.svg"
                    alt=""
                  />
                </Col>
                <Col xs="2"></Col>
              </Row>
            </Col>
            <Col xs="6">
              <Row>
                <Col xs="8">
                  <SubscribeForm />
                </Col>
                <Col xs="4"></Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <img className="herobtm" src="/static/svg/heroBottom.svg" alt="" />
      </section>
      <div class="row station">
         <img className="stationImg" src="/static/svg/station.svg" alt="" />
        <img className="trackImg" src="/static/svg/train-track.svg" alt="" />
        <img className="trainImg" src="/static/svg/train.svg" alt="" />
      </div>
      <div class="row">
        <div class="col-md-8 offset-md-2 section3">
          <h1>Lorem ipsum dolor sit amet </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <img className="trainImg" src="/static/png/flightplane.png" alt="" />
        </div>

        <div class="col-md-6 offset-md-3 section4">
          <div class="row">
            <div class="col-md-8">
              <h1>Comming soon on your favourite devices!</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
              <p>
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
              <div class="col-md-6 offset-md-3 section4">
                <h2>
                Comming Soon
                </h2>
               <img
                className="trainImg"
                src="/static/png/storeIcons3x.png"
                alt=""
              />
                
                
                </div>
            </div>
            <div class="col-md-4">
              <img
                className="trainImg"
                src="/static/png/mobileapp.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
