// import { Link } from 'react-router-dom';
import Button from '../../Button';
import Header from '../../Header';
import Input from '../../Input';
import { MdEmail, MdLock } from 'react-icons/md';

import { Container, Link, Links, LoginContainer, TextContent, Title, TitleLogin } from './styles';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleClickSingIn = () => {
        navigate('/feed');
    };

    return (
        <div>
            <Header />

            <Container>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e
                    entrar mais rápido nas empresas mais desejadas.
                </Title>
                <LoginContainer>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <TextContent>Faça seu login e make the change._</TextContent>
                    <Input
                        icon={<MdEmail size={20} />}
                        placeholder="E-mail"
                        $form
                    />
                    <Input
                        icon={<MdLock size={20} />}
                        placeholder="Password"
                        type="password"
                        $form
                    />
                    <Button
                        title="Entrar"
                        $variant="primary"
                        onClick={handleClickSingIn}
                        type="button"
                    />
                    <Links>
                        <Link href="#">Esqueci minha senha</Link>
                        <Link
                            href="#"
                            $variant="green"
                        >
                            Criar conta
                        </Link>
                    </Links>
                </LoginContainer>
            </Container>

            {/* <Link to="/cadastrar">Fazer cadastro</Link>
            <Link to="/">Voltar para home</Link> */}
        </div>
    );
};

export default Login;
