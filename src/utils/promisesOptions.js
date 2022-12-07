const promisesOptions = (getOptions) => {
    
    const obtenerDatos = async() => {
        const rsp = await getOptions();
        
        const datos = rsp.data.map(({ id, descripcion }) => ({
            value: id,
            label: descripcion
        }));

        return datos;
    }

    return obtenerDatos    
}

export default promisesOptions

