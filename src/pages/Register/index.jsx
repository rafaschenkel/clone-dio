import Button from '../../Button';
import Header from '../../Header';
import Input from '../../Input';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
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
        name: yup.string().required('Nome deve estar preenchido!'),
        email: yup.string().email('E-mail inválido!').required('E-mail deve estar preenchido!'),
        password: yup
            .string()
            .min(3, 'Senha deve conter ao menos 3 caracteres!')
            .required('Password deve estar preenchido!')
    })
    .required();

const Register = () => {
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
            const registers = await api.get('users/');
            const newUser = {
                id: registers.data.length + 1,
                name: formData.name,
                email: formData.email,
                password: formData.password
            };

            await api.post('users/', newUser, {
                'Content-Type': 'application/json'
            });
            alert('Cadastro realizado com sucesso!');
            navigate('/login');
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
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <TextContent>Crie sua conta e make the change._</TextContent>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            icon={<MdPerson size={16} />}
                            placeholder="Nome completo"
                            control={control}
                            name="name"
                            errorMessage={errors?.name?.message}
                        />
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
                            title="Criar minha conta"
                            $variant="primary"
                            type="submit"
                        />
                    </Form>
                    <TextContent>
                        Ao clicar em &quot;criar minha conta grátis&quot;, declaro que aceito as
                        Políticas de Privacidade e os Termos de Uso da DIO.
                    </TextContent>
                    <Links>
                        <Link href="#">Já tenho conta.</Link>
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

export default Register;
