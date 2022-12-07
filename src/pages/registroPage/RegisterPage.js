import Header from '../../components/template/Header'
import Footer from '../../components/template/Footer'
import RegisterForm from '../../components/inicioRegistro/RegisterForm'

const RegisterPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center min-vh-100 bg-dark bg-gradient">
      <Header />
      <RegisterForm />
      <Footer />
    </div>
  )
}

export default RegisterPage