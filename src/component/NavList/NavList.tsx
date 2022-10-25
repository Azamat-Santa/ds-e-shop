import React from "react";
import NavListItem from "../NavListItem/NavListItem";
import "./navList.scss";
import { navListData } from "./navListData";
const NavList = () => {
  return (
    <ul className="navigation">
        {
            navListData.map(link=>(
                <NavListItem link={link} key={link.to}/>  
            ))
        }
    </ul>
  );
};

export default NavList;
