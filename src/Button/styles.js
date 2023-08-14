import { styled, css } from 'styled-components';

export const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 2px;
    font-family: Open Sans;
    font-size: 18px;
    line-height: normal;
    background-color: #565656;
    border-radius: 22px;
    min-width: 120px;
    border: none;
    transition: all 0.2s linear;

    &:hover {
        background-color: #333333;
    }

    ${({ $variant }) =>
        $variant === 'primary' &&
        css`
            min-width: 167px;
            height: 33px;

            background-color: #e41050;
            position: relative;

            &:hover {
                background-color: #e41050;
                box-shadow: 0 0 25px 10px #e41050;
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
