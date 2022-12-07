import { faFloppyDisk, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { obtenerGrupo } from "../../services/gruposService"
import { obtenerRol } from "../../services/rolesService"
import { borrarIntegrante, actualizarIntegrante } from '../../services/integrantesService'
import { useAuth } from '../../hooks/useAuth'

const RegistroIntegrante = ({
    id,
    dni = '',
    apellido = '',
    nombre = '',
    tieneTarjetaAlimentaria = false,
    rol = {},
    grupoFamiliar = {},
    setToggleIntegrante }) => {
    const { config } = useAuth();
        
    const handleBorrar = async () => {
        try {
            await borrarIntegrante(id, config);
            setToggleIntegrante(t => !t)
        } catch ({code}) {
            alert('error: '+code);
        }
    }

    const handleGuardar = async(e) => {
        try {
            const celdaDni = document.querySelector(`.integrante-${id}-dni`);
            const celdaApellido = document.querySelector(`.integrante-${id}-apellido`);
            const celdaNombre = document.querySelector(`.integrante-${id}-nombre`);
            const celdaTarjeta = document.querySelector(`.integrante-${id}-tarjeta`);

            if (!isNaN(celdaApellido.innerHTML)) {
                alert('El Apellido debe ser texto!')
                return
            }

            if (celdaApellido.innerHTML.length>60) {
                alert('Apellido muy extenso')
                return
            } 

            if (!isNaN(celdaNombre.innerHTML)) {
                alert('El Nombre debe ser texto!')
                return
            }

            if (celdaNombre.innerHTML.length>80) {
                alert('Nombre muy extenso')
                return
            } 

            if (isNaN(celdaDni.innerHTML)) {
                alert('El DNI debe ser Numerico!')
                return
            }
            
            if (celdaDni.innerHTML.length>8) {
                alert('DNI muy extenso. Maximo 8 digitos.')
                return
            }

            if (celdaDni.innerHTML.length!==8) {
                alert('El DNI no es valido. ex. 35498765')
                return
            } 

            let rspRol = { data: {} };
            let rspGF = { data: {} };

            if (rol.id) 
                rspRol = await obtenerRol(rol.id, config);
                
            if (grupoFamiliar.id)
                rspGF = await obtenerGrupo(grupoFamiliar.id, config);

            const data = {
                "dni": celdaDni.innerHTML,
                "apellido": celdaApellido.innerHTML.trim(),
                "nombre": celdaNombre.innerHTML.trim(),
                "tieneTarjetaAlimentaria": celdaTarjeta.innerHTML === 'tiene' ? true : false,
                "rol": rspRol.data,
                "grupoFamiliar": rspGF.data,
            }

            await actualizarIntegrante(id, data, config);
            setToggleIntegrante(t => !t)
        } catch ({code}) {
            alert('error: '+code);
        }
    }

    return (
        <tr className={`integrante-${id}`}>
            <td>{id}</td>
            <td className={`integrante-${id}-dni`} contentEditable>
                {dni}
            </td>
            <td className={`integrante-${id}-apellido`} contentEditable>
                {apellido}
            </td>
            <td className={`integrante-${id}-nombre`} contentEditable>
                {nombre}
            </td>
            <td className={`integrante-${id}-tarjeta`}>
                {tieneTarjetaAlimentaria ? 'tiene': 'no tiene'}
            </td>
            <td className={`integrante-${id}-rol`}>
                {rol?.descripcion}
            </td>
            <td className={`integrante-${id}-grupo`}>
                {grupoFamiliar?.descripcion}
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

export default RegistroIntegrante