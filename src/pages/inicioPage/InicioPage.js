import Header from '../../components/template/Header'
import Footer from '../../components/template/Footer'
import LoginForm from '../../components/inicioRegistro/LoginForm'

const InicioPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center min-vh-100 bg-dark bg-gradient">
        <Header />
        <LoginForm />
        <Footer />
    </div>
  )
}

export default InicioPage