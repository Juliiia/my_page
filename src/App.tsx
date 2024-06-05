import React, {useState} from 'react'
import { useRoutes } from 'react-router-dom';
import Navbar from "./components/navbar";
import {RouteObject} from "react-router";
import LandingPage from "./pages/landingPage/LandingPage";
import CSClimbingPage from "./pages/CSClimbingPage";

function App() {
    const [navbarButtonClicked, setNavbarButtonClicked] = useState('');

    const routes: RouteObject[] = [
        {
            path: '*',
            element: <LandingPage navbarClickedButton={navbarButtonClicked}/>,
        },
        {
            path: 'casestudyclimbing',
            element: <CSClimbingPage />,
        },
    ];

    const content = useRoutes(routes);
 //https://dev.to/coderamrin/how-to-build-a-portfolio-website-with-react-tailwind-css-fni

    return (
    <>
        <Navbar onButtonClicked={setNavbarButtonClicked}/>
        {content}
    </>
  )
}

export default App
