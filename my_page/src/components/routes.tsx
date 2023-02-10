import React from "react";
import {RouteObject} from "react-router";
import LandingPage from "./LandingPage";
import CSClimbingPage from "./CSClimbingPage";

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