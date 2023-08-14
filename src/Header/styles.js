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
`;

export const ContainerSecondary = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const MenuRight = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const Menu = styled.a`
    color: #ffffff;
    text-decoration: none;
    margin-right: 10px;
`;

export const Profile = styled.img`
    width: 41px;
    height: 41px;
    border-radius: 50%;
    border: 2px solid #fff;
    margin-left: 10px;
`;

export const MenuDropDown = styled.button`
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    color: #fff;
    margin-left: 10px;
    transition: all 0.2s linear;

    img {
        width: 25px;
        height: 25px;
    }
`;
