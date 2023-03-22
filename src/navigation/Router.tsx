import {lazy} from 'react';
import {Navigate, Outlet, useRoutes} from 'react-router-dom';
import {AuthorizedPaths, UnauthorizedPaths} from "./paths";
import GuestGuard from "../guards/GuestGuard";
import Splash from "../components/Splash";
import Loadable from "../components/Loadable";
import Profile from '../pages/dashboard/Profile';
import UserList from '../pages/dashboard/UserList';
import NavBar from '../Layout/NavBar';
import RegisterUser from '../pages/registeruser';
import RegisterCoach from '../pages/registercoach';
import AuthGuard from "../guards/AuthGuard";

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
            element: <Navigate to={UnauthorizedPaths.login}/>
        },
        {
            path: UnauthorizedPaths.login,
            element: (<GuestGuard><Login/></GuestGuard>)
        },
        {
            path: UnauthorizedPaths.registerUser,
            element: (<GuestGuard><RegisterUser/></GuestGuard>)
        },
        {
            path: UnauthorizedPaths.registerCoach,
            element: (<GuestGuard><RegisterCoach/></GuestGuard>)
        },
        {
            path: AuthorizedPaths.dashboard,
            element: (
                <AuthGuard>
                    <NavBar/>
                    <UserList role="user"/>
                    <UserList role="coach"/>
                </AuthGuard>
            )
        },
        {
            path: AuthorizedPaths.profile,
            element: (
                <AuthGuard>
                   <Profile/>
                </AuthGuard>
            )
        },

    ])
}