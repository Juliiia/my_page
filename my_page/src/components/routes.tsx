import React from "react";
import {RouteObject} from "react-router";
import LandingPage from "../pages/LandingPage";
import CSClimbingPage from "../pages/CSClimbingPage";

const routes: RouteObject[] = [
    {
        path: '*',
        element: <LandingPage />,
    },
    {
        path: 'casestudyclimbing',
        element: <CSClimbingPage />,
    },
];

export default routes;