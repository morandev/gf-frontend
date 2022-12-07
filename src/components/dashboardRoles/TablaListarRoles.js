import { useEffect, useState } from "react";
import RegistroRol from "./RegistroRol";
import { obtenerRoles } from '../../services/rolesService';
import TablaStyles from "./TablaListarRoles.module.css";

const TablaListarRoles = ({toggleRol, setToggleRol}) => {
    const [roles, setRoles] = useState([]);

    const getData = async () => {
        const rsp = await obtenerRoles();
        setRoles(rsp.data)
    }

    useEffect(() => {
        getData()
    }, [toggleRol])

    return (
        <div className={`my-3 bg-secondary bg-gradient rounded shadow
                        order-2 order-sm-2 order-md-1 col-sm-7 col-lg-8 table-responsive ${TablaStyles.tabla}`}
        >
            <table className="table table-dark table-bordered">
                <caption>Lista de roles</caption>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        roles.map(({ id, descripcion }) => <RegistroRol key={`rol-${id}`} id={id} descripcion={descripcion} setToggleRol={setToggleRol}/>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TablaListarRoles