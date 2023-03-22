import { createContext, PropsWithChildren, useMemo, useReducer } from 'react';
import produce from 'immer';
import useAccount from "./../data/queries/authentication/useAccount";

interface AuthContextState {
    isInitialized: boolean;
    isAuthorized: Nullable<boolean>;
}

interface IAuthContext extends AuthContextState {
    userDidLogOut: () => void;
    userDidReconnect: () => void;
    userDidSignIn: (token: string) => void;
}

type ContextAction<T> = { type: T };
type UserDidAuthenticated = ContextAction<'user-logged-in'>;
type UserDidReconnect = ContextAction<'user-reconnected'>;
type UserDidLogout = ContextAction<'user-logged-out'>;

type AuthContextActions = UserDidAuthenticated | UserDidReconnect | UserDidLogout;

const authContextInitialState: AuthContextState = {
    isAuthorized: null,
    isInitialized: true,
};

const AuthContext = createContext<Missable<IAuthContext>>(undefined);

function authContextReducer(state: AuthContextState, action: AuthContextActions) {
    return produce(state, (draft) => {
        const { type } = action;

        switch (type) {
            case 'user-logged-in':
                draft.isInitialized = false;
                draft.isAuthorized = true;
                break;

            case 'user-reconnected':
                draft.isInitialized = false;
                draft.isAuthorized = true;
                break;

            case 'user-logged-out':
            default:
                draft.isInitialized = false;
                draft.isAuthorized = authContextInitialState.isAuthorized;
                break;
        }
    });
}

export function AuthContextProvider(props: PropsWithChildren) {
    const { children } = props;

    const [state, dispatch] = useReducer(authContextReducer, authContextInitialState);

    const userDidSignIn: IAuthContext['userDidSignIn'] = useMemo(() => {
        return (token) => {
            localStorage.setItem('token', token);
            dispatch({ type: 'user-logged-in' });
        };
    }, [dispatch]);

    const userDidReconnect: IAuthContext['userDidReconnect'] = useMemo(() => {
        return () => {
            dispatch({ type: 'user-reconnected' });
        };
    }, [dispatch]);

    const userDidLogOut: IAuthContext['userDidLogOut'] = useMemo(() => {
        return () => {
            localStorage.removeItem('token');
            dispatch({ type: 'user-logged-out' });
        };
    }, [dispatch]);

    const value = useMemo(() => {
        return {
            ...state,
            userDidSignIn,
            userDidReconnect,
            userDidLogOut,
        };
    }, [state, userDidSignIn, userDidReconnect, userDidLogOut]);

    useAccount("user",(err:any) => {
        if (err) {
            userDidLogOut();
            return;
        }

        userDidReconnect();
    });


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
