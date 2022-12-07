import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { register } from "../../services/authenticationService";

const RegisterForm = () => {
    const { setToken } = useContext(AuthContext);
    const navigate = useNavigate();
    const [auth, setAuth] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: ''
    });

    const doRegister = async () => {
        try {
            const rps = await register(auth, null)
            console.log('mira perri le mande esto: ', auth);
            
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


    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setAuth({
            ...auth,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        doRegister();
        clearForm();
    };

    const clearForm = () => {
        setAuth(null);
    };

    return (
        <div className="container my-5 bg-light col-10 col-sm-8 col-md-6 col-lg-5
                    col-xl-3 col-xxl-4 py-5 rounded shadow p-3 rounded">
            <p className="form-title h2 text-center text-body text-truncate
                        shadow-sm p-3 mb-5 rounded bg-secondary bg-gradient">
                Registrarse
            </p>
            <form
                className="row g-3 d-flex flex-column align-items-center my-2 mx-auto"
                onSubmit={handleSubmit}
            >
                <div className="col-12">
                    <label className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ex: Steve"
                        name="nombre"
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="col-12">
                    <label className="form-label">Apellido</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputLastName"
                        placeholder="Ex: Jobs"
                        name="apellido"
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="col-md-12">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="col-12">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="********"
                        name="password"
                        onChange={onInputChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn mt-3 btn btn-dark col-5"
                >
                    Registrarse
                </button>
                <div className="mt-2 text-center">
                    <span>
                        ¿Ya tienes una cuenta?
                        <Link to="/">Iniciar sesión</Link>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm