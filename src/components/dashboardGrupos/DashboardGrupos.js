import { useState } from "react";
import TablaListarGrupos from "./TablaListarGrupos";
import FormularioBuscarGrupo from './FormularioBuscarGrupo'
import FormularioCrearGrupo from './FormularioCrearGrupo'

const DashboardIntegrantes = () => {
    const [toggleGrupo, setToggleGrupo] = useState(false);

    return (
        <div className="container-fluid d-flex flex-column flex-sm-row
                        flex-sm-wrap justify-content-sm-evenly">
            <TablaListarGrupos toggleGrupo={toggleGrupo} setToggleGrupo={setToggleGrupo} />
            <FormularioBuscarGrupo />
            <FormularioCrearGrupo setToggleGrupo={setToggleGrupo} />
        </div>
    )
}

export default DashboardIntegrantes