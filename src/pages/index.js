import axios from 'axios';
import Main from './main';


function Index(props) {    
    return (
        <Main props={props}></Main>
    )
}

export async function getServerSideProps(context) {
    const key = process.env.RAPIDAPI_KEY
    const randomIndex = Math.floor(Math.random() * (368  - 1 + 1)) + 1;

    function shuffleArray(inputArray){
        return inputArray.sort(()=> Math.random() - 0.5);
    }

    let shuffleGames;   
    
    let getGameId = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: {id: '452' },
        headers: {
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
          'x-rapidapi-key': key
        }
      };

    const options = {
          method: 'GET',
          url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
          headers: {
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            'x-rapidapi-key': key
          }
        };
    const allGames = await axios.request(options).then(function (response) {
          let newArray = [...response.data];  
          shuffleGames =  shuffleArray(newArray);     
          return response.data;
      }).catch(function (error) {
          console.error(error);
      });   


      return {
          props: {
            allGames : JSON.parse(JSON.stringify(allGames)),
            randomIndex: randomIndex,
            shuffleGames: JSON.parse(JSON.stringify(shuffleGames)),
            getGameId: getGameId
          },
      }
}

export default Index;