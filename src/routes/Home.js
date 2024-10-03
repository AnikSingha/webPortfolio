import Header from '../components/Header.js';
import About from '../components/About.js';
import Skills from '../components/Skills.js';
import ContactBtn from '../components/ContactBtn'
import NavBar from '../components/NavBar.js';
import {VStack} from '@chakra-ui/layout'

export default function Home() {
    return (
        <VStack>
            <NavBar/>
            <Header/>
            <About/>
            <Skills/>
            <ContactBtn/>
        </VStack>
    )
}
