import {
    Container,
    Row,
    Menu,
    MenuRight,
    Wrapper,
    Profile,
    InputContainer,
    InputText,
    IconContainer
} from './styles';
import logo from '../assets/logo.png';
import Button from '../Button';
import { MdSearch } from 'react-icons/md';
import { BsChevronDown } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Header = ({ autenticado }) => {
    const navigate = useNavigate();

    const handleClickSingIn = () => {
        navigate('/login');
    };

    const handleClickHome = () => {
        navigate('/');
    };

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img
                        src={logo}
                        alt="Logo da DIO"
                    />
                    {autenticado ? (
                        <>
                            <InputContainer>
                                <IconContainer>{<MdSearch size={25} />}</IconContainer>
                                <InputText placeholder="BUSCAR" />
                            </InputContainer>

                            <Menu href="#">Live Code</Menu>
                            <Menu href="#">Global</Menu>
                        </>
                    ) : null}
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
                        </MenuRight>
                    </>
                ) : (
                    <>
                        <MenuRight>
                            <Menu onClick={handleClickHome}>Home</Menu>
                            <Button
                                title="Entrar"
                                onClick={handleClickSingIn}
                            />
                            <Button title="Cadastrar" />
                        </MenuRight>
                    </>
                )}
            </Container>
        </Wrapper>
    );
};

export default Header;
