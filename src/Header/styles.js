import { styled } from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 47px;
    background-color: #151515;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6px;
`;

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    max-width: 1440px;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MenuRight = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const Menu = styled.a`
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    @media screen and (max-width: 445px) {
        display: none;
    }
`;

export const Logoff = styled.a`
    text-decoration: none;
    color: #fff;
    cursor: pointer;
`;

export const Profile = styled.img`
    width: 41px;
    height: 41px;
    border-radius: 50%;
    border: 2px solid #fff;
`;

export const InputContainer = styled.div`
    width: 275px;
    height: 35px;
    background-color: #2d2d37;
    border-radius: 11px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
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
