import NavBar from '../components/NavBar.js';
//import Footer from '../components/Footer.js';
import {VStack, Text} from '@chakra-ui/layout'
import Resume from '../components/Resume.js';

export default function Home() {
    return (
        <VStack>
            <NavBar/>
            <Text fontSize="5xl" fontWeight="bold" >Experience</Text>
            <Resume/>
        </VStack>
    )
}
