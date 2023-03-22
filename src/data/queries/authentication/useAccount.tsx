import { useQuery } from 'react-query';
import { useEffect } from 'react';
import request from '../../../api/network';
import queryClient from '../../Client';
import queriesKeys from '../../keys';

export default function useAccount(callback?: Callback<Account>) {
    const token = localStorage.getItem('token');

    function logout() {
        localStorage.removeItem('token');
        queryClient.setQueriesData(queriesKeys.account, undefined);
        queryClient.setQueriesData(['temporary'], undefined);
        queryClient.removeQueries(['temporary']);
    }

    function fetchAccount() {
        return request<Account>({
            method: 'get',
            url: `/users/me`,
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then((response) => response.data);
    }

    const query = useQuery<Account>(queriesKeys.account, fetchAccount, {
        refetchOnMount: false,
        enabled: Boolean(token),
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
        onSuccess(data) {
            if (data) {
                callback?.(false, data);
            }
        }, 
        onError() {
            callback?.(true);
        },
    });

    const { isLoading, data, isError } = query;

    useEffect(() => {
        if (!token) {
            callback?.(true);
        }
    }, [callback, token]);

    return { data, isLoading, isError, logout };
}
