import React from "react";

//nested component are recieved with the prop name as 'children' in React
const Route = ( {path, children} ) => {
    return (window.location.pathname === path) ? children : null
}


export default Route;