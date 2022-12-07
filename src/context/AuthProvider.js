import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
     const [token, setToken] = useState(null);

     const config = {
          headers: { "Authorization": `Bearer ${token}` }
      }

     const handleLogout = () => {
          const cerrarSesion = window.confirm("¿Seguro que quiere cerrar sesión?")
          cerrarSesion && setToken(null);
     };

     return (
          <AuthContext.Provider value={{ token, setToken, handleLogout, config }}>
               {children}
          </AuthContext.Provider>
     );
};