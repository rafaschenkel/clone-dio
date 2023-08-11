import { Link } from 'react-router-dom';
import Button from '../../Button';
import Header from '../../Header';

const Home = () => {
    return (
        <div>
            <Header />
            <h1>Home</h1>
            <Link to="/login">Fazer Login</Link>
            <Button title="Entrar" />
            <Button
                title="Cadastrar"
                variant="primary"
            />
        </div>
    );
};

export default Home;
