import { Stack, Box, Text, HStack, Flex} from '@chakra-ui/layout';
import { useMediaQuery } from 'react-responsive'
import { Button } from '@chakra-ui/button';
import Terminal from './Terminal.js'
import React from 'react'

function Header() {
    const isNotSmallerScreen = useMediaQuery({
        query: '(min-width: 800px)'
    })
    
    const isScreenBig = useMediaQuery({ 
        query: '(min-height: 900px)' 
    })

    return (
        <Stack>
            <HStack mt={isScreenBig ? '180' : '75'} ml='50' mb={isScreenBig ? '150' : '0'}>
                <Flex alignItems='center' justifyContent='space-around'>
                <Box mt={isNotSmallerScreen ? "0" : 16} mb="75">
                    <Text fontSize={isNotSmallerScreen ? "5xl" : "5xl"} fontWeight="semibold" mr={isNotSmallerScreen ? "400" : "0"}>Hi, I'm</Text>
                    <Text fontSize={isNotSmallerScreen ? "7xl" : "5xl"} fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.500)" bgClip='text'>Anik Singha</Text>
                    <Text fontWeight='semibold' >A Full-Stack developer and CS student at Hunter College</Text>
                    <a href={'/Anik-Singha-Resume.pdf'} download="Anik-Singha-Resume.pdf"><Button mt={5} colorScheme="blue">My Resume</Button></a>
                </Box>
                </Flex>
                <Terminal/>
            </HStack>
        </Stack>
    )
}

export default Header