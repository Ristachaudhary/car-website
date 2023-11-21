import React from "react";
import "./style.css";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
const FooterBottom = () => {
  return (
    <div className="footerBottom-main-container">
      <div className="footerbottom-copyright">
        © 2023 Girnar Software Pvt. Ltd.
      </div>
      <div className="social-icons">
        <div>Connect:</div>
        <ul>
          <li>
            
            <AiFillFacebook />
          </li>
          <li>
            <AiFillYoutube/>
          </li>
          <li>
            
            <AiFillInstagram />
          </li>
          <li>
            
            <AiFillLinkedin />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterBottom;
