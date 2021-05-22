import { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
      <header id="header" className="header ">
    <div className="container-fluid container-xl d-flex align-items-center ">

      <a href="index.html" className="logo d-flex align-items-center">
        <img src="/static/svg/logo.svg" alt=""/>
      </a>
      
      <nav id="navbar" className={`${
                  isOpen
                    ? "navbar-mobile"
                    : "navbar left"
                } `}>
        <ul>
        <Link href="/">
          <li><a className="nav-link scrollto">Home</a></li>
        </Link>
        <Link href="/blogs">
          <li><a className="nav-link scrollto">Blogs</a></li>
        </Link>
        <Link href="/contact-us">
          <li><a className="nav-link scrollto">Contact</a></li>
        </Link>
        
        </ul>
        <i 
        className={`${
          isOpen
            ? "bi-x"
            : "bi-list"
        } bi mobile-nav-toggle`} 
        onClick={toggle}></i>
      </nav>

    </div>
  </header>
    </div>
  );
};

export default Header;
