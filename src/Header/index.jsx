import { Container, Row, Menu, MenuRight, Wrapper, Profile } from './styles';
import logo from '../assets/logo.png';
import Button from '../Button';
import Input from '../Input';
import { MdSearch } from 'react-icons/md';
import { BsChevronDown } from 'react-icons/bs';

const Header = ({ autenticado }) => {
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
                            <Input
                                icon={<MdSearch size={25} />}
                                placeholder="BUSCAR"
                            />
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
                            <Menu href="#">Home</Menu>
                            <Button title="Entrar" />
                            <Button title="Cadastrar" />
                        </MenuRight>
                    </>
                )}
            </Container>
        </Wrapper>
    );
};

export default Header;
