import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 25px;
`;
export const ImgsContainer = styled.div`
        display: flex;
        flex: none;
        overflow-x: hidden;
        height: 100%;
        width: 650px;

    img {
        height: 100%; 
        width: 100%;
    }
`;

export const ButtonContainer = styled.div`  
    display: flex;
    text-align: center;

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;       
    }

    .rotate {
        transform: rotate(180deg);
        }
`;