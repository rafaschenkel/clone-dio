// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../../Button';
import Header from '../../Header';
import banner from '../../assets/banner.png';
import { Column, Container, Image, TextContent, Title, TitleHighLight } from './styles';

const Home = () => {
    const navigate = useNavigate();

    const handleClickSingIn = () => {
        navigate('/login');
    };

    return (
        <div>
            <Header />

            <Container>
                <Column>
                    <Title>
                        <TitleHighLight>Implemente</TitleHighLight>o seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e
                        encare seu novo desafio profissional, evoluindo em comunidade com os
                        melhores experts.
                    </TextContent>
                    <Button
                        title="Começar agora"
                        $variant="primary"
                        onClick={handleClickSingIn}
                    />
                </Column>

                <Image
                    src={banner}
                    alt="imagem destaque"
                />
            </Container>

            {/* <Link to="/login">Fazer login</Link>
            <Link to="/cadastrar">Fazer cadastro</Link> */}
        </div>
    );
};

export default Home;
