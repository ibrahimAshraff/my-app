import React from 'react';
// import Logo from '../../Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = props => {
    let headerClasses = ['header'];
    let headerIconClasses = ['header__icon'];
    let mobileNavClasses = ["header__mobile-nav"];
    let isMobile = false;

    if (props.showMenu) {
        headerIconClasses.push("open");
        mobileNavClasses.push("show");
    }

    if (props.screenWidth < 600) {
        isMobile = true;
    }

    return (
        <header className={headerClasses.join(" ")}>

            <div className="header__contents container">
                {/* <Logo isMobile={isMobile} /> */}
                <h1>ASH</h1>
                <nav className="header__nav">
                    <NavigationItems />
                </nav>
                <button className="hamburger-button" onClick={props.clicked}>
                    <div className={headerIconClasses.join(" ")}></div>
                </button>
            </div>
            <div className={mobileNavClasses.join(" ")}>
                <NavigationItems showMenu={props.showMenu} type="mobile" />
            </div>

        </header>
    );
}

export default toolbar;