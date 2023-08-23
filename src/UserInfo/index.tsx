import React from 'react';
import { UserInfoContainer, UserPicture, ProgressBar } from './styles';
import { IUserInfo } from './types';

const UserInfo = ({ image, name, $percentual = 0 } :IUserInfo) => {
    return (
        <UserInfoContainer>
            <UserPicture
                src={image}
                alt="Foto de perfil"
            />
            <div>
                <h4>{name}</h4>
                <ProgressBar $percentual={$percentual} />
            </div>
        </UserInfoContainer>
    );
};

export default UserInfo;
