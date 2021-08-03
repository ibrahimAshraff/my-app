

import React from "react";
import { Route } from 'react-router-dom';

// Pages
import Home from '../../pages/Home/Home';
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";


const routes = () => {

    return (
        <React.Fragment>
            <Route component={Home} path="/my-app/" exact />
            <Route component={About} path="/my-app/about" exact />
            <Route component={Contact} path="/my-app/contact" exact />

        </React.Fragment>
    );
}

export default routes;
