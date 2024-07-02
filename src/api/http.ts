import axios, { AxiosRequestConfig } from "axios";
import { getToken, removeToken, useAuthStore } from "../store/authStore";

const BASE_URL = "http://localhost:9999";
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
    const axiosInstance = axios.create({
        baseURL: BASE_URL,
        timeout: DEFAULT_TIMEOUT,
        headers: {
            "content-type": "application/json",
            Authorization : getToken() ? getToken() : "",
        },
        withCredentials: true,
        ...config,
    });

    axiosInstance.interceptors.request.use(
        (config) => {
            config.headers["Authorization"] = `${getToken()}`;
            return config;
        },
        (error)=>{
            return Promise.reject(error);
        }
    )

    axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if(error.response.status === 401){
                removeToken();
                window.location.href="/login";
                return;
            }
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export const httpClient = createClient();
