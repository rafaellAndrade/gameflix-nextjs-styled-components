import Carousel from "../Carousel";
import { Container } from "./styles";

function Catalog({props}){
    return (
        <Container>             
            <Carousel genre={'MMORPG'} props={props}></Carousel>   
            <Carousel genre={'Shooter'} props={props}></Carousel>   
            <Carousel genre={'Strategy'} props={props}></Carousel>   
            <Carousel genre={'Fighting'} props={props}></Carousel> 
            <Carousel genre={'MOBA'} props={props}></Carousel> 
            <Carousel genre={'Card Game'} props={props}></Carousel>
        </Container>
    )
}

export default Catalog;