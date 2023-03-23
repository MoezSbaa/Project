import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import request from '../../../api/network';
import { UnauthorizedPaths} from "../../../navigation/paths";

export default function useForgetPassword(callback?: Callback<any>) {
    const navigate= useNavigate()
    return useMutation({
        mutationFn: (data: any) => {
            return request<any>({
                url: '/users/forget-password',
                method: 'post',
                data,
            });
        },
        onSuccess(response) {
            const { token } = response.data;
            navigate(UnauthorizedPaths.login)
        },
        onError() {
            callback?.(true);
        },
    });
}