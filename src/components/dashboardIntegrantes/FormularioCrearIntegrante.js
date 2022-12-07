import Select from "react-select";
import AsyncSelect from "react-select/async";
import { useForm } from "../../hooks/useForm";
import { crearIntegrante } from "../../services/integrantesService";
import { obtenerRol, obtenerRoles } from "../../services/rolesService";
import { obtenerGrupo, obtenerGrupos } from "../../services/gruposService";
import promisesOptions from "../../utils/promisesOptions"
import { useAuth } from '../../hooks/useAuth'

const FormularioCrearIntegrante = ({ setToggleIntegrante }) => {
    const { formState, setFormState, onInputChange } = useForm({
        dni: '',
        apellido: '',
        nombre: '',
        tieneTarjetaAlimentaria: 'ausente',
        rol: 'ausente',
        grupoFamiliar: 'ausente',
    });
    const { config } = useAuth();

    const crearDataIntegrante = async () => {
        try {

            if (formState.tieneTarjetaAlimentaria === 'ausente') {
                alert('Por favor indique Tarjeta Alimentaria')
                return
            }

            if (formState.rol === 'ausente') {
                alert('Por favor elija o cree un Rol')
                return
            }
            
            if (formState.grupoFamiliar === 'ausente') {
                alert('Por favor elija o cree un Grupo Familiar')
                return
            }

            await crearIntegrante(formState, config);

            setToggleIntegrante(t => !t)
        } catch ({ code, response }) {
            if (code === "ERR_BAD_REQUEST") {
                const { data } = response;
                if (data.code === 409)
                    alert(`Ya existe integrante con DNI: ${formState.dni}`)
            }
        }
    }

    const handleRolChange = async ({ value }) => {
        const rolSelected = await obtenerRol(value, config);

        setFormState((prevState) => ({ ...prevState, rol: rolSelected.data }));
    };


    const handleGrupoChange = async ({ value }) => {
        const grupoSelected = await obtenerGrupo(value, config);

        setFormState((prevState) => ({ ...prevState, grupoFamiliar: grupoSelected.data }));
    };

    const handleOptionChange = ({ value }) => {
        setFormState((prevState) => ({ ...prevState, tieneTarjetaAlimentaria: value }));
    }

    const options = [
        { value: true, label: 'Posee Tarjeta' },
        { value: false, label: 'No posee' }
    ]

    const onSubmit = (e) => {
        e.preventDefault();
        crearDataIntegrante();
    }

    const obtenerGruposWrap = async() => {
        return obtenerGrupos(config)
    }

    const obtenerRolesWrap = async() => {
        return obtenerRoles(config)
    }

    return (
        <div
            className="my-3 bg-secondary bg-gradient py-4 rounded shadow
                        rounded order-sm-1 col-sm-4 col-lg-2">
            <form
                className="d-flex flex-column align-items-center mx-auto
                            flex-sm-row flex-sm-wrap flex-sm-column"
                onSubmit={onSubmit}
            >
                <div>
                    <p className="h4 fw-bold border-bottom border-success text-center">Crear Integrante</p>
                </div>
                <div className="my-2 col-sm-11">
                    <label className="form-label text-body fw-bold">
                        DNI:
                    </label>
                    <input
                        type="text" className="form-control" placeholder="ex. 35498765"
                        name="dni" pattern="[0-9]{1,8}" minLength={8}
                        title="ingrese un dni valido" onChange={onInputChange} required
                    />
                    <label className="form-label text-body fw-bold">
                        Apellido:
                    </label>
                    <input
                        type="text" className="form-control" placeholder="ex. perez"
                        name="apellido" pattern="[a-z]{1,150}"
                        title="solo letras en minusculas. e.g. perez" onChange={onInputChange} required
                    />
                    <label className="form-label text-body fw-bold">
                        Nombre:
                    </label>
                    <input
                        type="text" className="form-control" placeholder="ex. pedro"
                        name="nombre" pattern="[a-z]{1,150}"
                        title="solo letras en minusculas. e.g. pedro" onChange={onInputChange} required
                    />
                    <label className="form-label text-body fw-bold">
                        Tarjeta Alimentaria:
                    </label>
                    <div>
                        <Select
                            cacheOptions
                            defaultOptions
                            options={options}
                            onChange={handleOptionChange}
                        />
                    </div>
                    <label className="form-label text-body fw-bold">
                        Rol:
                    </label>
                    <div>
                        <AsyncSelect
                            cacheOptions
                            defaultOptions
                            loadOptions={promisesOptions(obtenerRolesWrap)}
                            onChange={handleRolChange}
                            placeholder="Elija un Rol"
                        />
                    </div>
                    <label className="form-label text-body fw-bold">
                        Grupo Familiar:
                    </label>
                    <div>
                        <AsyncSelect
                            cacheOptions
                            defaultOptions
                            loadOptions={promisesOptions(obtenerGruposWrap)}
                            onChange={handleGrupoChange}
                            placeholder="Elija un Grupo"
                        />
                    </div>
                    <div className="container-fluid d-flex justify-content-evenly">
                        <button className="mt-3 btn btn-success btn-add col-5 col-sm-6 col-lg-5 fw-bold">
                            Crear
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormularioCrearIntegrante