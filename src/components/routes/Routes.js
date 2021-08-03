

import React from "react";
import { Route } from 'react-router-dom';

// Pages
import Home from '../../pages/Home/Home';


const routes = () => {

    return (
        <React.Fragment>
            <Route component={Home} path="/" exact />
        </React.Fragment>
    );
}

export default routes;
