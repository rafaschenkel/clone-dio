/* eslint-disable no-unused-vars */
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
import React, { useContext } from 'react';
import { IFormData } from './types';
import { AuthContext } from '../../context/auth';

const schema = yup
    .object({
        email: yup.string().email('E-mail inválido!').required('Digite seu email!'),
        password: yup.string().required('Digite sua senha!')
    })
    .required();

const Login = () => {
    const { handleLogin } = useContext(AuthContext);

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onBlur'
    });

    const onSubmit = async (formData: IFormData) => {
        handleLogin(formData);
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
