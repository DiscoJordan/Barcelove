import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__tabs">
          <Link to={"/"}>Places</Link>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/contacts"}>Contacts</Link>
          <Link to={"/termsAndConditions"}>Terms and conditions</Link>
        </div>
        <div className="footer__email">
          <span className="material-symbols-outlined">mail</span>
          <a href="mailto:barcelove.contact@gmail.com">
            barcelove.contact@gmail.com
          </a>
        </div>
        <a target="blank" href="https://www.buymeacoffee.com/barcelove">
          <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a Coffee&emoji=☕&slug=barcelove&button_colour=ff471f&font_colour=000000&font_family=Arial&outline_colour=000000&coffee_colour=FFDD00" alt="donation"/>
        </a>
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
            <a target="blank" href="https://discojordan.github.io/Portfolio-page/">
            <div className="footer__logo">
              <img src="/images/djlogo.webp" alt="discojordan" />
            </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
