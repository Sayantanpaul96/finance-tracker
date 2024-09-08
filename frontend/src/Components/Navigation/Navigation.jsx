import React from 'react';
import './Navigation.css';
import { menuItems } from '../../utils/menuItems';
import { signout } from '../../utils/icons';
import avatar from '../../img/avatar.png';

export const Navigation = () => {
   return (
    <nav className="navigation">
        <div className="user-con">
            <img src={avatar} alt="avatar"/>
            <div className="text">
               <h2> Sayantan Paul </h2>
               <p>Your Money</p>
            </div>
        </div>
        <ul className="menu-items">
            {menuItems.map((item) => {
                return <li key={item.id}>
                    <span>{item.icon} {item.title}</span>
                </li>
            })}
        </ul>
        <div className="bottom-nav">
            <li>
                {signout()} Sign Out
            </li>
        </div>
    </nav>
   );
};

export default Navigation;