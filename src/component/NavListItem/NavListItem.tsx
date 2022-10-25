import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { InavListData } from '../NavList/navListData';

interface INavListItemProps {
    link : InavListData
}


const NavListItem: FC<INavListItemProps> = ({link}) => {
    return (
        <li>
           <Link to={link.to}>{link.text}</Link>
        </li>
    );
};

export default NavListItem;