import { css, styled } from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    height: 90vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 35px;
    margin-right: 100px;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    width: 565px;
`;

export const TitleLogin = styled.h2`
    font-size: 32px;
    font-weight: 700;
`;

export const TextContent = styled.p`
    font-size: 18px;
`;

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Link = styled.a`
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    color: #e5e044;

    ${({ $variant }) =>
        $variant === 'green' &&
        css`
            color: #23dd7a;
        `}
`;