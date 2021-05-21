import React, { useState } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
<link href="./subscribeForm.css" rel="stylesheet"></link>;
const CookieSection = () => {
  return (
    <CookieConsent
    location="bottom"
    cookieName="myAwesomeCookieName2"
    expires={150}
  >
   <h1> We use cookies!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
  </CookieConsent>
  );
};

export default CookieSection;
