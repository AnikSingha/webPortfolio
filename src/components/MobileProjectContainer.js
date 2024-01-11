import EmailProjectCard from '../components/projectCards/EmailProjectCard.js';
import { VStack, Flex } from '@chakra-ui/layout'
import GameProjectCard from '../components/projectCards/GameProjectCard.js';
import APICard from '../components/projectCards/APICard.js'
import TitanicProjectCard from '../components/projectCards/TitanicProjectCard'
import ChatProjectCard from '../components/projectCards/ChatProjectCard.js'
import WhisperProjectCard from './projectCards/WhisperProjectCard.js';

export default function Projects() {
    return (
        <div>
            <Flex alignItems='space-around'>
                <VStack>
                    <WhisperProjectCard/>
                    <EmailProjectCard/>
                    <ChatProjectCard/>
                    <APICard/>
                    <TitanicProjectCard/>
                    <GameProjectCard/>
                </VStack>
            </Flex>
            <br/><br/>
        </div>
    )
}