import React from 'react';
import { CardContainer, Image, Profile, CardInfo, UserInfo, PostInfo, HasInfo } from './styles';
import { FiThumbsUp } from 'react-icons/fi';

const Card = () => {
    return (
        <CardContainer>
            <Image
                src="https://hermes.dio.me/articles/cover/35cde500-b006-4f99-b1a2-157a79d29d31.jpg"
                alt="banner"
            />
            <CardInfo>
                <UserInfo>
                    <Profile
                        src="https://avatars.githubusercontent.com/u/103801139?v=4"
                        alt="foto de perfil"
                    />
                    <div>
                        <h4>Rafael Schenkel</h4>
                        <p>Há 10 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Desmistificando o Map do Javascript</h4>
                    <p>
                        A função map do javascript é utilizada para percorrer cada item de um array,
                        recebe uma função como... <strong>Veja mais</strong>
                    </p>
                </PostInfo>
                <HasInfo>
                    <h4>#JavaScript</h4>
                    <div>
                        <FiThumbsUp size={18} />
                        <p>12</p>
                    </div>
                </HasInfo>
            </CardInfo>
        </CardContainer>
    );
};

export default Card;
