import Select from "react-select";
import { useForm } from "../../hooks/useForm";
import { crearGrupo } from "../../services/gruposService";

const FormularioCrearGrupo = ({ setToggleGrupo }) => {
    const { formState, onInputChange, setFormState } = useForm({
        descripcion: '',
        barrioId: '',
        fechaAct: new Date().toLocaleDateString('en-CA'),
    });

    const crearDataGrupo = async () => {
        try {
            await crearGrupo(formState, null);
            setToggleGrupo(t => !t)
        } catch (e) {
            console.log(e);
        }
    }

    const handleOptionChange = ({ value }) => {
        setFormState((prevState) => ({ ...prevState, barrioId: value }));
    }

    const options = [
        { value: 1, label: 'B-1' },
        { value: 2, label: 'B-2' },
        { value: 3, label: 'B-3' },
        { value: 4, label: 'B-4' },
        { value: 5, label: 'B-5' },
        { value: 6, label: 'B-6' },
        { value: 7, label: 'B-7' },
        { value: 8, label: 'B-8' },
        { value: 9, label: 'B-9' },
        { value: 10, label: 'B-10' },
        { value: 11, label: 'B-11' },
        { value: 12, label: 'B-12' },
        { value: 13, label: 'B-13' },
        { value: 14, label: 'B-14' },
        { value: 15, label: 'B-15' },
        { value: 16, label: 'B-16' },
        { value: 17, label: 'B-17' },
        { value: 18, label: 'B-18' },
        { value: 19, label: 'B-19' },
        { value: 20, label: 'B-20' },
    ]

    const onSubmit = (e) => {
        e.preventDefault();
        crearDataGrupo();
    }

    return (
        <div
            className="my-3 bg-secondary bg-gradient py-4 rounded shadow
                        rounded order-sm-2 col-sm-4 col-lg-3 mx-sm-3">
            <form
                className="d-flex flex-column align-items-center mx-auto
                            flex-sm-row flex-sm-wrap flex-sm-column"
                onSubmit={onSubmit}
            >
                <div>
                    <p className="h4 fw-bold border-bottom border-success text-center">Crear Grupo Familiar</p>
                </div>
                <div className="my-2 col-sm-11">
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
                    <label className="form-label text-body fw-bold">
                        Barrio:
                    </label>
                    <div>
                        <Select
                            cacheOptions
                            defaultOptions
                            options={options}
                            onChange={handleOptionChange}
                        />
                    </div>
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

export default FormularioCrearGrupo