import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import request from '../../../api/network';
import useAuth from "../../../hooks/contexts/useAuth";
import {UnauthorizedPaths} from "../../../navigation/paths";

export default function useLogOut() {
    const {  userDidLogOut } = useAuth();
    const navigate= useNavigate()
    return useMutation({
        mutationFn: () => {
            return request<any>({
                url: 'auth/signout',
                method: 'post',
            });
        },
        onSuccess() {
            navigate(UnauthorizedPaths.login)
            userDidLogOut();
        },

    });
}