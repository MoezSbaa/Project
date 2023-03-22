import {lazy} from 'react';
import {Navigate, Outlet, useRoutes} from 'react-router-dom';
import {UnauthorizedPaths} from "./paths";
import GuestGuard from "../guards/GuestGuard";
import Splash from "../components/Splash";
import Loadable from "../components/Loadable";
import Login from '../pages/Login';
const About = Loadable(lazy(() => import('../pages/About')));


export default function Router() {
    return useRoutes([
        {
            path: '',
            element: (
                <GuestGuard>
                    <Splash/>
                </GuestGuard>
            ),
        },
        {
            path: UnauthorizedPaths.login,
            element: <Login/>
        },
    ])
}