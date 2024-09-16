import { Box, Image, Text, Stack, Button, Badge, Flex, Spacer, HStack } from "@chakra-ui/react";
import jeop from '../images/jeop.jpg'
import { FaGithub} from 'react-icons/fa'
  
export default function JeopardyProjectCard(){  
  return (
    <div className="app">
      <Box w="300px" rounded="20px" 
           overflow="hidden" bg="gray.700" mt={10}>
        <Image src= {jeop}
               alt="Card Image" boxSize="300px">
        </Image>
        <Box p={5}>
        <HStack mb="2">
          <Badge variant="solid" colorScheme="cyan" rounded="full" px={2}>
              Golang
          </Badge>
          <Badge variant="solid" colorScheme="blue" rounded="full" px={2}>
              WebSockets
          </Badge>
          <Badge variant="solid" colorScheme="purple" rounded="full" px={2}>
              Networking
          </Badge>
        </HStack>
          <Stack align="center">
            <Text as="h2" fontWeight="bold" my={2} textAlign="center" >
              Jeopardy Buzzer Chrome extension
            </Text>
            <Text fontWeight="light" textAlign="center">
                A chome extension which uses websockets so users can buzz in for a game of Jeopardy
            </Text>
          <Flex>  
            <Spacer />
            <HStack>
            <a href="https://github.com/AnikSingha/Jeopardy" target='_blank' rel="noreferrer">
                <Button variant="solid" 
                colorScheme="blue" size="sm">
                Code &nbsp;<FaGithub/>
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
  