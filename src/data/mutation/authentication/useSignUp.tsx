import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import request from '../../../api/network';
import useAuth from "../../../hooks/contexts/useAuth";
import {AuthorizedPaths} from "../../../navigation/paths";

export default function useSignUp(callback?: Callback<any>) {
    const { userDidSignIn } = useAuth();
    const navigate= useNavigate()
    return useMutation({
        mutationFn: (data: any) => {
            return request<any>({
                url: '/auth/signup',
                method: 'post',
                data,
            });
        },
        onSuccess(response) {
            const { token } = response.data;
            localStorage.setItem("role",response.data.roles[0])
            navigate(AuthorizedPaths.dashboard)
            userDidSignIn(token);
        },
        onError() {
            callback?.(true);
        },
    });
}