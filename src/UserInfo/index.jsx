import { UserInfoContainer, UserPicture, ProgressBar } from './styles';

const UserInfo = ({ image, name, $percentual = 0 }) => {
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
