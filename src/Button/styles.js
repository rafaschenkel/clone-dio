import { styled, css } from 'styled-components';

export const ButtonContainer = styled.button`
    color: #fff;
    text-align: center;
    font-family: Open Sans;
    font-size: 18px;
    line-height: normal;
    background-color: #565656;
    border-radius: 22px;
    min-width: 120px;
    height: 25px;
    border: none;
    transition: all 150ms linear;

    &:hover {
        background-color: #333333;
    }

    ${({ variant }) =>
        variant === 'primary' &&
        css`
            min-width: 167px;
            height: 33px;

            background-color: #e41050;
            position: relative;

            &:hover {
                background-color: #e41050;
                box-shadow: 0px 0px 50px 15px #e41050;
            }

            &::after {
                content: '';
                position: absolute;
                top: -5px;
                left: -5px;
                width: calc(100% + 10px);
                height: calc(100% + 10px);
                border-radius: 22px;
                background-color: transparent;
                border: 1px solid #e41050;
            }
        `}
`;
