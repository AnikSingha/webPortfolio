import React from 'react';
import EmailProjectCard from '../components/projectCards/EmailProjectCard.js';
import { HStack, VStack, Flex, Box, Heading } from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';
import GameProjectCard from '../components/projectCards/GameProjectCard.js';
import APICard from '../components/projectCards/APICard.js';
import TitanicProjectCard from '../components/projectCards/TitanicProjectCard';
import ChatProjectCard from '../components/projectCards/ChatProjectCard.js';
import WhisperProjectCard from './projectCards/WhisperProjectCard.js';
import JeopardyProjectCard from './projectCards/Jeopardy.js';
import PasswordManagerProjectCard from './projectCards/PasswordManager';

export default function Projects() {
    const isScreenBig = useMediaQuery({ 
        query: '(min-height: 900px)' 
    });

    return (
        <div>
            <Flex direction="column" alignItems="center">
                <VStack spacing="40px" style={{ marginTop: isScreenBig ? '30px' : '0' }}>
                    
                    {/* Advanced Section */}
                    <Box>
                        <Heading size="lg" mb="20px">Advanced</Heading>
                        <HStack spacing="100px" mb="30px">
                            <PasswordManagerProjectCard/>
                            <JeopardyProjectCard/>
                            <WhisperProjectCard/>
                        </HStack>
                    </Box>

                    {/* Intermediate Section */}
                    <Box>
                        <Heading size="lg" mb="20px">Intermediate</Heading>
                        <HStack spacing="100px" mb="30px">
                            <ChatProjectCard/>
                            <APICard/>
                            <EmailProjectCard/>
                        </HStack>
                    </Box>

                    {/* Beginner Section */}
                    <Box>
                        <Heading size="lg" mb="20px">Beginner</Heading>
                        <HStack spacing="100px" mb="30px">
                            <TitanicProjectCard/>
                            <GameProjectCard/>
                        </HStack>
                    </Box>

                </VStack>
            </Flex>
            <br/><br/>
        </div>
    );
}
