import Card from '../../Card';
import UserInfo from '../../UserInfo';
import Header from '../../Header';
import { Cards, Container, Ranking, SubTitle, Title } from './styles';
import React from 'react';

const Feed = () => {
    return (
        <div>
            <Header />

            <Container>
                <Cards>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                </Cards>
                <Ranking>
                    <SubTitle># RANKING TOP 5 DA SEMANA</SubTitle>
                    <UserInfo
                        name="Rafael Schenkel"
                        image="https://avatars.githubusercontent.com/u/103801139?v=4"
                        $percentual={40}
                    />
                    <UserInfo
                        name="Rafael Schenkel"
                        image="https://avatars.githubusercontent.com/u/103801139?v=4"
                        $percentual={25}
                    />
                    <UserInfo
                        name="Rafael Schenkel"
                        image="https://avatars.githubusercontent.com/u/103801139?v=4"
                        $percentual={75}
                    />
                    <UserInfo
                        name="Rafael Schenkel"
                        image="https://avatars.githubusercontent.com/u/103801139?v=4"
                        $percentual={90}
                    />
                    <UserInfo
                        name="Rafael Schenkel"
                        image="https://avatars.githubusercontent.com/u/103801139?v=4"
                        $percentual={35}
                    />
                </Ranking>
            </Container>
        </div>
    );
};

export default Feed;
