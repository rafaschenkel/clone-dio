import { styled } from 'styled-components';

export const UserInfoContainer = styled.div`
    display: flex;
    gap: 15px;

    h4 {
        font-size: 18px;
        font-weight: 700;
    }

    input[type='range'] {
        color: #23dd7a;
    }
`;

export const UserPicture = styled.img`
    width: 41px;
    height: 41px;
    border-radius: 50%;
    border: 2px solid #fff;
`;

export const ProgressBar = styled.div`
    height: 8px;
    border-radius: 10px;
    background-color: #fff;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 10px;
        background-color: #23dd7a;
        width: ${({ $percentual }) => $percentual}%;
    }
`;
