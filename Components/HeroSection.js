import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SubscribeForm from "./SubscribeForm";
import Footer from "./Footer";
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
                <h2>Comming Soon</h2>
                <img
                  className="trainImg"
                  src="/static/png/storeIcons3x.png"
                  alt=""
                />
              </div>
            </div>
            <div class="col-md-4">
              <img
                className=""
                src="/static/png/mobileapp.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="section5">
          <div className="col-md-10 offset-md-1 ">
            <div class="row">
              <div class="col-md-8">
                <img
                  className=""
                  src="/static/svg/ipurvey-logo2.svg"
                  alt=""
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
                <p>
                  Utenim ad minim veniam, quis nostrud exercitation ullamco
                  laboris eiusmod tempor incididunt ut labore
                </p>
                <p>
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris et dolore magna aliqua.
                </p>
                <ul>
                  <Link href="/">
                    <li>
                      <a className="nav-link scrollto">Home</a>
                    </li>
                  </Link>
                  <Link href="/">
                    <li>
                      <a className="nav-link scrollto">About us</a>
                    </li>
                  </Link>
                  <Link href="/">
                    <li>
                      <a className="nav-link scrollto">Contact us</a>
                    </li>
                  </Link>
                  <Link href="/">
                    <li>
                      <a className="nav-link scrollto">Blogs</a>
                    </li>
                  </Link>
                </ul>
              </div>
              <div class="col-md-4">
                <h1>Get in touch!</h1>
                <form class="email-form">
                  <div class="row gy-4">
                    <div class="col-md-12">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="Full Name"
                        required
                      />
                    </div>

                    <div class="col-md-12 ">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>

                    <div class="col-md-12">
                      <textarea
                        class="form-control"
                        name="message"
                        rows="6"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <div class="col-md-12 text-center">
                      {/* <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div> */}

                      <button type="submit">Send </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default HeroSection;
