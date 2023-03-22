import {lazy} from 'react';
import {Navigate, Outlet, useRoutes} from 'react-router-dom';
import {UnauthorizedPaths} from "./paths";
import GuestGuard from "../guards/GuestGuard";
import Splash from "../components/Splash";
import Loadable from "../components/Loadable";
import Profile from '../pages/Profile';
const About = Loadable(lazy(() => import('../pages/About')));
const Login = Loadable(lazy(() => import('../pages/Login')));


export default function Router() {
    return useRoutes([
        /*{
            path: '',
            element: (
                <GuestGuard>
                    <Splash/>
                </GuestGuard>
            ),
        },*/
        {
            path: '',
            element: <Login/>
        },
        {
            path: UnauthorizedPaths.login,
            element: <Profile/>
        },
    ])
}