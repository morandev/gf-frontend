import { faFloppyDisk, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { borrarRol, actualizarRol } from '../../services/rolesService'

const RegistroRol = ({ id, descripcion = '', setToggleRol }) => {

    const handleBorrar = async () => {
        try {
            await borrarRol(id, null);
            setToggleRol(t => !t)
        } catch (e) {
            if (e.code === "ERR_BAD_REQUEST") {
                const { data } = e.response;
                if(data.error === "DataIntegrityViolationException")
                    alert(`Rol ${descripcion} forma parte de una clave foranea.`)
            } 
        }
    }

    const handleGuardar = async (data) => {
        try {
            const celdaDescripcion = document.querySelector(`.rol-${id}-descripcion`);

            data = {
                "descripcion": celdaDescripcion.innerHTML
            }

            await actualizarRol(id, data, null);
            setToggleRol(t => !t)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <tr className={`rol-${id}`}>
            <td>{id}</td>
            <td
                className={`rol-${id}-descripcion`}
                contentEditable
            >
                {descripcion}
            </td>
            <td>
                <button
                    className="btn btn-danger mx-1"
                    onClick={handleBorrar}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleGuardar}
                >
                    <FontAwesomeIcon icon={faFloppyDisk} />
                </button>
            </td>
        </tr>
    )
}

export default RegistroRol