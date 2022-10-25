import React from 'react';
import NavList from '../NavList/NavList';
import logo from "../../img/logo.png";
import phone from "../../img/phone.png";
import adress from "../../img/adress.png";
import './footer.scss'



const Footer = () => {
    return (
        <div className="content">
        <footer className="footer">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <NavList />
          <div className="footer__right">
            <div className="footer__right__block">
              <img src={phone} alt="" />
              +7 (495) 555-55-55
            </div>
            <div className="footer__right__block">
              <img src={adress} alt="" />
              +7 (495) 555-55-55
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Footer;