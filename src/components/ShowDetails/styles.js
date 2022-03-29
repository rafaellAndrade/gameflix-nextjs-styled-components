import styled from "styled-components";

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin: 50px 0px;
    
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
    .label{
        font-weight: bolder;
        font-size: large;  
    }    
`;

export const TitleContainer = styled.div`
    text-align: center;
    border-bottom: 1px solid whitesmoke;
`;

export const AllInfoContainer = styled.div`
    display: flex;
    padding-left: 20px;
    max-width: 100vw;
    margin-bottom: 50px;
    margin-top: 20px;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 250px;
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 25px;
`;

export const RequirementsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    border-top: 1px solid whitesmoke;
    text-align: justify;
`;