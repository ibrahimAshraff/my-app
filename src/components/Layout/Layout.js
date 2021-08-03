import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Toolbar from '../Navigation/Toolbar/Toolbar';
// import Footer from "../Footer/Footer";

function Layout(props) {
    const [openNavMenu, setNavMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);

    const history = useHistory();

    const screenWidthHandler = () => {
        let width = window.screen.width;
        setScreenWidth(width);
    }

    useEffect(() => {
        screenWidthHandler();
        return history.listen((location) => {
            setNavMenu(false);
        });

    }, [history])

    const navMenuHandler = () => {
        setNavMenu(!openNavMenu);
    }

    return (
        <>
            <Toolbar
                showMenu={openNavMenu}
                clicked={navMenuHandler}
                screenWidth={screenWidth}
            />
            <main>
                {props.children}
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default Layout;
