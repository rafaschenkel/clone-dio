import { styled } from 'styled-components';

export const Container = styled.div`
    width: 275px;
    height: 35px;
    display: flex;
    flex-direction: column;
    margin: 30px 0;
    gap: 5px;
`;
export const InputContainer = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    background-color: transparent;
    border-bottom: 1px solid #8647ad;
    border-radius: 0;
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

export const ErrorText = styled.span`
    color: #ee0000;
    font-size: 12px;
    font-weight: 700;
`;
