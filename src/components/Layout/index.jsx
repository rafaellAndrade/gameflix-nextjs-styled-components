import { FeaturedContainer, MainContainer } from "./styles";
import Header from '../Header'


function Layout({children}) {
    return (
        <>
            <Header></Header>
            <FeaturedContainer>                
                {children[0]}
            </FeaturedContainer>
            <MainContainer>            
                {children[1]}
            </MainContainer>
        </>
    )
}

export default Layout;