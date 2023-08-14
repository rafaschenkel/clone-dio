import {
    Container,
    ContainerSecondary,
    Menu,
    MenuDropDown,
    MenuRight,
    Profile,
    Wrapper
} from './styles';
import logo from '../assets/logo.png';
import profile from '../assets/profile.jpg';
import menuIcon from '../assets/menu.svg';
import Button from '../Button';
import Input from '../Input';

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <ContainerSecondary>
                    <img
                        src={logo}
                        alt="Logo da DIO"
                    />
                    <Input placeholder="BUSCAR" />
                    <Menu href="#">Live Code</Menu>
                    <Menu href="#">Global</Menu>
                </ContainerSecondary>
                <MenuRight>
                    <Menu href="#">Home</Menu>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                </MenuRight>
                <Profile src={profile} />
                <MenuDropDown>
                    <img
                        src={menuIcon}
                        alt="icone do menu"
                    />
                </MenuDropDown>
            </Container>
        </Wrapper>
    );
};

export default Header;
