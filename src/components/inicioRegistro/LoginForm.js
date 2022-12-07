import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../services/authenticationService";
import { AuthContext } from '../../context/AuthContext'

const LoginForm = () => {
    const [auth, setAuth] = useState({ email: '', password: '' })
    const { setToken } = useContext(AuthContext);
    const navigate = useNavigate();


    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setAuth({
            ...auth,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        doLogin();
        clearForm();
    };

    const clearForm = () => {
        setAuth(null);
    };

    const doLogin = async () => {
        try {
            const rps = await login(auth, null)

            if (rps.status === 201) {
                /*
                    contextApi, si el navegador se recarga los datos del context se borran y
                    se debe hacer otra vez ingreso
                 */
                setToken(rps.data.jwt)
                navigate('/dashboard/roles');
            }

        } catch (e) {
            console.log("login error: " + e)
        }
    }

    return (
        <div className="container my-5 bg-light col-10 col-sm-8 col-md-6 col-lg-5
                        col-xl-3 col-xxl-4 py-5 rounded shadow p-3 rounded">
            <p className="form-title h2 text-center text-body text-truncate shadow-sm
                        p-3 mb-5 rounded bg-secondary bg-gradient">
                ¡Bienvenido!
            </p>
            <form
                className="d-flex flex-column align-items-center my-2 mx-auto"
                onSubmit={handleSubmit}
            >
                <div className="my-3">
                    <label className="form-label text-body">Correo Electronico:</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Ingrese correo"
                        name="email"
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label text-body">Contraseña:</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Ingrese Contraseña"
                        name="password"
                        onChange={onInputChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="mt-3 btn btn-dark col-5"
                >
                    Login
                </button>
                <div className="mt-2 text-center">
                    <span>
                        ¿No tienes una cuenta?
                        <Link to="/registro">Registrarme</Link>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default LoginForm