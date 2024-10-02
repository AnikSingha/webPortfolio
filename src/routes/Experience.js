import NavBar from '../components/NavBar.js';
//import Footer from '../components/Footer.js';
import {VStack, Text} from '@chakra-ui/layout'

export default function Home() {
    return (
        <VStack>
            <NavBar/>
            <Text fontSize="5xl" fontWeight="bold" >Experience</Text>
        </VStack>
    )
}
