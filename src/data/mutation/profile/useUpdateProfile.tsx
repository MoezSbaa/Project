import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import request from '../../../api/network';
import useAuth from "../../../hooks/contexts/useAuth";
import {AuthorizedPaths} from "../../../navigation/paths";
import queryClient from "../../Client";
import queriesKeys from "../../keys";

export default function useUpdateProfile() {
    const navigate= useNavigate()
    return useMutation({
        mutationFn: (data: any) => {
            return request<any>({
                url: '/users/update',
                method: 'put',
                data,
            });
        },
        onSuccess(response) {
            navigate(AuthorizedPaths.dashboard)
            queryClient.invalidateQueries(queriesKeys.account)
        },

    });
}