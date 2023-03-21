import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiURL } from './urls';

const axiosClient = axios.create({ baseURL: ApiURL });

export default function request<T>(configuration: AxiosRequestConfig) {
    const token = localStorage.getItem('token');

    if (token) {
        axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    return axiosClient(configuration).then((response: AxiosResponse<T>) => response);
}
