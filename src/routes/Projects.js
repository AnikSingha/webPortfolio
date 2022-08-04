import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import {VStack} from '@chakra-ui/layout'

export default function Home() {
    return (
        <VStack>
            <NavBar/>
            <Footer/>
        </VStack>
    )
}