import { Box, Image, Text, Stack, Button, Badge, Flex, Spacer, HStack } from "@chakra-ui/react";
import whisper from '../images/whisper.jpg'
import { FaGithub } from 'react-icons/fa'
  
export default function WhisperProjectCard(){  
  return (
    <div className="app">
      <Box w="300px" rounded="20px" 
           overflow="hidden" bg="gray.700" mt={10}>
        <Image src= {whisper}
               alt="Card Image" boxSize="300px">
        </Image>
        <Box p={5}>
        <HStack mb="2">
          <Badge variant="solid" colorScheme="purple" rounded="full" px={2}>
              Python
          </Badge>
          <Badge variant="solid" colorScheme="green" rounded="full" px={2}>
              Flask
          </Badge>
          <Badge variant="solid" colorScheme="blue" rounded="full" px={2}>
            Docker
          </Badge>
        </HStack>
          <Stack align="center">
            <Text as="h2" fontWeight="bold" my={2} >
              AI Subtitle Generator
            </Text>
            <Text fontWeight="light">I created my own API for OpenAI's Whisper LLM and then developed a self hostable flask server for it
            </Text>
          <Flex>  
            <Spacer />
            <HStack>
            <a href="https://github.com/AnikSingha/Whisper-API" target='_blank' rel="noreferrer">
              <Button variant="solid" 
                colorScheme="blue" size="sm">
              Code&nbsp;<FaGithub/>
              </Button>
            </a>
          </HStack>
          </Flex>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}
  