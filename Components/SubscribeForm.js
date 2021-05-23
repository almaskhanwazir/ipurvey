import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
<link href="./subscribeForm.css" rel="stylesheet"></link>;
const SubscribeForm = () => {
  const [socialMedia, setSocialMedia] = useState([
    { value: 1, label: "Facebook" },
    { value: 2, label: "Linkedin" },
    { value: 3, label: "Google" },
  ]);
  return (
    <div className="subForm">
      <h1 data-aos="fade-up">Care to share some info</h1>
      <form action="" method="post" name="login">
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>{" "}
        <div className="form-group">
          <label>How did you hear about us</label>
          <select
            name="LookupToLookupSelected"
            test-data-id={"lokup-to-lookup-select"}
          >
            {socialMedia.map((item) => (
              <option value={item.value} key={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <div
            className="g-recaptcha"
            data-sitekey="6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S"
            data-callback="verifyRecaptchaCallback"
            data-expired-callback="expiredRecaptchaCallback"
          ></div>
          <input
            className="form-control d-none"
            data-recaptcha="true"
            required
            data-error="Please complete the Captcha"
          />
          <div className="help-block with-errors"></div>
        </div>
        <div className="col-md-12 text-center ">
          <button type="submit" className=" btn  mybtn btn-primary">
            Get Notified
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm;
