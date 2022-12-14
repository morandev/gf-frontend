import axios from "axios";

const baseUrl = 'http://localhost:8080/api/'

export const crearRol = (data, config) => {
    return axios.post(baseUrl + 'roles/crear', data, config);
}

export const borrarRol = (id, config) => {
    return axios.delete(baseUrl + 'roles/' + id, config);
}

export const actualizarRol = (id, data, config) => {
    return axios.put(baseUrl + 'roles/' + id, data, config);
}

export const obtenerRoles = (config) => {
   return axios.get(baseUrl + 'roles', config)
}

export const obtenerRol = (id, config) => {
    return axios.get(baseUrl + 'roles/' + id, config);
}

