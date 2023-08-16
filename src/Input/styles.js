import { styled } from 'styled-components';

export const InputContainer = styled.div`
    width: 275px;
    height: 35px;
    display: flex;
    align-items: center;
    background-color: transparent;
    border-bottom: 1px solid #8647ad;
    border-radius: 0;
    margin: 20px 0;
`;

export const IconContainer = styled.i`
    margin: 0 10px;
`;

export const InputText = styled.input`
    font-size: 18px;
    background-color: transparent;
    border: none;
    color: #fff;
`;

export const ErrorText = styled.p`
    color: #ee0000;
    font-size: 12px;
    font-weight: 700;
`;
