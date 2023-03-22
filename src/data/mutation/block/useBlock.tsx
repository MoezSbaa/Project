import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import request from '../../../api/network';
import useAuth from "../../../hooks/contexts/useAuth";
import {AuthorizedPaths} from "../../../navigation/paths";
import queryClient from "../../Client";

export default function useBlock() {
    return useMutation({
        mutationFn: (username: string) => {
            return request<any>({
                url: '/user/block',
                method: 'post',
                data: {
                    username
                },
            });
        },
        onSuccess() {
        queryClient.invalidateQueries(['users', 'user'])
        queryClient.invalidateQueries(['users', 'coach'])
    }
    });
}