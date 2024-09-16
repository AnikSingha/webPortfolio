import EmailProjectCard from '../components/projectCards/EmailProjectCard.js';
import { VStack, Flex } from '@chakra-ui/layout'
import GameProjectCard from '../components/projectCards/GameProjectCard.js';
import APICard from '../components/projectCards/APICard.js'
import TitanicProjectCard from '../components/projectCards/TitanicProjectCard'
import ChatProjectCard from '../components/projectCards/ChatProjectCard.js'
import WhisperProjectCard from './projectCards/WhisperProjectCard.js';
import JeopardyProjectCard from './projectCards/Jeopardy.js';
import PasswordManagerProjectCard from './projectCards/PasswordManager.js';

export default function Projects() {
    return (
        <div>
            <Flex alignItems='space-around'>
                <VStack>
                    <PasswordManagerProjectCard/>
                    <WhisperProjectCard/>
                    <ChatProjectCard/>
                    <JeopardyProjectCard/>
                    <EmailProjectCard/>
                    <APICard/>
                    <TitanicProjectCard/>
                    <GameProjectCard/>
                </VStack>
            </Flex>
            <br/><br/>
        </div>
    )
}