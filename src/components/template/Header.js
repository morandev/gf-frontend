import { Link } from "react-router-dom"
import { useAuth } from '../../hooks/useAuth'

const Header = () => {
    const { token, handleLogout } = useAuth();

    return (
        <header className="shadow p-1 mb-2 text-light">
            <nav className="d-flex flex-column container-fluid navbar">
                <ul className="nav d-flex justify-content-center list-unstyled p-1 w-100">
                    <li className="h1 text-center text-wrap d-flex justify-content-between align-items-center px-2 w-100"
                    >
                        <div className="w-50">
                            Relevamiento Grupos Familiares
                        </div>
                        {token &&
                            <div>
                                <button
                                    className="btn btn-danger btn-lg"
                                    onClick={handleLogout}
                                >
                                    Salir
                                </button>
                            </div>
                        }
                    </li>
                </ul>
                {
                    token &&
                    <ul className="d-flex flex-column flex-sm-row list-unstyled w-100 mt-2 px-2">
                        <li className="w-100 h-50">
                            <Link
                                className="btn btn-dark w-100 border border-top-0 
                                    border-secondary border-2 rounded-bottom"
                                to="/dashboard/roles"
                            >
                                Roles
                            </Link>
                        </li>
                        <li className="w-100 h-50">
                            <Link
                                className="btn btn-dark w-100 border border-top-0 
                                    border-secondary border-2 rounded-bottom"
                                to="/dashboard/integrantes"
                            >
                                Integrantes
                            </Link>
                        </li>
                        <li className="w-100 h-50">
                            <Link
                                className="btn btn-dark w-100 border border-top-0 
                                    border-secondary border-2 rounded-bottom text-wrap"
                                to="/dashboard/grupos"
                            >
                                Grupos Familiares
                            </Link>
                        </li>
                    </ul>
                }
            </nav>
        </header>
    )
}

export default Header