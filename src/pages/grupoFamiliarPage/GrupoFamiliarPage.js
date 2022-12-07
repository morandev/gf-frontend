import React from 'react'
import Footer from '../../components/template/Footer'
import Header from '../../components/template/Header'

const GrupoFamiliarPage = () => {
  return (
    <>
        <Header />
        <div className="container-fluid d-flex flex-column flex-sm-row
                            flex-sm-wrap justify-content-sm-evenly">
            <TablaListarTodos />
            <FormularioBuscar />
            <FomularioCrear />
        </div>
        <Footer />
    </>
  )
}

export default GrupoFamiliarPage