import { useForm } from "../../hooks/useForm";
import { crearRol } from "../../services/rolesService";

const FomularioCrearRol = ({ setToggleRol }) => {
    const { formState, onInputChange } = useForm({descripcion:''});

    const crearDataRol = async () => {
        try {
            await crearRol(formState, null);
            setToggleRol(t=>!t)
        } catch (e) {
            console.log(e);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        crearDataRol();
    }

    return (
        <div
            className="my-3 bg-secondary bg-gradient py-4 rounded shadow
                        rounded order-sm-1 order-sm-2 col-sm-4 col-lg-3">
            <form
                className="d-flex flex-column align-items-center mx-auto
                            flex-sm-row flex-sm-wrap flex-sm-column"
                onSubmit={onSubmit}
            >
                <div>
                    <p className="h3 fw-bold border-bottom border-success">Crear Nuevo Rol</p>
                </div>
                <div className="my-2 col-sm-10">
                    <label className="form-label text-body fw-bold">
                        Descripcion:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ingrese descripcion"
                        name="descripcion"
                        pattern="[a-z]{1,100}"
                        title="solo letras en minusculas. e.g. titular"
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="container-fluid d-flex justify-content-evenly">
                    <button className="mt-3 btn btn-success btn-add col-5 col-sm-6 col-lg-5 fw-bold">
                        Crear
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FomularioCrearRol