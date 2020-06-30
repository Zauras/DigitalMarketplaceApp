import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import urlConfig from './urlConfig';

const commonHeaders = {
    Authorization: '',
    'Content-Type': 'application/json',
};

// @ts-ignore
const rootApiRoute = `${urlConfig[window.location.host]}`;

class HttpRequestService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            // @ts-ignore
            baseURL: rootApiRoute,
            headers: commonHeaders,
            transformResponse: [
                (data) => {
                    return JSON.parse(data);
                },
            ],
        });
    }

    handleErrors = async (request: any) => {
        try {
            return await request();
        } catch (error) {
            if (error.response) {
                throw new Error(error.response);
            } else if (error.request) {
                throw new Error(error.request);
            } else {
                throw new Error(error);
            }
        }
    };

    get = (url: string, config?: AxiosRequestConfig) =>
        this.handleErrors(() => this.axiosInstance.get(url, config));

    post = (url: string, data?: any, config?: AxiosRequestConfig) =>
        this.handleErrors(() => this.axiosInstance.post(url, data, config));

    put = (url: string, data?: any, config?: AxiosRequestConfig) =>
        this.handleErrors(() => this.axiosInstance.put(url, data, config));

    patch = (url: string, data?: any, config?: AxiosRequestConfig) =>
        this.handleErrors(() => this.axiosInstance.patch(url, data, config));

    delete = (url: string, config?: AxiosRequestConfig) =>
        this.handleErrors(() => this.axiosInstance.delete(url, config));
}

export default HttpRequestService;
