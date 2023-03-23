import {lazy} from 'react';
import {Navigate, Outlet, useRoutes} from 'react-router-dom';
import {AuthorizedPaths, UnauthorizedPaths} from "./paths";
import GuestGuard from "../guards/GuestGuard";
import Splash from "../components/Splash";
import Loadable from "../components/Loadable";
import Profile from '../pages/dashboard/Profile';
import UserList from '../pages/dashboard/UserList';
import NavBar from '../Layout/NavBar';
import AuthGuard from "../guards/AuthGuard";
import ForgetPassword from '../pages/ForgetPassword';
import ResetPassword from '../pages/ResetPassword';

const About = Loadable(lazy(() => import('../pages/About')));
const Login = Loadable(lazy(() => import('../pages/Login')));
const Register = Loadable(lazy(() => import('../pages/register')));


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
            element: (<GuestGuard><Register/></GuestGuard>)
        },
        {
            path: UnauthorizedPaths.registerCoach,
            element: (<GuestGuard><Register/></GuestGuard>)
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
        {
            path:UnauthorizedPaths.forgetPassword,
            element: <ForgetPassword />
        },
        {
            path:UnauthorizedPaths.resetPassword,
            element: <ResetPassword />
        }

    ])
}