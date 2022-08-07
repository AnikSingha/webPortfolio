import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import EmailProjectCard from '../components/projectCards/EmailProjectCard.js';
import { HStack, VStack, Flex, Text} from '@chakra-ui/layout'
import GameProjectCard from '../components/projectCards/GameProjectCard.js';
import APICard from '../components/projectCards/APICard.js'
import TitanicProjectCard from '../components/projectCards/TitanicProjectCard'
import { useMediaQuery } from '@chakra-ui/react'

export default function Projects() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:1025px)")
    return (
        <VStack>
            <NavBar/>
            <Text fontSize="5xl" fontWeight="bold" >My Projects</Text>
            <Flex alignItems='space-around'>
                <VStack>
                    <EmailProjectCard/>
                    <GameProjectCard/>
                    <APICard/>
                    <TitanicProjectCard/>
                </VStack>
            </Flex>
            <br/><br/>
            <Footer/>
        </VStack>
    )
}