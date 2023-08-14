import { styled } from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    height: 90vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Column = styled.div`
    width: 368px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
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
`;

export const Image = styled.img`
    width: 563px;
    height: 366px;
`;
