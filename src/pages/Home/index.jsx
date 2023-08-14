import { Link } from 'react-router-dom';
import Header from '../../Header';

const Home = () => {
    return (
        <div>
            <Header />
            <h1>Home</h1>
            <Link to="/login">Fazer login</Link>
            <Link to="/cadastrar">Fazer cadastro</Link>
        </div>
    );
};

export default Home;
