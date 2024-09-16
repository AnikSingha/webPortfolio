import { Box, Image, Text, Stack, Button, Badge, Flex, Spacer, HStack } from "@chakra-ui/react";
import chat from '../images/chat.webp'
import { FaGithub, FaExternalLinkAlt} from 'react-icons/fa'
  
export default function ChatProjectCard(){  
  return (
    <div className="app">
      <Box w="300px" rounded="20px" 
           overflow="hidden" bg="gray.700" mt={10}>
        <Image src= {chat}
               alt="Card Image" boxSize="300px">
        </Image>
        <Box p={5}>
        <HStack mb="2">
          <Badge variant="solid" colorScheme="blue" rounded="full" px={2}>
              React
          </Badge>
          <Badge variant="solid" colorScheme="orange" rounded="full" px={2}>
              Firebase
          </Badge>
          <Badge variant="solid" colorScheme="cyan" rounded="full" px={2}>
              Material UI
          </Badge>
        </HStack>
          <Stack align="center">
            <Text as="h2" fontWeight="bold" my={2} >
              Chat App
            </Text>
            <Text fontWeight="light" textAlign="center">A responsive chat app implemented using React and Material UI for the frontend 
            and firebase for the backend
            </Text>
          <Flex>  
            <Spacer />
            <HStack>
            <a href="https://github.com/AnikSingha/chatApp" target='_blank' rel="noreferrer">
              <Button variant="solid" 
                colorScheme="blue" size="sm">
              Code&nbsp;<FaGithub/>
              </Button>
            </a>
            <a href="https://chat-app-aniksingha.vercel.app/" target='_blank' rel="noreferrer">
                <Button variant="solid" 
                colorScheme="blue" size="sm">
                    Try it out&nbsp;<FaExternalLinkAlt/>
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
  