import { ButtonContainer } from './styles';

const Button = ({ title, $variant = 'secondary', onClick }) => {
    return (
        <ButtonContainer
            $variant={$variant}
            onClick={onClick}
        >
            {title}
        </ButtonContainer>
    );
};

export default Button;
