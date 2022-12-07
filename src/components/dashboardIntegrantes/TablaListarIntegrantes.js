import { useEffect, useState } from "react";
import RegistroIntegrante from "./RegistroIntegrante";
import { obtenerIntegrantes } from '../../services/integrantesService';
import TablaStyles from "./TablaListarIntegrantes.module.css";

const TablaListarIntegrantes = ({ toggleIntegrante, setToggleIntegrante }) => {
    const [integrantes, setIntegrantes] = useState([]);

    const getData = async () => {
        const rsp = await obtenerIntegrantes();
        setIntegrantes(rsp.data)
    }

    useEffect(() => {
        getData()
    }, [toggleIntegrante])

    return (
        <div className={`my-3 bg-secondary bg-gradient rounded shadow
                        order-2 order-sm-2 order-md-1 col-sm-7 col-lg-9 table-responsive ${TablaStyles.tabla}`}
        >
            <table className="table table-dark table-bordered">
                <caption>Lista de Integrantes</caption>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">DNI</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Tarjeta Alimentaria</th>
                        <th scope="col">Rol</th>
                        <th scope="col">Grupo</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        integrantes.map(({
                            id,
                            dni,
                            apellido,
                            nombre,
                            tieneTarjetaAlimentaria,
                            rol,
                            grupoFamiliar,
                        }) => <RegistroIntegrante
                                key={`integrante-${id}`}
                                id={id}
                                dni={dni}
                                apellido={apellido}
                                nombre={nombre}
                                tieneTarjetaAlimentaria={tieneTarjetaAlimentaria}
                                rol={rol}
                                grupoFamiliar={grupoFamiliar}
                                setToggleIntegrante={setToggleIntegrante}
                            />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TablaListarIntegrantes