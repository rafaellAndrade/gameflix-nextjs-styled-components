import styled from "styled-components";

export const Container = styled.div`  
    width: 100%;  
    height: 70px;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    background-color: #141414;
    font-family: 'Arial Black', Times;
    position: fixed;
    border-bottom: 1px solid gray;
    top: 0;
    left: 0;
    right: 0;
`;

export const Logo = styled.h1`
    cursor: pointer;
    color: #E50914 ; 
    margin-left: 25px;
    font-size: 40px;
    span {
        color: gold;
        font-size: 50px;
    }
`;

export const OptionsContainer = styled.div`
    display: flex;    
    margin-right: 20px;

    a {
        color: #aaa;
        text-decoration: none;
        margin-right: 50px;
        cursor: pointer;
    }

    a:hover {
        color: #fff;
    }
`;