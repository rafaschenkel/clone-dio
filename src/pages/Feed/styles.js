import { styled } from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;
`;

export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Ranking = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Column = styled.div`
    width: 100%;
    max-width: 767px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Profile = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #fff;
`;

export const Title = styled.h4`
    font-size: 18px;
    font-weight: 700;
`;

export const SubTitle = styled.h4`
    color: rgba(255, 255, 255, 0.7);
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 700;
`;

export const TextContent = styled.p`
    font: 12px;
`;
