import { Link } from 'react-router-dom';
import Button from '../../Button';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/login">Fazer Login</Link>
            <Button title='Entrar'/>
            <Button title='Cadastrar' variant='primary'/>
        </div>
    );
};

export default Home;
