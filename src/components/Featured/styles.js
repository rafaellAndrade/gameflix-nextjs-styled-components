import styled from "styled-components";

export const Container = styled.div` 
    display: flex;    
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; 
    font-size: 16px;
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(0,0,0,.50) 0%, rgba(0,0,0,.50) 100%), ${(props) => `url(${props.imgFeatured})`};     
    background-size: cover;
    border-bottom: 1px solid whitesmoke;
    font-family: 'Trebuchet MS', Arial, sans-serif;     
`;

export const DescriptionContainer = styled.div`
    margin-left: 25px;
`;

export const Title = styled.h1`
    margin-top: 15%;
    font-size: 40px;      
`;

export const Description = styled.p`
    margin-top: 10px;
    margin-bottom: 40px;
`;

export const ButtonsContainer = styled.div` 
    display: flex ;    
    
`;
