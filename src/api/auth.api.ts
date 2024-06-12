import { SignupProps } from "../pages/Signup";
import { httpClient } from "./http";

export const signup = async (userData: SignupProps) => {
    const response = await httpClient.post("/users/join", userData);
    return response.data;
};

export const resetRequest = async (data: SignupProps) => {
    const response = await httpClient.post("/users/reset", data);
    return response.data;
};

export const resetPassword = async (data: SignupProps) => {
    const response = await httpClient.put("/users/reset", data);
    return response.data;
};

interface LoginResponse {
    token: string;
}

export const login = async (data: SignupProps) => {
    const response = await httpClient.post<LoginResponse>("/users/login", data);
    return response.data; //LoginResponse interface 적용을 통해 반환값에 token값이 포함된다.
};
