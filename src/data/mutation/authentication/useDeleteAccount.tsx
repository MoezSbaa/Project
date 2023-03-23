import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import request from '../../../api/network';
import useAuth from "../../../hooks/contexts/useAuth";
import { UnauthorizedPaths } from '../../../navigation/paths';

export default function useDeleteAccountMutation(callback?: Callback<any>) {
    const { userDidSignIn } = useAuth();
    const navigate= useNavigate()
    return useMutation({
        mutationFn: (data: any) => {
            return request<any>({
                url: '/users/delete',
                method: 'delete',
                data,
            });
        },
        onSuccess(response) {
            const { token } = response.data;
            localStorage.removeItem("token")
            navigate(UnauthorizedPaths.login)
            callback?.(false, response.data);
            userDidSignIn(token);
        },
        onError() {
            callback?.(true);
        },
    });
}