import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../hooks/contexts/useAuth';

const locationInitialValue = null;

export default function usePersistRequestLocation(): [Nullable<string>, boolean, () => void] {
    const { pathname } = useLocation();
    const { isAuthorized } = useAuth();
    const [location, setLocation] = useState<Nullable<string>>(locationInitialValue);

    const notAtTheRequestedPathname = pathname !== location;
    const needToRedirectBack = notAtTheRequestedPathname && isAuthorized;
    const canRedirectBack = Boolean(location) && notAtTheRequestedPathname;

    const resetLocation = () => {
        setLocation(locationInitialValue);
    };

    useEffect(() => {
        if (needToRedirectBack) {
            setLocation(pathname);
        }
    }, [needToRedirectBack, pathname, setLocation]);

    return [location, canRedirectBack, resetLocation];
}