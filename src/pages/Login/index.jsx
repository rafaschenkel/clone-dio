// import { Link } from 'react-router-dom';
import Button from '../../Button';
import Header from '../../Header';
import Input from '../../Input';
import { MdEmail, MdLock } from 'react-icons/md';
import { useForm } from 'react-hook-form';

import {
    Container,
    Link,
    Links,
    LoginContainer,
    TextContent,
    Title,
    TitleLogin,
    Form
} from './styles';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
    .object({
        email: yup.string().email('E-mail inválido!').required('E-mail deve estar preenchido!'),
        password: yup
            .string()
            .min(3, 'Senha deve conter ao menos 3 caracteres!')
            .required('Password deve estar preenchido!')
    })
    .required();

const Login = () => {
    const {
        control,
        handleSubmit,
        // eslint-disable-next-line no-unused-vars
        formState: { errors, isValid }
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur'
    });
    const onSubmit = data => console.log(data);

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
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            icon={<MdEmail size={16} />}
                            placeholder="E-mail"
                            control={control}
                            name="email"
                            errorMessage={errors?.email?.message}
                        />
                        <Input
                            icon={<MdLock size={16} />}
                            placeholder="Password"
                            type="password"
                            control={control}
                            name="password"
                            errorMessage={errors?.password?.message}
                        />
                        <Button
                            title="Entrar"
                            $variant="primary"
                            type="submit"
                        />
                    </Form>
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
        </div>
    );
};

export default Login;
