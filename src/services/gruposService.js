import axios from "axios";

const baseUrl = 'http://localhost:8080/api/'

export const crearGrupo = (data, config) => {
    return axios.post(baseUrl + 'grupos-familiares/crear', data, config);
}

export const borrarGrupo = (id, config) => {
    return axios.delete(baseUrl + 'grupos-familiares/' + id, config);
}

export const actualizarGrupo = (id, data, config) => {
    return axios.put(baseUrl + 'grupos-familiares/' + id, data, config);
}

export const obtenerGrupos = (config) => {
   return axios.get(baseUrl + 'grupos-familiares', config)
}

export const obtenerGrupo = (id, config) => {
    return axios.get(baseUrl + 'grupos-familiares/' + id, config);
}
