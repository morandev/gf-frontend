import { useEffect, useState } from "react";
import RegistroGrupo from "./RegistroGrupo";
import { obtenerGrupos } from '../../services/gruposService';
import TablaStyles from "./TablaListarGrupos.module.css";

const TablaListarGrupos = ({ toggleGrupo, setToggleGrupo }) => {
    const [grupos, setGrupos] = useState([]);

    const getData = async() => {
        const rsp = await obtenerGrupos();
        setGrupos(rsp.data)
    }

    useEffect(() => {
        getData()
    }, [toggleGrupo])

    return (
        <div className={`my-3 bg-secondary bg-gradient rounded shadow
                        order-2 order-sm-2 order-md-1 col-sm-7 col-lg-8 table-responsive ${TablaStyles.tabla}`}
        >
            <table className="table table-dark table-bordered">
                <caption>Lista de Grupos Familiares</caption>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Barrio</th>
                        <th scope="col">Modificacion</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        grupos.map(({
                            id,
                            descripcion,
                            barrioId,
                            fechaAct
                        }) => <RegistroGrupo
                                key={`grupo-${id}`}
                                id={id}
                                descripcion={descripcion}
                                barrioId={barrioId}
                                fechaAct={fechaAct}
                                setToggleGrupo={setToggleGrupo}
                            />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TablaListarGrupos