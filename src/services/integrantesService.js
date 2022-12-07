import axios from "axios";

const baseUrl = 'http://localhost:8080/api/'

export const crearIntegrante = (data, config) => {
    return axios.post(baseUrl + 'integrantes/crear', data, config);
}

export const borrarIntegrante = (id, config) => {
    return axios.delete(baseUrl + 'integrantes/' + id, config);
}

export const actualizarIntegrante = (id, data, config) => {
    return axios.put(baseUrl + 'integrantes/' + id, data, config);
}

export const obtenerIntegrantes = (config) => {
   return axios.get(baseUrl + 'integrantes', config)
}

export const obtenerIntegrante = (id, config) => {
    return axios.get(baseUrl + 'integrantes/' + id, config);
}
