import { css, styled } from 'styled-components';

export const Container = styled.main`
    width: 80%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-top: 50px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    width: 374px;

    @media screen and (max-width: 768px) {
        width: auto;
    }
`;

export const Form = styled.form`
    button {
        margin-top: 40px;
    }
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    width: 565px;

    @media screen and (max-width: 768px) {
        width: auto;
        font-size: 20px;
    }
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
    margin-top: 20px;
    gap: 40px;
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
