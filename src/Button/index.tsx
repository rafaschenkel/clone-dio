import React from 'react';
import { ButtonContainer } from './styles';
import { IButton } from './types';

const Button = ({ title, $variant = 'secondary', onClick } : IButton) => {
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
