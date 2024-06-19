import axios, { AxiosRequestConfig } from "axios";
import { getToken, useAuthStore } from "../store/authStore";

const BASE_URL = "http://localhost:9999";
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
    const axiosInstance = axios.create({
        baseURL: BASE_URL,
        timeout: DEFAULT_TIMEOUT,
        headers: {
            "content-type": "application/json",
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
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export const httpClient = createClient();
