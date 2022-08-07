import EmailProjectCard from '../components/projectCards/EmailProjectCard.js';
import { VStack, Flex } from '@chakra-ui/layout'
import GameProjectCard from '../components/projectCards/GameProjectCard.js';
import APICard from '../components/projectCards/APICard.js'
import TitanicProjectCard from '../components/projectCards/TitanicProjectCard'

export default function Projects() {
    return (
        <div>
            <Flex alignItems='space-around'>
                <VStack>
                    <EmailProjectCard/>
                    <GameProjectCard/>
                    <APICard/>
                    <TitanicProjectCard/>
                </VStack>
            </Flex>
            <br/><br/>
        </div>
    )
}