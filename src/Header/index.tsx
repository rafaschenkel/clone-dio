import {
    Container,
    Row,
    Menu,
    MenuRight,
    Wrapper,
    Profile,
    InputContainer,
    InputText,
    IconContainer,
    Logoff
} from './styles';
import logo from '../assets/logo.png';
import Button from '../Button';
import { MdSearch } from 'react-icons/md';
import { BsChevronDown } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Header = () => {
    const { user, handleLogoff } = useAuth();
    const autenticado = user.name && true;

    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/');
    };
    const handleClickSignIn = () => {
        navigate('/login');
    };
    const handleClickRegister = () => {
        navigate('/register');
    };

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img
                        src={logo}
                        alt="Logo da DIO"
                    />
                    {autenticado && (
                        <>
                            <InputContainer>
                                <IconContainer>{<MdSearch size={25} />}</IconContainer>
                                <InputText placeholder="BUSCAR" />
                            </InputContainer>

                            <Menu href="#">Live Code</Menu>
                            <Menu href="#">Global</Menu>
                        </>
                    )}
                </Row>
                {autenticado ? (
                    <>
                        <MenuRight>
                            <Profile
                                src="https://avatars.githubusercontent.com/u/103801139?v=4"
                                alt="Foto do perfil"
                            />
                            <BsChevronDown
                                size={15}
                                color="#FFF"
                                fontWeight={700}
                            />
                            <Logoff onClick={handleLogoff}>Sair</Logoff>
                        </MenuRight>
                    </>
                ) : (
                    <>
                        <MenuRight>
                            {!autenticado && <Menu onClick={handleClickHome}>Home</Menu>}
                            {!autenticado && (
                                <Button
                                    title="Entrar"
                                    onClick={handleClickSignIn}
                                />
                            )}
                            {!autenticado && (
                                <Button
                                    title="Cadastrar"
                                    onClick={handleClickRegister}
                                />
                            )}
                        </MenuRight>
                    </>
                )}
            </Container>
        </Wrapper>
    );
};

export default Header;
