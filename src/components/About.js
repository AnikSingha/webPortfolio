import React from 'react'
import { Heading, HStack, VStack, Flex } from '@chakra-ui/layout';

export default function About() {
  return (
    <HStack>
        <VStack>
            <Flex>
            <Heading size="md" fontWeight='semibold'>About Me</Heading>
            </Flex>
        </VStack>
    </HStack>
  )
}
