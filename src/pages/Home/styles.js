import { styled } from 'styled-components';

export const Container = styled.main`
    width: 80%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 40px;
        align-items: flex-start;
    }
`;

export const Column = styled.div`
    width: 368px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media screen and (max-width: 520px) {
        width: auto;
    }
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 15px;
`;

export const TitleHighLight = styled.span`
    color: #e4105d;
    font-size: 32px;
    font-weight: 700;
    display: block;
`;

export const TextContent = styled.p`
    margin-bottom: 100px;

    @media screen and (max-width: 768px) {
        margin-bottom: 40px;
    }
`;

export const Image = styled.img`
    width: 563px;
    height: 366px;

    @media screen and (max-width: 1024px) {
        width: 400px;
        height: 310px;
    }

    @media screen and (max-width: 520px) {
        width: 300px;
        height: 310px;
    }
`;
