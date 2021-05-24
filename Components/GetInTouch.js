import React, { useState } from "react";
import Link from "next/link";
const GetInTouch = () => {
  return (
    <div className="get-in-touch">
      <div className="col-md-10 offset-md-1 ">
        <div className="row">
          <div className="col-md-8">
            <img className="" src="/static/svg/ipurvey-logo2.svg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <p>
              Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
              eiusmod tempor incididunt ut labore
            </p>
            <p>
              enim ad minim veniam, quis nostrud exercitation ullamco laboris et
              dolore magna aliqua.
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
          <div className="col-md-4">
            <h1>Get in touch!</h1>
            <form className="email-form">
              <div className="row gy-4">
                <div className="col-md-12">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="col-md-12 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {/* <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div> */}

                  <button type="submit">Send </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
