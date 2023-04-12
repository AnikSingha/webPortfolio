import EmailProjectCard from '../components/projectCards/EmailProjectCard.js';
import { HStack, VStack, Flex } from '@chakra-ui/layout'
import GameProjectCard from '../components/projectCards/GameProjectCard.js';
import APICard from '../components/projectCards/APICard.js'
import TitanicProjectCard from '../components/projectCards/TitanicProjectCard'
import ChatProjectCard from '../components/projectCards/ChatProjectCard.js'

export default function Projects() {
    return (
        <div>
            <Flex alignItems='space-around'>
                <VStack>
                    <HStack spacing='100px'>
                        <EmailProjectCard/>
                        <ChatProjectCard/>
                        <APICard/>
                    </HStack>
                    <HStack spacing='100px'>
                        <TitanicProjectCard/>
                        <GameProjectCard/>
                    </HStack>
                </VStack>
            </Flex>
            <br/><br/>
        </div>
    )
}