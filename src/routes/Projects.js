import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js';
import ProjectContainer from '../components/ProjectContainer.js'
import MobileProjectContainer from '../components/MobileProjectContainer.js'
import { useMediaQuery } from '@chakra-ui/react'
import { VStack, Text } from '@chakra-ui/layout'


export default function Projects() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:1025px)")
    return (
        <VStack>
            <NavBar/>
            <Text fontSize="5xl" fontWeight="bold" >My Projects</Text>
            {isNotSmallerScreen ? <ProjectContainer/> : <MobileProjectContainer/>}
            <Footer/>
        </VStack>
    )
}