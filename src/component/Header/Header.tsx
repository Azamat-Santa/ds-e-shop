import React from "react";
import NavList from "../NavList/NavList";
import SearchBlock from "../SearchBlock/SearchBlock";
import "./header.scss";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="content">
        <header className="header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <NavList />
          <SearchBlock />
        </header>
      </div>
    </div>
  );
};

export default Header;
