
import React from "react";
import { NavLink } from "react-router-dom";


const navigationItem = props => {

    let navClasses = props.classes.join(' ');
    let headerNavItem = <li className="header__nav__item">
        <NavLink exact className={navClasses} to={props.link}>{props.children}</NavLink>
    </li>
    if (props.type === "mobile") {
        headerNavItem = <li className="header__mobilenav__item show">
            <NavLink to={props.link} className={navClasses}>{props.children}</NavLink>
        </li>
    }
    return headerNavItem;
}

export default navigationItem;