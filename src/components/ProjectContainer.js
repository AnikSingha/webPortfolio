import EmailProjectCard from '../components/projectCards/EmailProjectCard.js';
import { HStack, VStack, Flex } from '@chakra-ui/layout'
import { useMediaQuery } from 'react-responsive'
import GameProjectCard from '../components/projectCards/GameProjectCard.js';
import APICard from '../components/projectCards/APICard.js'
import TitanicProjectCard from '../components/projectCards/TitanicProjectCard'
import ChatProjectCard from '../components/projectCards/ChatProjectCard.js'
import WhisperProjectCard from './projectCards/WhisperProjectCard.js';

export default function Projects() {
    const isScreenBig = useMediaQuery({ 
        query: '(min-height: 900px)' 
    })

    return (
        <div>
            <Flex alignItems='space-around'>
                <VStack  style={{ marginTop: isScreenBig ? '30px' : '0' }}>
                    <HStack spacing='100px'>
                        <WhisperProjectCard/>
                        <ChatProjectCard/>
                        <APICard/>
                    </HStack>
                    <HStack spacing='100px'>
                        <EmailProjectCard/>
                        <TitanicProjectCard/>
                        <GameProjectCard/>
                    </HStack>
                </VStack>
            </Flex>
            <br/><br/>
        </div>
    )
}