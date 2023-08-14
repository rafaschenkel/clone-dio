import { Link } from 'react-router-dom';
import Header from '../../Header';

const Cadastrar = () => {
    return (
        <div>
            <Header />
            <h1>Cadastrar</h1>
            <Link to="/login">Fazer login</Link>
            <Link to="/">Voltar para home</Link>
        </div>
    );
};

export default Cadastrar;
