import { ImgsContainer, Container, ButtonContainer } from "./styles"
import React, { useRef }  from 'react';

function ImgsDetails({game}){

    const imgsCarousel = useRef(null);

    const hadleLeftClick = (e) => {
        e.preventDefault();
        
        const currentScroll = imgsCarousel.current.scrollLeft
        imgsCarousel.current.scrollLeft -= imgsCarousel.current.offsetWidth;

        if(imgsCarousel.current.scrollLeft === currentScroll) {            
                imgsCarousel.current.scrollLeft += 100000;
        }
    }

    const hadleRightClick = (e) => {
        e.preventDefault();
        
        const currentScroll = imgsCarousel.current.scrollLeft
        imgsCarousel.current.scrollLeft += imgsCarousel.current.offsetWidth;

        if(imgsCarousel.current.scrollLeft === currentScroll ) {            
            imgsCarousel.current.scrollLeft  = 0;
        } 

    }

    return (
        <Container>
            <ButtonContainer>
                <button className="rotate" onClick={hadleLeftClick}><img src="\img\216151_right_chevronB_icon.png" alt="Scroll Left" /></button>
            </ButtonContainer>
            <ImgsContainer ref={imgsCarousel}>
                <img key={0} src={game.thumbnail} alt={game.title} />
                    {game.screenshots != null ? game.screenshots.map(screen => 
                        <img key={screen.id} src={screen.image} alt={game.title} />
                    ) : ''}
            </ImgsContainer>
            <ButtonContainer>
                <button onClick={hadleRightClick}><img src="\img\216151_right_chevronB_icon.png" alt="Scroll Right" /></button>
            </ButtonContainer>
        </Container>        
    )
}

export default ImgsDetails;