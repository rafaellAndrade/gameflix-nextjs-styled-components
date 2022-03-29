import Layout from '../../components/Layout'
import Catalog from '../../components/Catalog';
import Featured from '../../components/Featured';

function Main({props}) {    
    return (
        <Layout props={props}>   
            <Featured props={props}></Featured>     
            <Catalog props={props}></Catalog>            
        </Layout>   
    )
}

export default Main;