import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import request from '../../../api/network';
import useAuth from "../../../hooks/contexts/useAuth";
import { UnauthorizedPaths } from '../../../navigation/paths';

export default function useDeleteAccountMutation(callback?: Callback<any>) {
    const {  userDidLogOut } = useAuth();
    return useMutation({
        mutationFn: (data: any) => {
            return request<any>({
                url: '/users/delete',
                method: 'delete',
                data,
            });
        },
        onSuccess(response) {
            userDidLogOut();
        },
        onError() {
            callback?.(true);
        },
    });
}