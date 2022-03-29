import InfoButton from '../InfoButton';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { 
    DetailsContainer, 
    TitleContainer,
    AllInfoContainer,
    InfoContainer,
    DescriptionContainer,
    RequirementsContainer 
} from "./styles"
import { useEffect, useState } from 'react';

function ShowDetails({game}){

    const [requeriments, setRequeriments] = useState(null);

    useEffect(() => {
        setRequeriments(game.minimum_system_requirements)
    }, [game])

    const ToPlay = () => {
        alert("Thanks for Play");
    }

    return (
        <DetailsContainer>
            <TitleContainer>
                <h1>{game.title}</h1>
            </TitleContainer>

            <AllInfoContainer>
                <InfoContainer>
                    <InfoButton onClick={ToPlay}>
                        <SportsEsportsIcon fontSize="small"/>
                        <span>Play Now</span>
                    </InfoButton> 
                    <p><span className='label'>Status: </span> {game.status}</p>
                    <p><span className='label'>Genre: </span> {game.genre}</p>
                    <p><span className='label'>Platform: </span> {game.platform}</p>
                    <p><span className='label'>Publisher: </span> {game.publisher}</p>
                    <p><span className='label'>Developer: </span> {game.developer}</p>
                    <p><span className='label'>Date: </span> {game.release_date}</p>
                </InfoContainer>
                <DescriptionContainer>
                    <h2>Description</h2>
                    <p>{game.description}</p>
                </DescriptionContainer>
            </AllInfoContainer>

            <RequirementsContainer>
                <h2>Minimum System Requirements</h2>
                <p><span className='label'>Operational System: </span>{requeriments != null ? requeriments.os !=null ? requeriments.os : 'No Registry' : 'No Registry'}</p>
                <p><span className='label'>Processor: </span>{requeriments != null ? requeriments.os !=null ? requeriments.processor : 'No Registry' : 'No Registry'}</p>
                <p><span className='label'>Memory: </span>{requeriments != null ? requeriments.os !=null ? requeriments.memory : 'No Registry' : 'No Registry'}</p>
                <p><span className='label'>Graphics: </span>{requeriments != null ? requeriments.os !=null ? requeriments.graphics : 'No Registry' : 'No Registry'}</p>
                <p><span className='label'>Storage: </span>{requeriments != null ? requeriments.os !=null ? requeriments.storage : 'No Registry' : 'No Registry'}</p>
            </RequirementsContainer>

        
        </DetailsContainer>
    )
}

export default ShowDetails;