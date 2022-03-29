import InfoButton from '../InfoButton';
import InfoIcon from '@mui/icons-material/Info';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { 
    Container, 
    DescriptionContainer, 
    Title,
    Description,
    ButtonsContainer,
} from './styles'
import React, { useEffect, useState }  from 'react';
import Link from 'next/link';
import axios from 'axios';


function Featured({props}) {  

const [srcImage, setSrcImage] = useState('') 
const [randomIndex, setrandomIndex] = useState(props.randomIndex)



  useEffect(() => {
    const id = props.allGames[randomIndex].id

    let options = props.getGameId  
    options.params.id = id
    axios.request(options).then(function (response) {  

        if(response.data.screenshots == [] ){              
          setSrcImage(response.data.thumbnail)        
        } else {
          setSrcImage(response.data.screenshots[0].image) 
        } 
            
    }).catch(function (error) {
        console.error(error);
    });
  }, [randomIndex])   
  

    return (
      <Container imgFeatured = {srcImage}>        
            <DescriptionContainer>              
                <Title>{props.allGames[randomIndex].title}</Title>
                <Description>{props.allGames[randomIndex].short_description}</Description>
                <ButtonsContainer>
                  
                  <Link href={`/details/${props.allGames[randomIndex].id}`}>
                    <InfoButton>
                        <SportsEsportsIcon fontSize="small"/>
                        <span>Play Now</span>
                    </InfoButton>                  
                  </Link>

                  <Link href={`/details/${props.allGames[randomIndex].id}`}>
                    <InfoButton>
                        <InfoIcon fontSize="small"/>
                        <span>Information</span>
                    </InfoButton>                  
                  </Link>                   
                    
                </ButtonsContainer>
            </DescriptionContainer>           
        </Container> 
    )
}

export default Featured;