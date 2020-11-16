import React from 'react';

import logo from '../images/jv-logo.svg';
import { AiFillPhone, AiFillMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4 col-xl-4">
            <div className="footer-info">
              <h2>Jesse Vandermeersch</h2>
              <p> <AiFillMail /> jesse.vandermeersch@hotmail.com</p>
              <p> <AiFillPhone /> +32 0470 69 52 20</p>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 col-xl-4">
            <div className="footer-socials">
              <a href="https://github.com/pmg-jessvand" target="_blank" rel="noreferrer"><AiFillGithub /></a>
              <a href="https://www.linkedin.com/in/jesse-vandermeersch-856a3a141/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 col-xl-4">
            <div className="footer-logo">
              <img src={logo} alt="logo"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;