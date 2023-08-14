import { Container, Row, Menu, MenuRight, Wrapper } from './styles';
import logo from '../assets/logo.png';
import Button from '../Button';
import Input from '../Input';

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img
                        src={logo}
                        alt="Logo da DIO"
                    />
                    <Input placeholder="BUSCAR" />
                    <Menu href="#">Live Code</Menu>
                    <Menu href="#">Global</Menu>
                </Row>
                <MenuRight>
                    <Menu href="#">Home</Menu>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                </MenuRight>
            </Container>
        </Wrapper>
    );
};

export default Header;
