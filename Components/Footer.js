import { useState } from "react";
import Router from "next/router";
import Link from "next/link";
const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="footer-Section">
      <div className="col-md-10 offset-md-1 ">
        <div className="row">
          <div class="col-md-4">
            <p>connect with us</p>
            <hr />
            <ul>
              <Link href="/">
                <li>
                  <img
                    className=""
                    src="/static/svg/fbIcon2.svg"
                    alt=""
                  />
                </li>
              </Link>
              <Link href="/">
                <li>
                <img
                    className=""
                    src="/static/svg/instaTransparent.svg"
                    alt=""
                  />
                </li>
              </Link>
              <Link href="/">
                <li>
                <img
                    className=""
                    src="/static/svg/playIcon.svg"
                    alt=""
                  />
                </li>
              </Link>
              <Link href="/">
                <li>
                <img
                    className=""
                    src="/static/svg/linkedin.svg"
                    alt=""
                  />
                </li>
              </Link>
              <Link href="/">
                <li>
                <img
                    className=""
                    src="/static/svg/twitter.svg"
                    alt=""
                  />
                </li>
              </Link>
            </ul>
          </div>
          <div class="col-md-4">copyright &#169; 2021. iPurvey;</div>
          <div class="col-md-4">
          <ul>
                  <Link href="/">
                    <li>
                      <a className="nav-link scrollto">Privacy policy</a>
                    </li>
                  </Link>
                 <p>/</p>
                  <Link href="/">
                    <li>
                      <a className="nav-link scrollto">Term of use</a>
                    </li>
                  </Link>
                </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
