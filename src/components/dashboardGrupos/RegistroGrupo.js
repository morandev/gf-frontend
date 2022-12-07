import { faFloppyDisk, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { borrarGrupo, actualizarGrupo } from '../../services/gruposService'

const RegistroGrupo = ({ id, descripcion = '', barrioId = '', fechaAct = {}, setToggleGrupo }) => {

    const handleBorrar = async () => {
        try {
            await borrarGrupo(id, null);
            setToggleGrupo(t => !t)
        } catch (e) {
            if (e.code === "ERR_BAD_REQUEST") {
                const { data } = e.response;
                if (data.error === "DataIntegrityViolationException")
                    alert(`Grupo ${descripcion} forma parte de una clave foranea.`)
            }
        }
    }

    const handleGuardar = async (data) => {
        try {
            const celdaDescripcion = document.querySelector(`.grupo-${id}-descripcion`);
            const celdaBarrioId = document.querySelector(`.grupo-${id}-barrio`);

            if (!isNaN(celdaDescripcion.innerHTML)) {
                alert('La nueva Descripcion debe ser texto!')
                return
            }
            
            if (celdaDescripcion.innerHTML.length>99) {
                alert('Descripcion muy extensa')
                return
            } 
            
            if (celdaDescripcion.innerHTML.length===0) {
                alert('Descripcion no valida!')
                return
            } 

            data = {
                "descripcion": celdaDescripcion.innerHTML.trim(),
                "barrioId": celdaBarrioId.innerHTML,
                "fechaAct": new Date().toLocaleDateString('en-CA'),
            }

            await actualizarGrupo(id, data, null);
            setToggleGrupo(t => !t)
        } catch ({code}) {
            alert('error: '+code);
        }
    }

    return (
        <tr className={`grupo-${id}`}>
            <td>{id}</td>
            <td
                className={`grupo-${id}-descripcion mx-0 no-resizable`}
                contentEditable
            >
                {descripcion}
            </td>
            <td
                className={`grupo-${id}-barrio`}
            >
                {barrioId}
            </td>
            <td
                className={`grupo-${id}-fecha`}
            >
                {fechaAct}
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

export default RegistroGrupo