import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import InicioPage from './pages/inicioPage/InicioPage'
import RegisterPage from "./pages/registroPage/RegisterPage"
import RolesPage from './pages/rolesPage/RolesPage'
import IntegrantesPage from './pages/integrantesPage/IntegrantesPage'
import GrupoFamiliarPage from './pages/grupoFamiliarPage/GrupoFamiliarPage'
import { AuthProvider } from './context/AuthProvider'
import RutaProtegida from './components/RutaProtegida'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route index element={<InicioPage />} />
          <Route path="registro" element={<RegisterPage />} />
          <Route
            path='dashboard/roles'
            element={
              <RutaProtegida>
                <RolesPage />
              </RutaProtegida>
            }
          />
          <Route
            path='dashboard/integrantes'
            element={
              <RutaProtegida>
                <IntegrantesPage />
              </RutaProtegida>
            }
          />
          <Route
            path='dashboard/grupos'
            element={
              <RutaProtegida>
                <GrupoFamiliarPage />
              </RutaProtegida>
            }
          />
          <Route
            path="*"
            element={<h1>No se ha encontrado la pagina que buscabas</h1>}
          />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App