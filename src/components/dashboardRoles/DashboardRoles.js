
import { useState } from "react";
import FormularioBuscarRol from "./FormularioBuscarRol"
import FomularioCrearRol from "./FormularioCrearRol"
import TablaListarRoles from "./TablaListarRoles"

const DashboardRoles = () => {
    const [toggleRol, setToggleRol] = useState(false);

    return (
        <div className="container-fluid d-flex flex-column flex-sm-row
                        flex-sm-wrap justify-content-sm-evenly">
            <TablaListarRoles toggleRol={toggleRol} setToggleRol={setToggleRol} />
            <FormularioBuscarRol />
            <FomularioCrearRol setToggleRol={setToggleRol} />
        </div>
    )
}

export default DashboardRoles