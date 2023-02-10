import React from "react";
import {RouteObject} from "react-router";
import LandingPage from "../pages/LandingPage";
import CSClimbingPage from "../pages/CSClimbingPage";

const routes: RouteObject[] = [
    {
        path: '*',
        element: <LandingPage />,
        children: [
            {
                index: true,
                element: (
                    <LandingPage />
                ),
            },
        ],
    },
    {
        path: 'casestudyclimbing',
        element: <CSClimbingPage />,
        children: [
            {
                index: true,
                element: (
                    <CSClimbingPage />
                ),
            },
        ],
    },
];

export default routes;