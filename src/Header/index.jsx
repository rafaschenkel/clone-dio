import { Container, Row, Menu, MenuRight, Wrapper } from './styles';
import logo from '../assets/logo.png';
import Button from '../Button';
import Input from '../Input';
import { MdSearch } from 'react-icons/md';

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img
                        src={logo}
                        alt="Logo da DIO"
                    />
                    <Input
                        icon={<MdSearch size={25} />}
                        placeholder="BUSCAR"
                    />
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
