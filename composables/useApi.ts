import axios, { type AxiosError, type AxiosResponse } from 'axios';

export const useApi = () => {
    const baseURL = 'http://localhost:8080/api';

    const handler = axios.create({
        baseURL,
        withCredentials: true,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });


    let isRefreshing = false;
    let refreshQueue: (() => void)[] = [];

    handler.interceptors.response.use((response: AxiosResponse) => {
        return response;
    }, async (error: AxiosError) => {
        if (error.response?.status === 401 && error.request.responseURL !== `${baseURL}/auth/refresh`) {
            if (!isRefreshing) {
                try {
                    isRefreshing = true;
                    await handler.get('/auth/refresh');
                    window.location.href = `${baseURL}/org`;
                } catch (refreshError) {
                    isRefreshing = false;
                    throw { isTokenRefreshError: true };
                } finally {
                    isRefreshing = false;
                }

                refreshQueue.forEach((resolve) => resolve());
                refreshQueue = [];
            }

            const retryOriginalRequest = new Promise((resolve) => {
                refreshQueue.push(() => resolve(handler(error.request)));
            });

            return retryOriginalRequest;
        } else {
            return Promise.reject(error);
        }
    });


    return handler;
};