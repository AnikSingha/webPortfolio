import { Stack, Box, Text, HStack } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import Terminal from './Terminal.js'
import React from 'react'

function Header() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
        <Stack>
                <HStack mt='75' w="100%">
                <Box mt={isNotSmallerScreen ? "0" : 16} mb="75" align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold" mr="400">Hi, I'm</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.500)" bgClip='text'>Anik Singha</Text>
                    <Text fontWeight='semibold'>A Full-Stack developer and CS student at Hunter College</Text>
                </Box>
                <Terminal/>
                </HStack>
        </Stack>
    )
}

export default Header