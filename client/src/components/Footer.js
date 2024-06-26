import React from "react";
import { Link, NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__tabs">
        <Link to={"/"}>Places</Link>
        <Link to={"/about"}>About Us</Link>
        <Link to={"/contacts"}>Contacts</Link>
        </div>
        <div className="footer__email">
          <span className="material-symbols-outlined">mail</span>
          <a href="mailto:barcelove@gmail.com">barcelove@gmail.com</a>
        </div>
        <div className="footer__label">
          <p>MADE WITH LOVE -</p>
          <div className="logo">
            <img src="/images/Logo.png" alt="logo" />
          </div>
        </div>
        <div className="footer__rights">
          <p>Copyright © Barcelove. All Rights Reserved · 2024</p>
          <div className="footer__backlink">
            <p>MADE BY</p>
            <div className="footer__logo">
              <img src="/images/djlogo.png" alt="discojordan" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
