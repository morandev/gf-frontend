import { useState } from "react";
import FormularioBuscarIntegrante from "./FormularioBuscarIntegrante"
import FormularioCrearIntegrante from "./FormularioCrearIntegrante"
import TablaListarIntegrantes from "./TablaListarIntegrantes";

const DashboardIntegrantes = () => {
    const [toggleIntegrante, setToggleIntegrante] = useState(false);

    return (
        <div className="container-fluid d-flex flex-column flex-sm-row
                        flex-sm-wrap justify-content-sm-evenly">
            <TablaListarIntegrantes toggleIntegrante={toggleIntegrante} setToggleIntegrante={setToggleIntegrante} />
            <FormularioBuscarIntegrante />
            <FormularioCrearIntegrante setToggleIntegrante={setToggleIntegrante}/>
        </div>
    )
}

export default DashboardIntegrantes