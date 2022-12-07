import axios from "axios";

const baseUrl = 'http://localhost:8080/api/'

export const login = (data, config) => {
    return axios.post(baseUrl + 'authenticate/login', data, config);
}

export const register = (data, config) => {
    return axios.post(baseUrl + 'authenticate/register', data, config);
}
