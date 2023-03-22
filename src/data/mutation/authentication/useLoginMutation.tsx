import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import request from '../../../api/network';
import useAuth from "../../../hooks/contexts/useAuth";

export default function useLoginMutation(callback?: Callback<any>) {
    const { userDidSignIn } = useAuth();
    const navigate= useNavigate()
    return useMutation({
        mutationFn: (data: any) => {
            return request<any>({
                url: '/auth/signin',
                method: 'post',
                data,
            });
        },
        onSuccess(response) {
            const { token } = response.data;
            navigate("/dashboard")
            callback?.(false, response.data);
            userDidSignIn(token);
        },
        onError() {
            callback?.(true);
        },
    });
}