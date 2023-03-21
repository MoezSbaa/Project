import { useContext } from 'react';
import AuthContext from "../../contexts/AuthContext";

export default function useAuth() {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('Auth Context must wrapped inside AuthProvider');
    }

    return context;
}
