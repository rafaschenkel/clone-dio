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
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 374px;
`;

export const Form = styled.form`
    button {
        margin: 40px 0;
    }
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    width: 388px;
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
    justify-content: flex-start;
    gap: 10px;
    align-items: center;
    margin-top: 20px;
`;

export const Link = styled.a`
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    color: #fff;

    ${({ $variant }) =>
        $variant === 'green' &&
        css`
            color: #23dd7a;
        `}
`;
