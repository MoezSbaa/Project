import { PropsWithChildren } from 'react';
import {  Navigate } from 'react-router-dom';
import useAuth from '../hooks/contexts/useAuth';
import usePersistRequestLocation from '../hooks/usePersistRequestedLocation';
import {  UnauthorizedPaths } from '../navigation/paths';

export default function AuthGuard(props: PropsWithChildren) {
    const { children } = props;

    const { isAuthorized } = useAuth();



    const [location, canRedirectBack, resetLocation] = usePersistRequestLocation();

    if (!isAuthorized) {
        return <Navigate to={UnauthorizedPaths.login} replace />;
    }


    if (canRedirectBack) {
        resetLocation();

        return <Navigate to={location as string} />;
    }

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
}
