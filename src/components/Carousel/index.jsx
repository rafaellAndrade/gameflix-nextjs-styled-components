import {
    CarouselContainer,
    ItemContainer,
    ImageContainer,
    GenreContainer,
    Item,
    GameTitle,
} from './styles'
import React, { useState, useRef }  from 'react';




function Carousel({props, genre}){

    const [initialX, setInitiaX] = useState(0);
    const [click, setClick] = useState(false);
    const [clickInfo, setClickInfo] = useState(false);
    const carousel = useRef(null); 
    let amountGames = 0;
        
    
    
    const showInfo = (e) => {   
        if(!clickInfo) return;  
        window.location = `details/${e.target.id}`
        console.log('eeeeee');
    }


    const dragCarouselStart = (e) => {
        e.preventDefault();
        setClick(true);      
        setInitiaX(e.clientX);                       
    }

    const mouseIsOut = (e) => {
        setClick(false);
        setClickInfo(true);
    }

    const dragCarouselEnd = (e) => {
        e.preventDefault();        
        setClick(false);
    }

    const dragCarousel = (e) => {

        if(!click) return;

        setClickInfo(false);

        if(e.clientX < initialX) {
            carousel.current.scrollLeft -= (e.clientX - initialX);
            setInitiaX(e.clientX);
        }

        if(e.clientX > initialX) {
            carousel.current.scrollLeft += (initialX - e.clientX);
            setInitiaX(e.clientX);
        }         
    }
  

    return (
        <CarouselContainer>
            <GenreContainer>            
                <h1>{genre}</h1>
            </GenreContainer>
            <ItemContainer ref={carousel} onMouseDown={dragCarouselStart} onMouseUp={dragCarouselEnd} onMouseMove={dragCarousel} onMouseOut={mouseIsOut} >
                {props.shuffleGames != null ? props.shuffleGames.map((game, index) => {
                    if(game.genre === genre && amountGames < 15 ) {
                        
                        amountGames += 1;                        
                        return (                       
                            <Item key = {index} id={game.id} onClick={showInfo} >                                            
                                <ImageContainer>
                                    <img src={game.thumbnail} alt={game.title}/>
                                </ImageContainer> 
                                <GameTitle>{game.title}</GameTitle>                           
                            </Item>                                              
                        )
                    }                    
                }) : ''}                               
            </ItemContainer>            
        </CarouselContainer>
    )
}

export default Carousel;