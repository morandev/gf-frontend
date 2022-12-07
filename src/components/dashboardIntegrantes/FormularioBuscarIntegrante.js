import { useForm } from "../../hooks/useForm"
import { obtenerIntegrante } from '../../services/integrantesService'
import { useAuth } from '../../hooks/useAuth'

const FormularioBuscarIntegrante = () => {
    const { formState, onInputChange } = useForm({ id: '' });
    const { config } = useAuth();

    const getData = async (id) => {
        try {
            await obtenerIntegrante(id, config);
            const row = document.querySelector(`.integrante-${id}`);

            row.classList.add('table-warning');
            setTimeout(() => {
                row.classList.remove('table-warning');
            }, 1000);
        } catch ({ code, response }) {
            if (code === "ERR_BAD_REQUEST") {
                const { data } = response;
                if (data.code === 404)
                    alert(`No existe integrante con ID: ${id}`)
                if (data.code === 400)
                    alert(`Por favor, ingrese un ID valido ex. 1`)
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getData(formState.id);
    }

    return (
        <div className="d-flex justify-content-center my-2 bg-secondary bg-gradient
                        px-1 shadow rounded order-sm-0 col-sm-12 justify-content-sm-end">
            <form
                className="d-flex col-12 flex-column justify-content-center align-items-center
                            col-sm-10 flex-sm-row justify-content-sm-end"
                onSubmit={onSubmit}
            >
                <div className="pt-1 col-sm-5 col-md-4 col-lg-3 text-center">
                    <p className="h3 fw-bold border-bottom border-warning">Buscar Integrante</p>
                </div>
                <div className="col-8 px-1 col-sm-4 col-md-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ingrese id"
                        name="id"
                        value={formState.id}
                        min="1"
                        pattern="[0-9]{1,6}"
                        title="solo numeros. e.g. 1"
                        onChange={onInputChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-warning btn-find my-1 col-4 col-sm-2 fw-bold">
                    Buscar
                </button>
            </form>
        </div>
    )
}

export default FormularioBuscarIntegrante