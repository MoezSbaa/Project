import {lazy} from 'react';
import {Navigate, Outlet, useRoutes} from 'react-router-dom';
import {UnauthorizedPaths} from "./paths";
import GuestGuard from "../guards/GuestGuard";
import Splash from "../components/Splash";
import Loadable from "../components/Loadable";
import Profile from '../pages/Profile';
import UserList from '../pages/dashboard/UserList';
import NavBar from '../Layout/NavBar';
import RegisterUser from '../pages/registeruser';
import RegisterCoach from '../pages/registercoach';
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
            path: '/',
            element: <Login/>
        },
        {
            path: UnauthorizedPaths.login,
            element: <Login/>
        },
        {
            path: '/dashboard',
            element: <div>

                <NavBar/>
                <UserList role="user"/>
                <UserList role="coach"/>
                </div>
        },
        {
            path: '/registerUser',
            element: <RegisterUser />
        },
        {
            path: '/registerCoach',
            element: <RegisterCoach />
        },
    ])
}