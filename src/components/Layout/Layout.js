import React, { useState, useEffect } from 'react';

const Layout = (props) => {
    return (
        <main>
            {props.children}
        </main>
    )
}

export default Layout