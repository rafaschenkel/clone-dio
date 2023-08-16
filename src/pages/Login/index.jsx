/* eslint-disable no-unused-vars */
import Button from '../../Button';
import Header from '../../Header';
import Input from '../../Input';
import { MdEmail, MdLock } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';

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
import { useNavigate } from 'react-router-dom';

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
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur'
    });

    const navigate = useNavigate();

    const onSubmit = async formData => {
        try {
            const user = await api.get(
                `users?email=${formData.email}&password=${formData.password}`
            );
            (await user.data.length) !== 0
                ? navigate('/feed')
                : alert('Usuário ou senha inválidos!');
        } catch (error) {
            alert('Houve um erro, tente novamente!');
        }
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
