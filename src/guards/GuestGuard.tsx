import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthorizedPaths } from '../navigation/paths';
import useAuth from "../hooks/contexts/useAuth";

export default function GuestGuard(props: PropsWithChildren) {
    const { children } = props;

    const { isAuthorized } = useAuth();

    if (isAuthorized) {
        return <Navigate to={AuthorizedPaths.dashboard} replace />;
    }

    return (
        <>
        {children}
        </>
    );
}