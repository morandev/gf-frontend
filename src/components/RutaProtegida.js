import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'

const RutaProtegida = ({ children }) => {
    const { token } = useAuth();

    if (!token) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default RutaProtegida