import React from "react";
import {RouteObject} from "react-router";
import LandingPage from "../pages/landingPage/LandingPage";
import CSClimbingPage from "../pages/CSClimbingPage";
import Bilderliste from "../components/bilderliste";


// Thanks to: https://medium.com/@ahsan-ali-mansoor/define-react-routes-with-better-approach-typescript-d07de782b517
const routes: RouteObject[] = [
    {
        path: '*',
        element: <LandingPage />,
    },
    {
        path: 'bilderliste',
        element: <Bilderliste />,
    },
    {
        path: 'casestudyclimbing',
        element: <CSClimbingPage />,
    },
];

export default routes;