import { css, styled } from 'styled-components';

export const InputContainer = styled.div`
    width: 275px;
    height: 35px;
    background-color: #2d2d37;
    border-radius: 11px;
    display: flex;
    align-items: center;

    ${({ $form }) =>
        $form !== '' &&
        css`
            background-color: transparent;
            border-bottom: 1px solid #8647ad;
            border-radius: 0;
        `}
`;

export const IconContainer = styled.i`
    margin: 0 10px;
`;

export const InputText = styled.input`
    font-size: 18px;
    background-color: transparent;
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
`;
