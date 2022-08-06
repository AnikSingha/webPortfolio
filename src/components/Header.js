import { Stack, Box, Text, HStack, Flex} from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Button } from '@chakra-ui/button';
import resume from '../Anik_Singha_Resume.pdf'
import Terminal from './Terminal.js'
import React from 'react'

function Header() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
        <Stack>
            <HStack mt='75' ml='50'>
                <Flex>
                <Box mt={isNotSmallerScreen ? "0" : 16} mb="75">
                    <Text fontSize="5xl" fontWeight="semibold" mr="400">Hi, I'm</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.500)" bgClip='text'>Anik Singha</Text>
                    <Text fontWeight='semibold' >A Full-Stack developer and CS student at Hunter College</Text>
                    <a href={resume} download><Button mt={5} colorScheme="blue">My Resume</Button></a>
                </Box>
                </Flex>
                <Terminal/>
            </HStack>
        </Stack>
    )
}

export default Header