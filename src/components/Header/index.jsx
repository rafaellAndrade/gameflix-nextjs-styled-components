import { Container, Logo, OptionsContainer } from './styles'
import Link from 'next/link';

function Header() {
    return (
        <Container>
            <Link href={'/'}>
                <Logo><span>G</span>AMEFLI<span>X</span></Logo>
            </Link>
            
            <OptionsContainer>
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>Genre</Link>                
            </OptionsContainer>
        </Container>
    )
}

export default Header;