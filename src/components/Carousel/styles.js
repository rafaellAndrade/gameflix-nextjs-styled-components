import styled from 'styled-components';

export const CarouselContainer = styled.div` 
    display: flex;    
    flex-direction: column;
    height: 400px;
    margin: 0 20px;
    padding-bottom: 50px;
    
`;

export const ItemContainer = styled.div`
    display: flex;  
    height: 350px;
    padding-top: 10px;    
    overflow: auto;
    cursor: grab;

    p {
        display: none;
    }
    
    ::-webkit-scrollbar {
        display: none;
    }
    
`;

export const GameTitle = styled.h4`
    text-align: center;
    font-weight: 200;
`;

export const ImageContainer = styled.div`
    height: 70%;
    width: 100%;   
    pointer-events: none;

    img {
        height: 100%;
        width: 100%;
        border-radius: 15px;
    }
        
`;

export const GenreContainer = styled.div`
    display: flex;
    background-color: w;
    h1 {
        
    }
`;

export const Item = styled.div`    
    display: flex;    
    width: 280px;
    flex: none;  
    flex-direction: column;
    padding: 0 20px;
`;
export const ButtonContainer = styled.div`    
    width: 100%;
    text-align: center;
    
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;

        :first-child {
        transform: rotate(180deg);
        }
    }
`;