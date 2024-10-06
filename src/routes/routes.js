// import React from 'react'
import { useRoutes } from "react-router-dom";
import RegisterLayout from "../layouts/RegisterLayout";
import Login from "../views/Login/Login";

export default function RouteComponent() {
    const routeElements = useRoutes([
        {
            path: "/login",
            element: (
                <RegisterLayout>
                    <Login />
                </RegisterLayout>
            ),
        },
    ]);
    return routeElements;
}
