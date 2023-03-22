import { useMutation } from 'react-query';
import request from '../../../api/network';
import useAuth from "../../../hooks/contexts/useAuth";

export default function useLoginMutation(callback?: Callback<any>) {
    const { userDidSignIn } = useAuth();

    return useMutation({
        mutationFn: (data: any) => {
            return request<any>({
                url: '/auth/signin',
                method: 'post',
                data,
            });
        },
        onSuccess(response) {
            const { accessToken } = response.data;
            callback?.(false, response.data);
            userDidSignIn(accessToken);
        },
        onError() {
            callback?.(true);
        },
    });
}