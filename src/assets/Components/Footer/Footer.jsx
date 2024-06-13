import React from "react";
import "./Footer.css";
import phot_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={phot_logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum atque
            nisi minus maiores animi maxime reprehenderit incidunt magnam iure
            repellendus!
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr className="hor" />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© 2024 Ahmed Ramy. All rights reserved </p>
        </div>
      
      <div className="footer-bottom-right">
        <p>Term of Services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
