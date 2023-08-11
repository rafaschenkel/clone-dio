import { styled, css } from 'styled-components';

export const ButtonContainer = styled.button`
    color: #FFF;
    text-align: center;
    font-family: Open Sans;
    font-size: 18px;
    line-height: normal;
    background-color: #565656;
    border-radius: 11px;
    min-width: 120px;
    height: 25px;
    border: none;
    transition: all 150ms linear;

    &:hover {
        background-color: #333333;
    }

    ${({variant}) => variant === 'primary' && css`
        min-width: 167px;
        height: 33px;

        background-color: #E41050;

        &:hover {
            background-color: #E41050;
            box-shadow: 0px 0px 10px 1px #F440A0;
        }
    `}
`;
