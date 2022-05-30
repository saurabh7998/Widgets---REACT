import React, { useEffect, useState } from "react";

//nested component are recieved with the prop name as 'children' in React
const Route = ( {path, children} ) => {

    const[route, setRoute] = useState(window.location.pathname);

    useEffect(()=>{
        const onLocationChange = () => {
            setRoute(window.location.pathname);
        }

        window.addEventListener('popstate', onLocationChange);

        return ()=>{
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])

    return (route === path) ? children : null
}


export default Route;