import Layout from "../../components/Layout"
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ImgsDetails from "../../components/ImgsDetails";
import ShowDetails from "../../components/ShowDetails";

function Details(props) {

    const router = useRouter();
    const [gameDetails, setGameDetails] = useState([]);
    const id = router.query.gameid

    useEffect(() => {       

        const options = props.getGameId; 
        options.params.id = id;
        axios.request(options).then(function (response) {  
           setGameDetails(response.data);   
        }).catch(function (error) {
            console.error(error);
        });
      }, [id])

    return (
        <Layout>   
            <ImgsDetails game = {gameDetails} ></ImgsDetails>     
            <ShowDetails game = {gameDetails} ></ShowDetails>            
        </Layout>   
    )
}

export async function getServerSideProps(context) {
    const key = process.env.RAPIDAPI_KEY  

    const getGameId = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: {id: '452' },
        headers: {
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
          'x-rapidapi-key': key
        }
      }; 
      
      return {
          props: {            
            getGameId: getGameId
          },
      }
}

export default Details;

