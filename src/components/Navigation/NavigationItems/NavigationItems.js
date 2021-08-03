import React, { useState } from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

let headerNavList = null;

const navigationItems = props => {
    headerNavList =
        <ul className="header__nav__list">
            <NavigationItem link="/my-app" classes={["header__nav__link"]}>PORTFOLIO</NavigationItem>
            <NavigationItem link="/my-app/about" classes={["header__nav__link"]}>ABOUT</NavigationItem>
            <NavigationItem link="/my-app/contact" classes={["header__nav__link"]}>CONTACT</NavigationItem>
            <button>Toggle me</button>
        </ul>

    if (props.type === "mobile") {
        let mobileListClasses = ["header__mobile-nav__list"];
        if (props.showMenu) {
            mobileListClasses.push("show");
        }
        headerNavList = <ul className={mobileListClasses.join(" ")}>
            <NavigationItem link="/" type="mobile" classes={["header__mobile-nav__link"]}>Home</NavigationItem>
            <NavigationItem link="/my-app/contact" type="mobile" classes={["header__mobile-nav__link"]}>Contact</NavigationItem>

        </ul>
    };

    return headerNavList;
}

export default navigationItems;