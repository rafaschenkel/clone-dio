import { styled } from 'styled-components';

export const CardContainer = styled.div`
    width: 100%;
    max-width: 767px;
    display: flex;
    flex-direction: column;
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    background-color: #3b4651;
    padding: 20px 20px;
    border-radius: 0 0 8px 8px;

    h4 {
        font-size: 18px;
        font-weight: 700;
    }

    p {
        font-size: 12px;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Profile = styled.img`
    width: 41px;
    height: 41px;
    border-radius: 50%;
    border: 2px solid #fff;
`;

export const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: top;
    border-radius: 8px 8px 0 0;
`;

export const HasInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;

    div {
        display: flex;
        align-items: flex-end;
        gap: 10px;
    }
`;
