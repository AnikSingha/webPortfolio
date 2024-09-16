import EmailProjectCard from '../components/projectCards/EmailProjectCard.js';
import { HStack, VStack, Flex } from '@chakra-ui/layout'
import { useMediaQuery } from 'react-responsive'
import GameProjectCard from '../components/projectCards/GameProjectCard.js';
import APICard from '../components/projectCards/APICard.js'
import TitanicProjectCard from '../components/projectCards/TitanicProjectCard'
import ChatProjectCard from '../components/projectCards/ChatProjectCard.js'
import WhisperProjectCard from './projectCards/WhisperProjectCard.js';
import JeopardyProjectCard from './projectCards/Jeopardy.js';
import PasswordManagerProjectCard from './projectCards/PasswordManager'

export default function Projects() {
    const isScreenBig = useMediaQuery({ 
        query: '(min-height: 900px)' 
    })

    return (
        <div>
            <Flex alignItems='space-around'>
                <VStack  style={{ marginTop: isScreenBig ? '30px' : '0' }}>
                    <HStack spacing='100px'>
                        <PasswordManagerProjectCard/>
                        <JeopardyProjectCard/>
                        <WhisperProjectCard/>
                    </HStack>
                    <HStack spacing='100px'>
                        <ChatProjectCard/>
                        <APICard/>
                        <EmailProjectCard/>
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