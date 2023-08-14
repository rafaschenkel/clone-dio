import { Link } from 'react-router-dom';
import Header from '../../Header';

const Login = () => {
    return (
        <div>
            <Header />
            <h1>Login</h1>
            <Link to="/cadastrar">Fazer cadastro</Link>
            <Link to="/">Voltar para home</Link>
        </div>
    );
};

export default Login;
